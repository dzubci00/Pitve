import Layout from "../components/layout";
import Head from "next/head";

import Hero from "../components/hero/hero";
import About from "../components/About/about";
import Footer from "../components/Footer/Footer";
import Objekti from "../components/ObjektiKartice/Objekti";
import Amenities from "../components/Amenities/Amenities";
import PopularDestinations from "../components/PopularDestinations/PopularDestinations";
import PopulareBeaches from "../components/PopularBeaches/PopularBeaches";
import PhotoSlider from "../components/PhotoSlider/photoSlider";
import Planina from "../components/Planina";
import OurHome from "../components/OurHome";
import VideoAerial from "../components/VideoAerial";
import Map from "../components/Map";
import Contact from "../components/Contact";


function Index() {

  return (
    <Layout>
      <Head/>
      <Hero />
      <About />
      <PhotoSlider />
      <Objekti />
      <Amenities />
      <Planina />
      <OurHome />
      <VideoAerial /> 
      <PopularDestinations />
      <PopulareBeaches />
      <Map />
      <Contact /> 
      <Footer />   
    </Layout>
  );
}

export default Index;
