import type { Metadata } from "next";
import { Geist, Geist_Mono, Courgette, Poppins } from "next/font/google";
import "./globals.css";

import NavigationMenuDemo from "@/components/custom/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";  // Import Toast styles

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const courgette = Courgette({
  variable: "--font-courgette-regular",
  weight: '400', 
  subsets: ['latin'],
});

const poppins = Poppins({
  variable: "--font-poppins-regular",
  weight: '400', 
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Holistic Learning Center",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${courgette.variable} ${poppins.variable} antialiased`}
      >
        <NavigationMenuDemo />

        <ToastContainer
          position="top-right"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        {children}
      </body>
    </html>
  );
}
