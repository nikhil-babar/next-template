"use client";

import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

export default function Home() {
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.replace("/projects");
  };

  return (
    <main className="">
      <Button onClick={handleClick}>Projects</Button>
    </main>
  );
}
