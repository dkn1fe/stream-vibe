import { Register } from "@/auth/register/Register";
import { Login } from "@/auth/login/Login";
import { HomePage } from "@/pages/HomePage";
import { MoviesOpenPage } from "@/pages/MoviesOpenPage";
import { MoviesShowPage } from "@/pages/MoviesShowPage";
import { SearchPage } from "@/pages/SearchPage";
import { ShowsOpenPage } from "@/pages/ShowsOpenPage";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store/store";
import { getProfile } from "./store/AuthSlice";
import { ProfilePage } from "@/pages/ProfilePage";
import { ProfileSettings } from "@/pages/ProfileSettings";
import { StaffPage } from "@/pages/StaffPage";
import { SupportPage } from "@/pages/SupportPage";
import { SubscriptionPage } from "@/pages/SubscripitonPage";

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(getProfile());
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies&show" element={<MoviesShowPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/movies/:moviesId" element={<MoviesOpenPage />} />
      <Route path="/shows/:showsId" element={<ShowsOpenPage />} />
      <Route path="/auth/registry" element={<Register />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile/settings" element={<ProfileSettings />} />
      <Route path="/staff/:staffId" element={<StaffPage />} />
      <Route path='/support' element={<SupportPage />} />
      <Route path="/subscriptions" element = {<SubscriptionPage/>}/>
    </Routes>
  );
}
