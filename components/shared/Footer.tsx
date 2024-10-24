import Link from "next/link";
import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-bertween flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="Logo"
            width={128}
            height={38}
          />
        </Link>

        <p>2023 Evently. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
