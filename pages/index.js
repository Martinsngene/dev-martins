import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import HeroCarousel from "../components/HeroCarousel";
import DisplayCard from "../components/DisplayCard";
import CardContainer from "../components/CardContainer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HeroCarousel />
      <DisplayCard />
      <CardContainer postDate={"Recent Posts"} />
      <CardContainer postDate={"More Articles"} />
      <Footer />
    </div>
  );
}
