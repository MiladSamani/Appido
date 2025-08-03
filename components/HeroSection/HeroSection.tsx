import TypingEffect from "../typing-effects/TypingEffects";
import Image from "next/image";
import instagram from "../../public/social/instagram.png";
import telegram from "../../public/social/telegram.png";
import whatsapp from "../../public/social/whatsapp.png";
import message from "../../public/social/message.png";
import heroSectionImg from "../../public/heroSection.png";

function HeroSection() {
  const chatboxText = [
    "برای شروع تجربه جدید،",
    "کافیه روی دکمه Register کلیک بفرمایید",
    "و هوش مصنوعی مختص بیزینس خودتون رو",
    "در عرض چند دقیقه براتون بسازیم.",
    "تجربه ای جسورانه و خاص!",
  ].join(" ");

  return (
    <section className="bg-white relative pt-[0px] mb-[0px] md:pt-[60px] md:mb-[20px]">
      {/* بک‌گراند SVG پایین */}
      {/* برای md به پایین */}
      <div className="absolute bottom-0 left-0 w-full h-[214px] z-0 block md:hidden">
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 174"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,100 L0,50 L1440,20 L1440,85 Z"
            fill="#011E31"
            stroke="#000"
            strokeWidth="0"
          />
        </svg>
      </div>

      {/* برای بالای md */}
      <div className="absolute bottom-0 left-0 w-full h-[214px] z-0 hidden md:block">
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 174"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,174 L0,60 L1440,20 L1440,174 Z"
            fill="#011E31"
            stroke="#000"
            strokeWidth="0"
          />
        </svg>
      </div>

      {/* محتوای اصلی */}
      <div className="max-w-full mx-auto flex flex-col lg:flex-row-reverse justify-between gap-8 relative z-10 px-[76px] text-center lg:text-right">
        {/* Heading */}
        <div className=" md:w-[313px] lg:w-[457px] xl:w-[579px] flex flex-col justify-start items-center pt-4 md:leading-[15px] lg:leading-[50px] order-1 lg:order-none">
          <h1 className="md:text-[18px] lg:text-[30px] xl:text-[40px] font-bold mb-2 font-farsi md:leading-[15px] lg:leading-[50px]">
            <span className="text-[#20B4EA]">دستیار هوشمند </span>
            <span className="text-[#818C99]">فروش </span>
            <span className="text-[#20B4EA]">و</span>{" "}
            <span className="text-[#818C99]">پشتیبانی</span>
          </h1>

          <h2 className="md:text-[20px] lg:text-[34px] xl:text-[46px] font-bold mb-4 font-farsi md:leading-[15px] lg:leading-[70px]">
            <span className="text-[#818C99]">برای</span>{" "}
            <span className="text-[#20B4EA]">مدیران آینده‌نگر</span>{" "}
            <span className="text-[#818C99]">و</span>{" "}
            <span className="text-[#20B4EA]">عمل‌گرا</span>
          </h2>

          <p className="w-full font-farsi text-[#818C99] md:text-[15px] lg:text-[26px] xl:text-[35px] font-semibold leading-[180%] opacity-80">
            بدون نیاز به تیم‌های پشتیبانی و فروش
          </p>
        </div>

        {/* تصویر */}
        <div className="flex-1 relative flex justify-center items-center mt-8 lg:mt-0 order-2 lg:order-none">
          <Image
            src={heroSectionImg}
            alt="hero"
            width={500}
            height={500}
            className="z-10 object-cover
              w-[250px] h-[250px]
               md:w-[280px] md:h-[280px] 
               lg:w-[500px] lg:h-[500px]"
            priority
          />

          {/* باکس چت */}
          <div
            className="absolute -bottom-[45px] md:-bottom-[85px] lg:-bottom-[69px]
             w-[300px] h-auto
              lg:w-[469px]
              xl:w-[580px]
              border border-[#fff] bg-[#f6f6f6]/80
              rounded-xl shadow-xl shadow-[0_14px_31px_0_rgba(0,0,0,0.07)]
              backdrop-blur-[4px] flex items-start p-4 z-20"
          >
            <div className="flex items-center gap-4 w-full">
              <Image
                src="/images/ChatPerson.png"
                alt="avatar"
                width={48}
                height={48}
                className="rounded-full w-10 h-10 md:w-12 md:h-12"
              />
              <div className="flex-1 text-xs sm:text-sm md:text-base break-words">
                <TypingEffect text={chatboxText} speed={120} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* آیکون‌ها */}
      <div className="mt-8 flex justify-center gap-10 lg:absolute bottom-0 lg:left-65 xl:left-100 lg:-translate-x-1/2 h-[120px] py-[20px] z-20">
        <Image
          src={message}
          alt="chat"
          className="w-[37px] h-[37px] xl:w-[56px] xl:h-[56px]"
        />
        <Image
          src={whatsapp}
          alt="whatsapp"
          className="w-[37px] h-[37px] xl:w-[56px] xl:h-[56px]"
        />
        <Image
          src={telegram}
          alt="telegram"
          className="w-[37px] h-[37px] xl:w-[56px] xl:h-[56px]"
        />
        <Image
          src={instagram}
          alt="instagram"
          className="w-[37px] h-[37px] xl:w-[56px] xl:h-[56px]"
        />
      </div>
    </section>
  );
}

export default HeroSection;
