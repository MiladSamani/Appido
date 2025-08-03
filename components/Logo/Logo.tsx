import Image from "next/image";
import logo from "../../public/Logo.png";

const Logo = () => {
  return (
    <div className="flex-1 flex items-center justify-end w-[100%]">
      <Image
        src={logo}
        alt="لوگو"
        width={400}
        height={40}
        className="object-contain"
        priority
      />
    </div>
  );
};

export default Logo;
