import { Header } from "@/components/Header/Header";
import { MainInfo } from "@/components/mainBlock/mainInfo";
import { Footer } from "@/components/Footer/Footer";
import { VariousDevice } from "@/components/variousDevice/VariousDevice";
import { Questions } from "@/components/questions/Questions";
import { GenreSection } from "@/components/GenreSection/GenreSection";
import { Plan } from "@/components/plan/Plan";
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
      <section className="py-20 bg-[#1F1F1F]">
        <GenreSection />
      </section>
      <section className="py-20 bg-[#1F1F1F]">
        <VariousDevice />
      </section>
      <section className="py-20 bg-[#1F1F1F]">
        <Questions />
      </section>
      <section className="py-20 bg-[#1F1F1F]">
        <Plan />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
