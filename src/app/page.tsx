import Navbar1 from "@/components/navbar1";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar1 />
      <div className="hero">
        <video autoPlay loop muted className="back">
          <source src="./video/beach.mp4" type="video/mp4" />
        </video>
        <div className="content">
          <h1>HDR Wallpapers</h1>
          <Link href="./gallery/">Explore →</Link>
        </div>
      </div>
    </>
  );
}
