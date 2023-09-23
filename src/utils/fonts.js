import { Ubuntu, Playfair_Display } from "next/font/google";

export const ubuntu = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400"],
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});
