import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import History from "@/components/History";
import Gallery from "@/components/Gallery";
import Menu from "@/components/Menu";
import Reservations from "@/components/Reservations";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main className="flex-1 w-full bg-bg-primary">
        <Hero />
        <History />
        <Gallery />
        <Menu />
        <Reservations />
      </main>
      <Footer />
    </>
  );
}
