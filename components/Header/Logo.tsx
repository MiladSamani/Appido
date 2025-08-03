import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="font-bold text-xl ">appido</span>
      <Image
        src="/images/logo.svg"
        alt="لوگوی سایت"
        width={40}
        height={40}
        priority
      />
    </Link>
  );
}
