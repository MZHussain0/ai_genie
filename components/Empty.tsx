﻿import Image from "next/image";
import { FC } from "react";

interface EmptyProps {
  label: string;
}

const Empty: FC<EmptyProps> = ({ label }) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image alt="empty" src="/empty.png" layout="fill" />
      </div>

      <p className="text-sm text-center text-muted-foreground">{label}</p>
    </div>
  );
};

export default Empty;
