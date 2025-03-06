import { Poppins, Roboto_Mono } from "next/font/google";

// Poppins for all general text
export const fontSans = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Supports varied thickness
  display: "swap",
});

// Roboto Mono for specific blocks
export const fontMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700"], // Adjust based on needs
  display: "swap",
});
