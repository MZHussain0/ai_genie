import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className=" text-3xl">
      <p>Dashboard Page</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
