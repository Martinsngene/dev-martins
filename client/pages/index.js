import Layout from "../components/Layout";
import HeroCarousel from "../components/HeroCarousel";
import DisplayCard from "../components/DisplayCard";
import CardContainer from "../components/CardContainer";

export default function Home() {
  return (
    <Layout>
      <HeroCarousel />
      <DisplayCard />
      <CardContainer postDate={"Recent Posts"} />
    </Layout>
  );
}
