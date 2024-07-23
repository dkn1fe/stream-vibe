import { Header } from "@/components/Header/Header";
import { ProfileCard } from "@/components/ProfilePage/profileCard/ProfileCard";
import { ProfileInfo } from "@/components/ProfilePage/profileInfo/ProfileInfo";

export const ProfilePage = () => {
  return (
    <div className="bg-[#110e1a] min-h-screen">
    <div className="container">
      <header>
        <Header />
      </header>
      <div className="h-[0.2px] bg-white opacity-40 ml-9 mt-3"/>
      <main className="pt-16 pl-10">
        <ProfileInfo />
      </main>
      <section className="py-10 pl-10">
        <ProfileCard />
      </section>
    </div>
    </div>
  );
};
