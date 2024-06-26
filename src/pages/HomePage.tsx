import { Header } from "@/components/Header/Header";
import { MainInfo } from "@/components/HomePage/mainBlock/mainInfo";
import { Footer } from "@/components/Footer/Footer";
import { VariousDevice } from "@/components/HomePage/variousDevice/VariousDevice";
import { Questions } from "@/components/HomePage/questions/Questions";
import { GenreSection } from "@/components/HomePage/GenreSection/GenreSection";
import { Plan } from "@/components/HomePage/plan/Plan";
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
      <section className="py-20">
        <GenreSection />
      </section>
      <section className="py-20">
        <VariousDevice />
      </section>
      <section className="py-20">
        <Questions />
      </section>
      <section className="py-20">
        <Plan />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
