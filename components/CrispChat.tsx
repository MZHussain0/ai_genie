"use client";
import { FC, useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

interface CrispChatProps {}

const CrispChat: FC<CrispChatProps> = ({}) => {
  useEffect(() => {
    Crisp.configure("d96f868e-e5d6-45ee-8a38-af5f322437cf");
  }, []);

  return null;
};

export default CrispChat;
