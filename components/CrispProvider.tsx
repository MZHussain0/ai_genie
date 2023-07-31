import { FC } from "react";
import CrispChat from "./CrispChat";

interface CrispProviderProps {}

const CrispProvider: FC<CrispProviderProps> = ({}) => {
  return <CrispChat />;
};

export default CrispProvider;
