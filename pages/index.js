import Link from "next/link";
import Hero from "../components/hero/hero";
import Layout from "../components/layout";
import { useRouter } from "next/router";

import About from "../components/About/about";
import Sights from "../components/Sights/Sights";
import Footer from "../components/Footer/Footer";
import Head from "next/head";

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
  const { locale, locales, asPath } = useRouter();
  return (
    <Layout>
      <Head>
        {/* <title>Meet Summer Breeze</title>
        <meta property="og:title" content="Meet Summer Breeze" key="title" />
        <link
          rel="canonical"
          href="https://www.44adriatic.com"
          key="canonical"
        />

        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:url" content="https://www.44adriatic.com" />

        <meta property="og:image" content="/ogimage.png" />
        <meta
          name="description"
          content="An incredible Catamaran dedicated for charters. Built in 2018, the
          fully equipped Lagoon 450 F will take you to the most beautiful
          anchorages on the Croatian coastline. Online Catamaran boat charter booking in Croatia."
          key="desc"
        />
        <meta
          property="og:description"
          content="An incredible Catamaran dedicated for charters. Built in 2018, the
          fully equipped Lagoon 450 F will take you to the most beautiful
          anchorages on the Croatian coastline. Online Catamaran boat charter booking in Croatia."
        />
        <meta
          property="twitter:description"
          content="An incredible Catamaran dedicated for charters. Built in 2018, the
          fully equipped Lagoon 450 F will take you to the most beautiful
          anchorages on the Croatian coastline. Online Catamaran boat charter booking in Croatia."
        /> */}
      </Head>

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
