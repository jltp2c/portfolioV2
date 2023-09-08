"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Presentation from "../components/Presentation/Presentation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/myportfolio");
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [router]);
  return (
    <div className="text-orange">
      <Presentation />
    </div>
  );
}
