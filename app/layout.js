import Header from "@/components/header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Theme from "./theme";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Educator</title>
      </head>
      <body className={inter.className}>
        <Theme>
          <Header />
          {children}
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
