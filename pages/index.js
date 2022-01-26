import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Test from "../components/Test";
import HeroCarousel from "../components/HeroCarousel";
import DisplayCard from "../components/DisplayCard";
// import styles from "../styles/Home.module.css";
// import dynamic from "next/dynamic";

// const DynamicComponentWithNoSSR = dynamic(() => import("../components/Test"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroCarousel/>
      <div className="flex items-center justify-center p-6">
        <div className="w-[75%]">
          <DisplayCard/>
        </div>
      </div>
      <Test />
      {/* <DynamicComponentWithNoSSR /> */}
      <Footer />
    </div>
  );
}
