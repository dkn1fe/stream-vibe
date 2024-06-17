import { Header } from "@/components/Header/Header";
import { MainInfo } from "@/components/mainBlock/mainInfo";
import { Footer } from "@/components/Footer/Footer";
import mainlogo from "@/layouts/mainblock/mainImg.png";


export const HomePage = () => {
  return (
    <>
      <div
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat  bg-black"
        style={{ backgroundImage: `url(${mainlogo})` }}
      >
        <header>
          <Header />
        </header>
      </div>
      <section className="relative mx-auto z-10">
        <MainInfo />
      </section>

      <footer>
        <Footer />
      </footer>
    </>
  );
};
