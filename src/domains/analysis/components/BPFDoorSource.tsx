"use client";

export default function BPFDoorSource() {
  return (
    <div className="mt-6 mb-6 bg-slate-50 p-5 rounded-lg border border-slate-200">
      <h4 className="text-lg font-semibold text-purple-800 mb-3">
        BPFDoor 악성코드 소스 분석
      </h4>
      <p className="text-sm text-slate-700 mb-4">
        보안 연구진이 분석한 BPFDoor 소스 코드(GitHub에 유출)를 통해 해당
        악성코드의 구체적인 작동 방식을 살펴보겠습니다. 이 분석은 SK텔레콤
        해킹에 사용된 악성코드의 내부 구조를 이해하는 데 중요한 시사점을
        제공합니다.
      </p>

      <div className="space-y-4">
        <div>
          <h5 className="font-semibold text-purple-700 mb-2">
            악성코드 구성 및 주요 파일
          </h5>
          <p className="text-sm text-slate-700 leading-relaxed">
            유출된 BPFDoor 소스 코드는 GitHub의 공개 저장소에서 확인되며, 주로
            bpfdoor.c 단일 C 소스 파일로 이루어져 있습니다. 해당
            저장소(gwillgues/BPFDoor)는 2023년 6월 7일 아카이브되어 읽기
            전용으로 보관되고 있으며, 개발 언어는 100% C로 표시되어 있습니다.
            bpfdoor.c 파일에는 악성코드의 초기 설정부터 패킷 필터 설치, 백도어
            통신 및 쉘 실행까지 모든 주요 기능이 구현되어 있습니다. 별도의 구성
            파일이나 스크립트는 포함되어 있지 않고, 동작에 필요한 값들은 코드에
            하드코딩되어 있습니다 (예: 프로세스 위장 이름, PID 파일 경로, 패킷
            필터 바이트코드, 포트 범위 등).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
            <h6 className="font-semibold text-purple-700 mb-2">
              메인 함수 (main)
            </h6>
            <p className="text-xs text-slate-700 leading-relaxed">
              프로그램 진입점으로, 초기 환경 설정과 자기 복제 및 프로세스 숨김
              작업을 수행합니다. 중복 실행 방지를 위해 뮤텍스 역할의 PID 파일을
              확인하고, 루트 권한이 아닐 경우 즉시 종료합니다. 인자가 없이
              실행되면 자기 자신을 메모리에 복사/실행하는 to_open() 루틴을 거쳐
              프로세스를 &quot;/dev/shm/kdmtmpflush&quot;라는 임시 파일명으로
              재실행합니다. 그런 다음 파일 타임스탬프를 조작하고(setup_time),
              프로세스 이름을 &quot;dbus-daemon --system&quot; 등 정상
              프로세스로 위장한 뒤(set_proc_name), 데몬화(fork 후 부모 종료,
              setsid() 호출)를 수행합니다. 신호 핸들러를 설정하고 PID 파일을
              생성한 후, 핵심 백도어 로직인 packet_loop() 함수를 호출합니다.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
            <h6 className="font-semibold text-purple-700 mb-2">
              프로세스 은신/위장 관련 함수
            </h6>
            <p className="text-xs text-slate-700 leading-relaxed">
              set_proc_name(argc, argv, mask)는 현재 프로세스의 명령행(argv)를
              지정된 위장 문자열(예: &quot;dbus-daemon --system&quot;)로
              덮어써서 ps 명령 등에 표시되는 이름을 변경합니다. 또한 리눅스
              prctl(PR_SET_NAME) 시스템호출을 통해 커널 레벨의 프로세스 이름도
              변경하여 이중으로 속입니다. to_open(src_path,
              &quot;kdmtmpflush&quot;) 함수는 자기 자신을 /dev/shm 메모리 공간에
              복제 후 실행하는 역할을 합니다. 이를 통해 원본 파일을 디스크에서
              지운 뒤(unlink)에도 프로세스가 메모리에서 계속 동작하게 만들어
              디스크 포렌식으로 발견하기 어렵게 합니다.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
            <h6 className="font-semibold text-purple-700 mb-2">
              패킷 수신 루프 (packet_loop)
            </h6>
            <p className="text-xs text-slate-700 leading-relaxed">
              백도어의 핵심 루프로, 원격 명령 트리거 패킷을 수신 대기합니다. 이
              함수에서는 먼저
              <strong>원시 소켓(raw socket)</strong>을 열고 (socket(PF_PACKET,
              SOCK_RAW, ETH_P_IP) 호출), 거기에 커스텀 BPF 필터를
              setsockopt(..., SO_ATTACH_FILTER, ...)로 장착합니다. 해당 BPF
              필터는 특정 &quot;매직 바이트&quot; 조건을 만족하는 패킷만
              커널에서 받아들이고 그 외 모든 패킷은 커널 단계에서 Drop해
              버리도록 설계되어 있습니다. 필터 설정 후 packet_loop()는 무한
              루프로 recvfrom()을 사용해 패킷을 대기하며, 들어온 패킷이 필터를
              통과하면 TCP/UDP/ICMP 여부에 따라 해당 프로토콜 헤더를 파싱하고
              embedded된 명령/인증 데이터를 추출합니다. 유효한 매직 패킷을
              감지하면 해당 패킷을 처리하기 위해 새로운 자식 프로세스를
              생성(fork)하고, 백도어 세션 처리를 수행합니다. 부모 프로세스는
              루프를 지속하여 다음 명령을 대기함으로써 지속적인 백도어 세션
              관리가 가능합니다.
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
            <h6 className="font-semibold text-purple-700 mb-2">
              명령 처리 및 쉘 실행 함수
            </h6>
            <p className="text-xs text-slate-700 leading-relaxed">
              수신된 매직 패킷에서 인증 키/암호와 포트/명령 정보를 파싱한 후,
              logon() 함수를 통해 인증 검증을 수행합니다. 인증 결과에 따라
              switch(cmp)로 분기하여 세 가지 동작을 합니다: (1) getshell(sip,
              port): 공격자의 IP(sip)와 지정 포트로 포트 포워딩 shell을 열어주는
              함수로, 로컬에 임시 포트 리스너를 열고 attacker의 연결을 받아 쉘을
              제공합니다. (2) try_link(bip, port) 및 shell(scli): 역방향
              연결(reverse shell) 방식으로, 미리 정해진 C2 IP(bip)와 포트로
              연결을 수립하고 해당 소켓에 시스템 쉘을 연결시킵니다. (3) mon(bip,
              port): 인증 실패 또는 특정 모드일 경우, 별도 쉘을 제공하지 않고
              간단한 ACK 응답 등 모니터 동작만 수행합니다. 실제 쉘 제공은
              shell() 함수 내에서 fork() 후 자식 프로세스에 /bin/sh 실행 혹은
              dup2로 소켓을 STDIO에 연결하는 방식으로 이루어지며, 부모
              프로세스는 즉시 exit(0)하여 메인 백도어 프로세스와 분리됩니다.
            </p>
          </div>
        </div>

        <div>
          <h5 className="font-semibold text-purple-700 mb-2">
            환경 설정 및 기타 특징
          </h5>
          <p className="text-sm text-slate-700 leading-relaxed">
            BPFDoor는 다음과 같은 보조 기능도 포함하고 있습니다:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-xs text-slate-700">
            <li>init_signal() - 시그널 무시 설정을 통한 프로세스 종료 방지</li>
            <li>sig_child() - 좀비 프로세스 처리로 자원 누수 방지</li>
            <li>
              setup_time(path) - 파일 타임스탬프 조작으로 포렌식 분석 방해
            </li>
            <li>
              close_open_fds() - 표준 입출력 및 불필요한 파일 디스크립터 닫기
            </li>
          </ul>
          <p className="text-sm text-slate-700 mt-3 leading-relaxed">
            BPFDoor는 /var/run/haldrund.pid 또는 /var/run/kdevrund.pid 등의 PID
            파일을 생성하여 자신이 실행 중임을 기록하며, 이를 통해 이중 실행을
            방지합니다. 또한 코드에는 경량화된 RC4 암호화 구현 (rc4_init,
            rc4_crypt 등)과 BPF 필터에 대응되는 struct magic_packet 구조체
            정의가 포함되어 있어, 패킷 내에 포함된 암호화된 명령이나 인증 값을
            처리합니다.
          </p>
          <p className="text-sm text-slate-700 mt-3 leading-relaxed">
            요약하면, BPFDoor 악성코드는 단일 바이너리로 동작하며 자체적으로
            복제-위장-필터-쉘제공의 모든 기능을 포함하고 있습니다. 이러한 설계는
            탐지를 극도로 어렵게 만들며, 특히 공격자가 명령을 보내지 않을 때는
            거의 흔적 없이 시스템에 잠복할 수 있게 해줍니다.
          </p>
        </div>

        {/* 프로세스 흐름 요약 섹션 추가 */}
        <div className="mt-6 pt-6 border-t border-slate-200">
          <h5 className="font-semibold text-purple-700 mb-2">
            BPFDoor 프로세스 흐름 상세 분석
          </h5>
          <p className="text-sm text-slate-700 mb-3">
            BPFDoor의 동작 흐름을 프로그램 시작부터 백도어 쉘 제공까지 단계별로
            정리한 상세 과정을 살펴보겠습니다.
          </p>

          <div className="space-y-5">
            <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
              <h6 className="font-semibold text-purple-700 mb-2">
                1. 프로그램 초기 실행 및 자기 복제
              </h6>
              <p className="text-xs text-slate-700 leading-relaxed">
                BPFDoor가 실행되면 먼저 중복 실행 방지를 위해 지정된 경로의 PID
                파일(pid_path) 존재 여부를 확인합니다. 이미 해당 파일이 있으면
                즉시 종료하여 두 번째 인스턴스가 뜨지 않도록 합니다. 다음으로
                getuid()를 호출해 현재 사용자 권한이 root인지 확인하며, root
                권한이 아닐 경우 동작에 필요한 Raw 소켓 생성 등이 불가능하므로
                그대로 종료합니다.
              </p>
              <p className="text-xs text-slate-700 leading-relaxed mt-2">
                이어서 인자(argc)를 점검하여 최초 실행인지 여부를 판단합니다.
                만약 아무 인자 없이(일반적인 실행) 프로그램이 호출되었다면,
                to_open(argv[0], &quot;kdmtmpflush&quot;) 함수를 통해 현재 실행
                파일을 메모리 상에 복제하도록 시도합니다. to_open 함수는 원본
                실행파일을
                <code className="text-red-600 bg-red-50 px-1 py-0.5 rounded">
                  /dev/shm/kdmtmpflush
                </code>{" "}
                이름의 임시 파일로 복사한 뒤 이 파일을 새 프로세스로 exec하도록
                구성되어 있습니다.
              </p>
              <p className="text-xs text-slate-700 leading-relaxed mt-2">
                복제가 성공하면 원래 프로세스는 _exit(0)으로 종료되고, 새롭게
                실행된 자식 프로세스가 이어서 동작합니다. 이 자식 프로세스는
                실행 인자를 추가로 받아 (argc {">"} 1 상태) 자신이 복제 실행된
                두 번째 단계임을 인지하고, 더 이상 to_open을 반복하지 않습니다.
                또한 복제 직후 원본 파일을 <strong>삭제(unlink)</strong>하여
                디스크에 남은 악성코드 흔적을 지웁니다. 이 과정으로 BPFDoor는
                메모리 상에서만 존재하며, 파일시스템에서 사라져 포렌식 난이도를
                높입니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
              <h6 className="font-semibold text-purple-700 mb-2">
                2. 프로세스 위장 및 데몬화
              </h6>
              <p className="text-xs text-slate-700 leading-relaxed">
                복제된 프로세스는 먼저 자기 자신의 파일 메타데이터(최종 수정시각
                등)를 과거의 임의 시간으로 변경하여, 최근에 생성/실행된 티가
                나지 않도록 합니다. 그런 다음 set_proc_name 루틴을 통해
                프로세스의 커맨드라인과 이름을 교체합니다. 기본적으로 설정된
                위장 이름은 리눅스 시스템에서 흔히 볼 수 있는 &quot;dbus-daemon
                --system&quot;이며, 이 외에도 변종에 따라 avahi-daemon이나
                auditd 등의 이름으로 변경하기도 합니다.
              </p>
              <p className="text-xs text-slate-700 leading-relaxed mt-2">
                이를 위해 argv[0] 버퍼를 덮어써서 프로세스 리스트에 가짜
                인수처럼 표시하고, prctl(PR_SET_NAME) 호출로 프로세스 이름을
                커널에 등록합니다. 프로세스 위장이 완료되면,
                데몬화(daemonization) 단계에 진입합니다. fork()를 호출하여 부모
                프로세스(원래 터미널에 연결된 프로세스)를 종료시킴으로써
                백그라운드로 전환하고, 자식 프로세스를 새로운 세션 리더로 만들기
                위해 setsid()를 호출합니다.
              </p>
              <p className="text-xs text-slate-700 leading-relaxed mt-2">
                이로써 BPFDoor 프로세스는 터미널이나 사용자 세션과 분리되어
                시스템 데몬처럼 은밀히 실행됩니다. 추가로 signal(SIGCHLD,
                SIG_IGN) 등을 설정하여 좀비 프로세스가 남지 않도록 하고, 표준
                입력/출력/에러 파일 디스크립터를 닫아 불필요한 입출력 통로를
                제거합니다. 마지막으로 현재 프로세스의 PID를 /var/run/...pid
                파일에 기록하여 뮤텍스 역할을 수행하게 합니다. BPFDoor는 변종에
                따라 haldrund.pid, kdevrund.pid, initd.lock 등 다양한 이름의
                PID/Lock 파일을 사용했는데, 이는 정상 시스템 프로세스(pid
                파일)로 오인되기 쉽도록 한 장치입니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
              <h6 className="font-semibold text-purple-700 mb-2">
                3. BPF 필터 설치 및 패킷 대기
              </h6>
              <p className="text-xs text-slate-700 leading-relaxed">
                초기화를 마친 BPFDoor 데몬 프로세스는 곧바로 packet_loop()
                함수를 호출하여 네트워크 패킷 수신 대기 상태로 들어갑니다. 이
                함수에서는 먼저 socket(PF_PACKET, SOCK_RAW, htons(ETH_P_IP))으로
                Raw 소켓을 생성합니다. PF_PACKET/RAW 소켓은 이더넷 레벨의 모든
                패킷을 수신할 수 있는 소켓으로, root 권한이 필요하며 일반적으로
                패킷스니퍼(tcpdump 등)가 사용하는 인터페이스입니다.
              </p>
              <p className="text-xs text-slate-700 leading-relaxed mt-2">
                소켓 생성 후, BPFDoor는 핵심인 BPF 필터를 설정합니다. 코드에
                하드코딩된 sock_filter bpf_code[] 배열에는 일련의 BPF 명령어
                바이트코드가 들어있으며, 이를 sock_fprog filter 구조체를 통해
                setsockopt(sock, SOL_SOCKET, SO_ATTACH_FILTER, &filter, ...)로
                커널에 적재합니다.
              </p>
              <p className="text-xs text-slate-700 leading-relaxed mt-2">
                <strong className="text-blue-700">BPF 필터 역할</strong>: 이
                필터는 매직 시그니처를 포함한 특정 패킷만 커널에서 사용자
                공간으로 전달하고, 그 외의 모든 네트워크 트래픽은 해당 Raw
                소켓에는 도달하지 않도록 차단합니다. 예를 들어, BPF 명령어들은
                다음과 같은 논리를 구현합니다:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-xs text-slate-700 ml-2">
                <li>Ethernet 프레임의 EtherType이 0x0800(IPv4)인지 확인</li>
                <li>
                  IP 헤더의 프로토콜 필드가 UDP(17)인지 검사하여 UDP가 아니라면
                  다른 프로토콜(TCP/ICMP) 처리로 분기
                </li>
                <li>
                  IP 헤더의 식별자(ID) 또는 Fragment Offset 필드에 특정
                  값(일종의 플래그)이 세팅되어 있는지 확인
                </li>
                <li>
                  이후 패킷의 페이로드에 미리 정의된 패스워드/포트/키 값이
                  존재하는지 연속 비교
                </li>
              </ul>
              <p className="text-xs text-slate-700 leading-relaxed mt-2">
                이러한 일련의 조건을 모두 만족하면 해당 패킷을{" "}
                <strong>길이 0xffff로 반환(accept)</strong>하고, 조건 불일치 시{" "}
                <strong>0으로 반환(drop)</strong>합니다. 요약하면 IPv4 + (TCP
                또는 UDP 또는 ICMP) + &quot;특정 매직 데이터&quot; 조합의 패킷만
                백도어가 볼 수 있고, 나머지 모든 패킷은 커널에서 필터링되어
                BPFDoor 프로세스에 도달하지 않습니다.
              </p>
              <p className="text-xs text-slate-700 leading-relaxed mt-2">
                KISA 및 S2W 분석에 따르면 BPFDoor에서 사용하는 매직 시퀀스
                값들은 변종에 따라 다소 차이가 있으나, 0x5293, 0x39393939,
                0x7255 등이 일관되게 식별되었습니다. 이는 필터가 IP 헤더의
                Identification 필드(0x5293)나 특정 32비트 키(0x39393939
                &quot;9999&quot;) 등을 검사함을 의미합니다. 최신 변종의 경우
                무려 229개에 달하는 BPF 명령어로 필터를 구성하여 복잡한 조건을
                적용하였다고 보고되는데, 일반적으로는 수십 줄 내의 비교 연산으로
                구현됩니다.
              </p>
              <div className="bg-gray-100 p-3 rounded-md text-xs mt-3 font-mono text-gray-800 whitespace-pre overflow-x-auto">
                {`struct sock_filter bpf_code[] = {
    { 0x28, 0, 0, 0x0000000c },    // LDH [12]  이더타입(EtherType) 로드
    { 0x15, 0, 27, 0x00000800 },   // JEQ 0x0800 -> IPv4 아니면 패스(drop)
    { 0x30, 0, 0, 0x00000017 },    // LDB [23]  IP 프로토콜 필드 로드
    { 0x15, 0, 5, 0x00000011 },    // JEQ 17 (UDP) 아니면 TCP/ICMP 처리로 건너뜀
    { 0x28, 0, 0, 0x00000014 },    // LDH [20]  (IP Identification 필드 로드)
    { 0x45, 23, 0, 0x00001fff },   // JGE 0x1fff -> 매직 플래그 확인
    ... /* (이후 특정 패스워드, 포트, 키 값 비교) */ ...
    { 0x6, 0, 0, 0x0000ffff },    // RET 0xffff (조건 일치: 패킷 전체 전달)
    { 0x6, 0, 0, 0x00000000 }     // RET 0x0    (조건 불일치: 패킷 버림)
};
filter.len = sizeof(bpf_code)/sizeof(bpf_code[0]);
setsockopt(sock, SOL_SOCKET, SO_ATTACH_FILTER, &filter, sizeof(filter));`}
              </div>
              <div className="text-xs text-slate-500 text-center mt-1">
                BPFDoor의 BPF 필터 코드 조각 (출처: 공개 소스 코드)
              </div>

              <p className="text-xs text-slate-700 leading-relaxed mt-3">
                필터 부착 후 BPFDoor는 while(1) 루프로 recvfrom(sock, ...)을
                호출하여 패킷 수신을 대기합니다. 이때 일반 트래픽에는 반응하지
                않으므로 CPU 소모 없이 수년간 잠복이 가능합니다. 필터 조건에
                맞는 패킷이 수신되면, 이더넷 헤더를 건너뛴 버퍼를 IP/TCP/UDP
                구조체로 캐스팅하여 세부 필드를 파싱합니다.
              </p>
              <p className="text-xs text-slate-700 leading-relaxed mt-2">
                BPFDoor는 TCP, UDP, ICMP 각각의 프로토콜에 대해 매직 패킷 구조체
                (magic_packet) 위치를 계산하는 로직이 구현되어 있습니다. 예를
                들어 UDP의 경우 IP 헤더 뒤 8바이트(UDP 헤더)를 건너뛴 위치를
                magic_packet으로 보고, TCP의 경우 TCP 헤더 길이만큼 추가
                오프셋을 계산하여 payload를 찾습니다. ICMP는 타입/코드 등
                8바이트 이후를 payload로 간주합니다. 이렇게 특정 포맷으로 꾸며진
                매직 패킷의 본문을 mp 구조체로 참조하면, 그 안에는
                패스워드(pass), 포트(port), 기타 명령/데이터 필드가
                들어있습니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
              <h6 className="font-semibold text-purple-700 mb-2">
                매직 패킷 인증 및 백도어 동작 분기
              </h6>
              <p className="text-xs text-slate-700 leading-relaxed">
                수신한 magic_packet 구조체를 해석한 BPFDoor는 먼저 포함된
                패스워드 필드를 이용해 간단한 암호화 컨텍스트를 초기화합니다.
                코드에서 rc4_init(mp-&gt;pass, strlen(mp-&gt;pass), &crypt_ctx)
                호출을 두 번 수행하는데, 이는 RC4 알고리즘의 암복호화 키
                스트림을 준비하는 과정입니다. 이어서 logon(mp-&gt;pass) 함수를
                호출하여 입력된 패스워드의 유효성을 검사합니다.
              </p>
              <p className="text-xs text-slate-700 leading-relaxed mt-2">
                이 함수는 미리 정의된 올바른 패스워드와 비교하거나, 패스워드를
                해시/변환하여 특정 값과 대조하는 식으로 구현되었을 것입니다.
                인증 결과는 정수 값(cmp)으로 반환되며, 이에 따라 악성코드의 동작
                모드가 결정됩니다:
              </p>

              <div className="space-y-4 mt-3">
                <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
                  <h6 className="font-semibold text-blue-700 text-xs mb-2">
                    인증 성공 – 쉘 접속 대기 (Case 1)
                  </h6>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    cmp == 1인 경우, 공격자가 보낸 패킷이 포트 포워딩(bind
                    shell) 모드 명령임을 나타냅니다. BPFDoor는 현재 패킷의
                    출발지 IP를 추출하여 sip 변수에 저장하고(sip =
                    inet_ntoa(ip-&gt;ip_src)), 매직 패킷이나 TCP 헤더에서 추출한
                    포트 번호(dport)를 사용하여 getshell(sip, port) 함수를
                    호출합니다.
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed mt-2">
                    getshell 함수는 시스템 내 사용 가능한 임의의 높은 번호
                    포트를 하나 선택해 리스닝 소켓을 열고(bind), 선택된 포트
                    번호로 iptables 방화벽 규칙을 일시 개방하여 외부의 접근을
                    허용합니다. 이 임시 포트는 코드에 정의된 범위(예:
                    42391–43390) 내에서 찾으며, 이미 사용 중인 포트는 건너뛰고
                    첫 사용 가능 포트를 확보합니다.
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed mt-2">
                    포트 바인딩에 성공하면 listen()을 호출하고 별도의
                    프로세스(또는 스레드)로 accept()를 대기합니다. 공격자는
                    사전에 약속된 방식대로 대상 서버의 해당 포트에 연결을
                    시도하며, BPFDoor는 연결이 들어오면 바로 /bin/sh 쉘
                    프로세스를 fork/exec하여 그 표준
                    입출력(STDIN/STDOUT/STDERR)을 소켓으로 리다이렉트합니다.
                    이를 통해 공격자는 대상 서버에 직접 접속하여 쉘 명령을
                    실행할 수 있게 됩니다.
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed mt-2">
                    연결을 마친 직후 BPFDoor는 추가 흔적을 남기지 않도록
                    iptables에 삽입했던 규칙을 삭제하고 리스닝 소켓도 닫습니다.
                    한편 백도어 본체 프로세스는 exit(0)하여 이 세션 자식
                    프로세스를 종료시키는데, 이는 메인 BPFDoor 데몬이 이미 다른
                    프로세스로 유지되고 있으므로 백도어 자체는 계속
                    남아있습니다.
                  </p>
                </div>

                <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
                  <h6 className="font-semibold text-blue-700 text-xs mb-2">
                    인증 성공 – 역쉘 연결 (Case 0)
                  </h6>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    cmp == 0인 경우는 리버스 쉘(reverse shell) 모드로
                    동작합니다. 이때 BPFDoor는 사전에 구성된 C2 서버 IP(bip)와,
                    매직 패킷에 들어있던 포트(mp-&gt;port) 정보를 사용해
                    try_link(bip, mp-&gt;port) 함수를 호출합니다.
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed mt-2">
                    이 함수는 socket(AF_INET, SOCK_STREAM)을 생성하여 C2
                    서버(bip)의 해당 포트로 출발지에서 연결을 시도합니다. 예컨대
                    공격자가 자신의 C2 서버에서 대기 중일 때, BPFDoor가 그쪽으로
                    접속하여 터널을 역으로 거는 방식입니다. 연결 시도가 성공하면
                    반환받은 소켓 디스크립터(scli)를 shell(scli, NULL, NULL)에
                    넘겨 쉘 프로세스와 연결시킵니다.
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed mt-2">
                    shell() 함수는 내부에서 fork() 후 자식 프로세스에서
                    /bin/sh를 실행하되, 표준 입출력을 주어진 소켓(scli)에 붙이는
                    역할을 합니다. 결과적으로 대상 서버가 공격자 쪽으로 outgoing
                    연결을 맺고 그 통로 위에서 쉘을 실행하므로, 방화벽
                    아웃바운드 규칙만 통과하면 제약 없이 원격 제어가 가능합니다.
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed mt-2">
                    이 방식은 bind shell과 달리 공격자가 직접 접속하지 않고도
                    피해 서버가 알아서 연결해주므로, NAT 환경이나 엄격한
                    인바운드 방화벽 환경에서도 유효합니다. 새로운 변종에서는 이
                    역방향 연결 방식이 기본으로 사용되고, 기존에 있던 iptables
                    조작 및 바인드쉘 기능은 제거되었습니다.
                  </p>
                </div>

                <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
                  <h6 className="font-semibold text-blue-700 text-xs mb-2">
                    인증 실패 또는 모니터 모드 (Case 2)
                  </h6>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    cmp == 2인 경우, 올바른 패스워드/명령이 아닌 패킷이
                    도달했음을 의미합니다. 이때 BPFDoor는 함부로 움직이지 않고
                    mon(bip, mp-&gt;port) 함수를 호출합니다. 이 함수의 정확한
                    동작은 소스코드가 일부 생략되어 있으나, 추가 동작 없이
                    조용히 패킷을 무시하거나 간단한 응답만 돌려주는 기능으로
                    추정됩니다.
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed mt-2">
                    실제 분석에서는 이를 &quot;모니터링 모드&quot;로 칭하며,
                    공격자의 탐색 시도에 대해 ACK 패킷 반환 등으로 응답해주고
                    쉘을 제공하지 않는다고 보고되었습니다. 예를 들어 공격자가
                    잘못된 패스워드로 매직 패킷을 보냈다면, BPFDoor는 공격자에게
                    별도의 에러 메시지 없이 간단한 패킷 응답만 보내고 자체는
                    아무 동작도 하지 않습니다.
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed mt-2">
                    이를 통해 무작위 트래픽이나 탐색 시도에 스스로 노출되지
                    않고, 오직 올바른 지휘를 받은 경우에만 움직이는 형태의
                    은닉성을 유지합니다.
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed mt-3">
                요약하면, BPFDoor는 매직 패킷을 통한 1차 인증/지시를 받은 뒤에야
                실제 백도어 기능을 수행합니다. 인증이 통과되면 공격자의 의도에
                따라 두 가지 방식(포트개방 쉘 또는 역접속 쉘)으로 시스템 쉘을
                원격에 제공합니다.
              </p>
              <p className="text-xs text-slate-700 leading-relaxed mt-2">
                이 모든 과정에서 통신 내용(쉘 세션의 입출력 데이터)은 RC4 스트림
                암호화가 적용될 수 있는데, 유출된 2022년 버전 코드는 RC4
                알고리즘을 사용했고, 2023년 발견된 변종은 Libtomcrypt 기반의
                강력한 암호화를 사용하여 통신을 암호화하였습니다. 따라서
                공격자가 송수신하는 실제 명령어와 출력은 평문으로는 네트워크에
                흘러가지 않으며, 설령 패킷이 캡처되더라도 평문 해독이 어려운
                형태로 전송됩니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
              <h6 className="font-semibold text-purple-700 mb-2">
                5. 백도어 세션 종료 및 루프 지속
              </h6>
              <p className="text-xs text-slate-700 leading-relaxed">
                공격자가 쉘 세션을 종료하면 해당 세션을 담당한 BPFDoor 자식
                프로세스(쉘 프로세스 포함)가 종료됩니다. 메인 BPFDoor 데몬은
                여전히 packet_loop()에서 다음 매직 패킷을 기다리며 동작을
                지속합니다. 만일 공격자가 다시 새로운 매직 패킷을 보내오면,
                동일한 흐름으로 인증을 거쳐 새로운 쉘 세션을 생성합니다.
              </p>
              <p className="text-xs text-slate-700 leading-relaxed mt-2">
                이렇듯 BPFDoor는 반영구적으로 시스템에 상주하며, 관리자에 의해
                수동으로 종료되거나 시스템 재부팅으로 프로세스가 휘발되지 않는
                한 계속해서 공격자의 명령을 수용할 준비가 된 상태로 존재합니다.
                BPFDoor 자체에는 영구 부팅 시 자동실행 기능이 없으므로, 시스템이
                재부팅되면 다시 심어주기 전까지는 동작하지 않습니다. 그러나
                공격자는 cron, rc.local, init 스크립트 등에 심는 방식으로
                지속성을 추가했을 가능성이 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* BPF 악용 기법 상세 분석 */}
        <div className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm mt-6">
          <h6 className="font-semibold text-purple-700 mb-2">
            6. BPF 악용 기법 상세 분석
          </h6>
          <p className="text-xs text-slate-700 leading-relaxed">
            BPFDoor가 보안 장비들을 피해 갈 수 있었던 핵심 비결은 바로 리눅스
            커널의 BPF(Berkeley Packet Filter) 기능을 악용한 것입니다. BPF는
            원래 리눅스/유닉스 환경에서 패킷 필터링을 위해 설계된 경량
            가상머신으로, 커널 레벨에서 패킷을 가공/선별할 수 있는 강력한
            메커니즘입니다. 보통 네트워크 모니터링 툴(e.g., tcpdump,
            Wireshark)이나 시스템 콜 필터링(seccomp) 등에 활용되며, 루트
            권한으로 setsockopt() 등을 통해 필터를 장착하면 특정 트래픽만
            유저랜드로 올리고 나머지는 버리는 동작이 가능합니다.
          </p>

          <p className="text-xs text-slate-700 leading-relaxed mt-2">
            BPFDoor는 바로 이 점을 악용하여, 자신만의 패킷 필터를 설치함으로써
            일반적인 백도어와 완전히 다른 통신 방식을 구현했습니다. BPFDoor
            소스코드에 하드코딩된 BPF 필터는 앞서 살펴본 것처럼 여러 단계의 조건
            비교를 수행합니다. 주요 조건들을 다시 요약하면 다음과 같습니다:
          </p>

          <div className="pl-4 mt-3">
            <p className="text-xs font-medium text-blue-800">
              1. IPv4 프로토콜 필터
            </p>
            <p className="text-xs text-slate-700 leading-relaxed ml-2 mb-2">
              이더넷 헤더의 EtherType이 0x0800(IPv4)인지 확인. IPv6, ARP 등 기타
              프로토콜이면 백도어는 무시합니다. (일부 변종은 IPv6를 지원하기도
              하지만, 일반적으로 IPv4에 집중함)
            </p>

            <p className="text-xs font-medium text-blue-800">
              2. L4 프로토콜 필터
            </p>
            <p className="text-xs text-slate-700 leading-relaxed ml-2 mb-2">
              IP 헤더의 프로토콜 번호를 체크하여 TCP(6), UDP(17), ICMP(1) 중
              하나에 해당하는지 확인합니다. 초기 코드에서는 UDP=17에 대해 우선
              비교하고, 아니면 별도로 TCP=6 또는 ICMP=1인 경우로 분기하는
              식입니다. 이러한 멀티프로토콜 지원 덕분에 공격자는 임의의 전송
              계층 프로토콜을 이용해 백도어와 통신할 수 있습니다. 예컨대
              방화벽에서 TCP가 막혀 있으면 UDP로 트리거를 보낼 수 있고, 둘 다
              차단돼 있어도 ICMP(ping 패킷 등)을 통해 우회 통신이 가능합니다.
            </p>

            <p className="text-xs font-medium text-blue-800">
              3. 패킷 식별자 및 패킷 크기 조건
            </p>
            <p className="text-xs text-slate-700 leading-relaxed ml-2 mb-2">
              BPFDoor는 IP 헤더의 Identification 필드나 Fragmentation Offset
              등을 악용해 매직 플래그를 심습니다. 예를 들어 0x1fff 값 체크는 IP
              프레그먼트 오프셋의 특정 비트를 활용한 것으로 보입니다. 일반적으로
              0x1fff는 &quot;Don&apos;t Fragment(DF) 비트가 0이고 Offset이 최대값&quot;이라는
              의미인데, 이를 조건으로 사용한 것은 해당 필드에 의도적으로 0x1fff
              값을 넣은 패킷만 받겠다는 뜻입니다. 이는 정상 트래픽에서는 거의
              나타나지 않는 비정상적인 조합으로, 공격자는 자신의 패킷에 이 값을
              세팅하여 필터를 통과시킬 수 있습니다.
            </p>
            <p className="text-xs text-slate-700 leading-relaxed ml-2 mb-2">
              또한 UDP의 Length 또는 TCP의 특정 Flag 조합 등도 필터링에
              사용되었다고 추정됩니다. S2W에 따르면 BPFDoor 변종들에서 0x5293,
              0x39393939 등 매직 넘버가 발견되었는데, 이는 필터 명령어 내에 위
              숫자들과 일치 비교(JEQ)하는 코드가 있다는 의미입니다. 결국
              공격자는 사전에 이 매직 값을 알고 패킷을 조작해야 하며, 그렇지
              않은 스캔/공격은 백도어에 도달하지 못합니다.
            </p>

            <p className="text-xs font-medium text-blue-800">
              4. 비밀 키 및 명령 필터
            </p>
            <p className="text-xs text-slate-700 leading-relaxed ml-2 mb-2">
              최종적으로 패킷의 페이로드 부분에 비밀 키 문자열이 존재하는지
              확인합니다. 유출된 코드에서는 이 부분이 누락되었으나, Deep
              Instinct 보고서에 따르면 과거 변종은 하드코딩된 커맨드 문자열을
              필터 단계에서 일부 판별했다고 합니다. (예: 특정 패턴의 명령어만
              수용) 하지만 최근 변종은 모든 명령을 암호화하여 전송하므로 필터
              단계에서는 주로
              <strong>암호화 키(패스워드)</strong>만 확인하는 것으로 보입니다.
            </p>
            <p className="text-xs text-slate-700 leading-relaxed ml-2 mb-2">
              즉 매직 패킷 자체에 평문 패스워드(혹은 쉽게 식별 가능한 토큰)는
              없고, 필터는 패킷 내부의 특정 바이트열이 정해진 Salt/Key로 XOR돼
              있는지 등을 검사할 수 있습니다. 이처럼 필터 조건을 복잡하게
              구성하여 우연한 탐지 확률을 극소화한 것이 BPFDoor의 특징입니다.
            </p>
          </div>

          <p className="text-xs text-slate-700 leading-relaxed mt-3">
            BPF 필터가 작동하면, 커널 네트워크 스택은 BPFDoor가 설치한 raw
            소켓에 대해서 일반 패킷은 전달하지 않기 때문에 BPFDoor 프로세스는
            사실상 네트워크 상 &quot;투명&quot;해집니다. 예를 들어 netstat, ss
            등의 명령어로 열려 있는 포트를 조회해도 BPFDoor는 어떠한 포트에도
            바인드되어 있지 않으므로 목록에 나타나지 않습니다. 동시에 공격자
            입장에서는 BPFDoor가 수신 중인 포트 번호나 프로토콜이 겉으로
            드러나지 않으므로, 마치 &quot;열리지 않은 문 뒤에 숨은 문&quot;과
            같은 효과가 생깁니다.
          </p>

          <p className="text-xs text-slate-700 leading-relaxed mt-2">
            일반적인 백도어는 C2서버와 주기적 통신하거나 특정 포트를 여는 반면,
            BPFDoor는 네트워크상 완전히 숨겨진 채 오직 cBPF(Classic BPF)를
            사용한다는 것입니다. 이는 합법적인 커널 기능을 남용하여 비정상
            트래픽만 골라내는 기법입니다. 이 아이디어는 과거 &quot;포트
            노킹(port knocking)&quot; 개념과 유사하지만, 단순히 포트 시퀀스를
            기다리는 것이 아니라 패킷 내용까지 검사하는 고도화된 형태입니다.
          </p>

          <p className="text-xs text-slate-700 leading-relaxed mt-2">
            과거 백도어 cd00r(2004) 등이 유사하게 패킷 스니핑으로 백도어를
            구현한 바 있는데, BPFDoor는 이를 현대 리눅스의 cBPF로 구현함으로써
            훨씬 효율적이고 은밀하게 만들었습니다. 특히 주목할 점은{" "}
            <strong>BPFDoor가 eBPF가 아닌 cBPF(Classic BPF)</strong>를
            사용한다는 것입니다. eBPF는 최근 커널에 도입된 확장된 BPF로 더욱
            복잡한 로직을 짤 수 있지만, BPFDoor는 호환성과 단순함을 위해 구식
            소켓 필터 인터페이스(SO_ATTACH_FILTER)를 사용했습니다.
          </p>

          <div className="bg-gray-100 p-3 rounded-md text-xs mt-3 font-mono text-gray-800 whitespace-pre overflow-x-auto">
            {`(ip and (tcp or udp or icmp)) 
and ip[6:2] == 0x5293 
and udp[8:4] == 0x39393939 
and ... 
(※ 이는 예시적인 표현으로, 실제 매직 값과 오프셋은 변종별로 상이할 수 있습니다.)`}
          </div>
          <div className="text-xs text-slate-500 text-center mt-1">
            BPFDoor의 cBPF 필터를 tcpdump 필터 표현식으로 간소화한 예시
          </div>

          <p className="text-xs text-slate-700 leading-relaxed mt-3">
            BPFDoor는 BPF 필터링을 통해 &quot;필요한 패킷만 듣고, 스스로는 아무
            소리도 내지 않는&quot; 도청자 역할을 합니다. 그 결과 네트워크 포트
            스캐닝이나 트래픽 이상 탐지에도 쉽게 걸리지 않으며, 커널 기능을
            남용했기에 방화벽 규칙도 우회할 수 있었습니다.
          </p>

          <p className="text-xs text-slate-700 leading-relaxed mt-2">
            일반적인 백도어는 C2서버와 주기적 통신하거나 특정 포트를 여는 반면,
            BPFDoor는 네트워크상 완전히 숨겨진 채 오직 cBPF(Classic BPF)를
            사용한다는 것입니다. 이는 합법적인 커널 기능을 악용하여 비정상
            트래픽만 골라내는 기법입니다. 이 아이디어는 과거 &quot;포트
            노킹(port knocking)&quot; 개념과 유사하지만, 단순히 포트 시퀀스를
            기다리는 것이 아니라 패킷 내용까지 검사하는 고도화된 형태입니다.
          </p>

          <p className="text-xs text-slate-700 leading-relaxed mt-2">
            요약하면 BPFDoor는 &quot;열리지 않은 문 뒤에 숨은 문&quot;과 같은
            효과가 생깁니다.
          </p>
        </div>
      </div>
    </div>
  );
} 