import { Header } from "@/components/Header/Header";
import { SettingsInfo } from "@/components/ProfilePage/profileSettings/SettingsInfo";
import { SettingsLink } from "@/components/ProfilePage/profileSettings/SettingsLink";

export const ProfileSettings = () => {
  return (
    <div className="bg-[#110e1a] min-h-screen">
      <div className="container">
        <header>
          <Header />
        </header>
        <div className="h-[0.2px] bg-white opacity-40 ml-9 mt-3" />
        <main className="pt-10 pl-10">
          <SettingsLink />
        </main>
        <section className="pt-10 pl-10">
          <SettingsInfo />
        </section>
      </div>
    </div>
  );
};
