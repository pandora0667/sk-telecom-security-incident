"use client";

import React from 'react';
import ImageViewer from '@/components/ui/image-viewer';

const BPFDoorDiagram: React.FC = () => {
  return (
    <ImageViewer 
      src="/images/analysis/bpfdoor-architecture-diagram.png"
      alt="BPFDoor 악성코드 아키텍처 다이어그램"
      caption="BPFDoor 악성코드의 아키텍처 및 작동 메커니즘 다이어그램"
    />
  );
};

export default BPFDoorDiagram; 