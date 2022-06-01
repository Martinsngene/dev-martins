import Layout from "../components/Layout";
import HeroCarousel from "../components/HeroCarousel";
import CardContainer from "../components/CardContainer";

export default function Home() {
  return (
    <Layout>
      <HeroCarousel />
      <CardContainer postDate={"Recent Posts"} />
    </Layout>
  );
}
