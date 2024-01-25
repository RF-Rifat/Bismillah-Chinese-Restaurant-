import { Inter } from "next/font/google";
import "./globals.css";
import { MainNavbar } from "@/components/navbar";

const latin = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "বিসমিল্লাহ্‌ চাইনীজ",
  description:
    "গাইবান্ধায় গেষ্টদের প্রতিটি অনুষ্ঠানের জন্য তাজা ও গরম খাবার দ্রুত সুবিধাজনক কম খরচে পৌঁছাতে চেষ্টা করি।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/image/logo.png" type="image/png" />
      <body className={`max-w-screen-2xl mx-auto ${latin.className}`}>
        <MainNavbar />
        {children}
      </body>
    </html>
  );
}
