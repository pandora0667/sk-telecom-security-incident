# 빌드 단계
FROM node:22-alpine AS build

# 작업 디렉토리 설정
WORKDIR /app

# 패키지 매니저로 pnpm 설치
RUN npm install -g pnpm

# 의존성 파일 복사
COPY package.json pnpm-lock.yaml ./

# 의존성 설치
RUN pnpm install --frozen-lockfile

# 소스 코드 복사
COPY . .

# 애플리케이션 빌드
RUN pnpm build

# 실행 단계
FROM node:22-alpine AS runner

WORKDIR /app

# 패키지 매니저로 pnpm 설치
RUN npm install -g pnpm

# 필요한 런타임 의존성만 설치
COPY --from=build /app/package.json /app/pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

# Next.js 빌드 결과물 복사
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.js ./

# 환경 변수 설정
ENV NODE_ENV=production
ENV PORT=3000

# 포트 노출
EXPOSE 3000

# 애플리케이션 실행
CMD ["pnpm", "start"] 