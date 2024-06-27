"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { ThemeProvider } from "./components/theme-provider";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import SplashScreen from "./components/introanimation";
import Link from "next/link";
import { LinkedIn } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import { EmailRounded } from "@mui/icons-material";
import Footer from "./footer/page";

const inter = Inter({ subsets: ["latin"] });

const convex = new ConvexReactClient(
  process.env.NEXT_PUBLIC_CONVEX_URL as string,
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Aman Bhatti</title>
        <meta name="description" content="Description" />
      </head>
      <body className={inter.className}>
        <ClerkProvider publishableKey="pk_live_Y2xlcmsuYW1hbm5iaGF0dGkuY29tJA">
          <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
            <div className="side__StyledSideElement-sc-1wdt1ly-0 SLAQp">
              <div className="email__StyledLinkWrapper-sc-148iwo6-0 hMFHbo fade-enter-done">
                <a href="mailto:amanxbhatti@gmail.com">amanxbhatti@gmail.com</a>
              </div>
            </div>
            <div className="side__StyledSideElement-sc-1wdt1ly-0 knAFTJ">
              <ul className="social__StyledSocialList-sc-1aeyc4d-0 jKwTmL fade-enter-done">
                <li className="social-icons">
                  <a
                    id="mail"
                    className="navRight"
                    href="mailto:amanxbhatti@gmail.com"
                  >
                    <EmailRounded style={{ fontSize: 25 }}></EmailRounded>
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    className="navRight"
                    href="https://github.com/aman-bhatti"
                    id="gh"
                    target="_blank"
                  >
                    <GitHub style={{ fontSize: 25 }}></GitHub>
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/aman-ibhatti/"
                    className="navRight"
                    target="_blank"
                    id="in"
                  >
                    <LinkedIn style={{ fontSize: 25 }}></LinkedIn>
                  </a>
                </li>
              </ul>
            </div>
            <ThemeProvider attribute="class" defaultTheme="light">
              <div className="max-w-[1000px] mx-auto py-4 flex flex-col min-h-screen">
                <Navbar />
                {children}
              </div>
            </ThemeProvider>
          </ConvexProviderWithClerk>
        </ClerkProvider>
        <Footer />
      </body>
    </html>
  );
}
