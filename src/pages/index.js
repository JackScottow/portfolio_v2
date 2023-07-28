import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "../components/NavBar";
import Landing from "../components/Landing";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex ">
      <NavBar />
      <div className="grow ">
        <Landing />
        <About />
        <Work />
        <Contact />
      </div>
    </main>
  );
}
