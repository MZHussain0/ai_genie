"use client";
import { FC, useEffect, useState } from "react";
import ProModal from "./ProModal";

interface ModalProviderProps {}

const ModalProvider: FC<ModalProviderProps> = ({}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <ProModal />
    </>
  );
};

export default ModalProvider;
