import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import HeroCarousel from "../components/HeroCarousel";
import DisplayCard from "../components/DisplayCard";
import CardContainer from "../components/CardContainer";

export default function Home() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <HeroCarousel />
      </div>
      <div className="flex items-center justify-center p-6">
        <div className="md:w-[80%]">
          <DisplayCard />
        </div>
      </div>
      <CardContainer postDate={"Recent Posts"} />
      <CardContainer postDate={"More Articles"} />
      {/* <Footer /> */}
    </div>
  );
}
