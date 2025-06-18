import { cn } from "@/lib/utils";
import { Container } from "./container";
import React from "react";
import Image from "next/image";
import { Button } from "../ui";
import { User } from "lucide-react";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex flex-col items-center justify-between gap-6 py-8 sm:flex-row">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="logo" width={35} height={35}></Image>
          <div>
            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
            <p className="text-sm text-gray-400 leading-3 hidden md:block">
              It couldn&apos;t be tastier
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Login
          </Button>
        </div>
      </Container>
    </header>
  );
};
