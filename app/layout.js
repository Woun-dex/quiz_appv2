import {Inter} from "next/font/google";
import "./globals.css";
import  Navbar  from "./components/Navbar";
import { ContextProvider  } from "./contextApi";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


const inter = Inter({ subsets: ['latin']})

export const metadata = {
  title: "Quiz App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className} `}
      >
      <ContextProvider >
       
      <nav className="sticky top-0 flex justify-between items-center m-2 bg-white dark:bg-black">
      <Navbar />
      <div className="flex justify-center  items-center gap-4">
        
      <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <p className="text-sm font-semibold">
            Welcome
          </p>
          <UserButton />
          
        </SignedIn>
        
      </div>
      </nav>
      
        {children}
      </ContextProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
