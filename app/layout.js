import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactIcons from "./utils/ContactIcons";
import DownloadBrochure from "./utils/DownloadBrochure";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Aquaagrofarmtech",
  description: "Developed by Aquaagrofarmtech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <ContactIcons/>
        <DownloadBrochure/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
