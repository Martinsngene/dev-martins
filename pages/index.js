import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Test from "../components/Test";
// import styles from "../styles/Home.module.css";
// import dynamic from "next/dynamic";

// const DynamicComponentWithNoSSR = dynamic(() => import("../components/Test"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <div>
      <NavBar />
      <Test />
      {/* <DynamicComponentWithNoSSR /> */}
      <Footer />
    </div>
  );
}
