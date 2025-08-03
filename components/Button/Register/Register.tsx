import Image from "next/image";

function RegisterBtn() {
  return (
    <>
      <Image
        src="/images/RegisterIconBtn.svg"
        alt=""
        width={24}
        height={24}
        priority
      />
    </>
  );
}

export default RegisterBtn;
