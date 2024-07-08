import localFont from "next/font/local"

const finalSix = localFont({
  src: [
    { path: "../fonts/finalsix-hairline.ttf", weight: "100", style: "normal" },
    { path: "../fonts/finalsix-thin.ttf", weight: "200", style: "normal" },
    { path: "../fonts/finalsix-light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/finalsix-book.ttf", weight: "400", style: "normal" },
    { path: "../fonts/finalsix-medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/finalsix-bold.ttf", weight: "600", style: "normal" },
    { path: "../fonts/finalsix-extrabold.ttf", weight: "700", style: "normal" },
    { path: "../fonts/finalsix-black.ttf", weight: "800", style: "normal" },
    { path: "../fonts/finalsix-heavy.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-final-six",
})

export { finalSix }
