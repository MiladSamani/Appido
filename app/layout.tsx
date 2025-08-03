import "../style/globals.css";
import { yekanRegular, yekanBold } from "./fonts";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="fa" dir="rtl" className={`${yekanRegular.variable} ${yekanBold.variable}`}>
      <body>{children}</body>
    </html>
  );
}
