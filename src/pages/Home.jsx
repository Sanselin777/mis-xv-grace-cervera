import Footer from "@/components/Footer";
import Galeri from "@/components/Galeri";
import Hero from "@/components/Hero";
import GuestLayout from "@/components/Layouts/GuestLayout";
import Location from "@/components/Location";
import Mempelai from "@/components/Mempelai";
import Date from "@/components/Date";
import Words from "@/components/Words";

/**
 * Home page
 *
 * @returns React.ReactElement
 */
const Home = () => {
  return (
    <GuestLayout>
      <section id="hero">
        <Hero />
      </section>

      <section id="words">
        <Words />
      </section>

      <section id="date">
        <Date />
      </section>

      <section id="location">
        <Location />
      </section>

      <section id="bride">
        <Mempelai />
      </section>

      <section id="galery">
        <Galeri />
      </section>

      <footer id="footer">
        <Footer />
      </footer>
    </GuestLayout>
  );
};

export default Home;
