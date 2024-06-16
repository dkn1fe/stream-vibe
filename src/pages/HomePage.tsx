import { Header } from "@/components/Header/Header";
import { MainInfo } from "@/components/mainBlock/mainInfo";
import { Footer } from "@/components/Footer/Footer";
import mainlogo from "@/layouts/mainblock/mainImg.png";
import { VariousDevice } from "@/components/variousDevice/VariousDevice";

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
      <section className="pt-5 bg-[#1F1F1F]">
        <VariousDevice/>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
