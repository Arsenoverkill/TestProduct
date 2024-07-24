"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import scss from "./Header.module.scss";

const Header: FC = () => {
  const router = useRouter();
  return (
    <div className={scss.Home}>
      <Image
        onClick={() => router.push("/")}
        width={200}
        height={100}
        src="https://logomaster.ai/hubfs/gallery002.png"
        alt="logo"
      />
      <nav>
        <Link href="/favorite">Favorite</Link>
        <Link href="/auth/sign-in">Login</Link>
        <Link href="/basket">basket</Link>
        <Link href="/admin">Admin</Link>
      </nav>
    </div>
  );
};

export default Header;
