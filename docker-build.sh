#!/bin/bash

# macOS의 메타데이터 파일 무시하고 Docker 빌드 스크립트

# 메타데이터 파일 제거
echo "메타데이터 파일 정리 중..."
find . -type f -name "._*" -delete
find . -type f -name ".DS_Store" -delete

# Docker 이미지 빌드
echo "Docker 이미지 빌드 중..."
DOCKER_BUILDKIT=1 docker build --no-cache --progress=plain -t skt-security-analysis .

echo "완료!" 