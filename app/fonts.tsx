import localFont from "next/font/local";

export const yekanRegular = localFont({
  src: "../public/fonts/Yekan-Bakh-FaNum-04-Regular.ttf",
  display: "swap",
  variable: "--font-farsi-regular",
});

export const yekanBold = localFont({
  src: "../public/fonts/Yekan-Bakh-FaNum-06-Bold.ttf",
  display: "swap",
  variable: "--font-farsi-bold",
});
