import { Inter, Public_Sans, Space_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });
const publicSans = Public_Sans({ subsets: ["latin"], weight: ["400", "500", "600"] });

export { inter, spaceMono, publicSans };
