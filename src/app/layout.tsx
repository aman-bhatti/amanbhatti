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
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
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
  const [showIntro, setShowIntro] = useState(true);
  const router = useRouter();

  const handleIntroFinish = () => {
    setShowIntro(false);
    router.push("/"); // Replace with your main page route
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleIntroFinish();
    }); // 1 second for the animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Aman Bhatti</title>
        <meta name="description" content="Description" />
      </head>
      <body className={inter.className}>
        <ClerkProvider publishableKey="pk_test_c2FjcmVkLXNreWxhcmstMjMuY2xlcmsuYWNjb3VudHMuZGV2JA">
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
                    <EmailRoundedIcon
                      style={{ fontSize: 25 }}
                    ></EmailRoundedIcon>
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    className="navRight"
                    href="https://github.com/aman-bhatti"
                    id="gh"
                    target="_blank"
                  >
                    <GitHubIcon style={{ fontSize: 25 }}></GitHubIcon>
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/aman-ibhatti/"
                    className="navRight"
                    target="_blank"
                    id="in"
                  >
                    <LinkedInIcon style={{ fontSize: 25 }}></LinkedInIcon>
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
        <Footer/>
      </body>
    </html>
  );
}
