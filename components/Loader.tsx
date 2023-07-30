import Image from "next/image";
import { FC } from "react";

interface LoaderProps {}

const Loader: FC<LoaderProps> = ({}) => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="loader" src={"/logo.png"} fill />
      </div>
      <p className="text-sm text-muted-foreground">Genie is thinking...</p>
    </div>
  );
};

export default Loader;
