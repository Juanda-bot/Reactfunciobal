import { Routes, Route } from "react-router-dom";
import { NavBar } from "../Components/NavBar";
import { Home, 
    LoginPage, 
    RegisterPage, 
    DashboardPage } from "../pages";

export const AppRouter = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<NavBar />} >
          <Route index element={<Home />}/>
          <Route path="login" element={<LoginPage />}/>
          <Route path="register" element={<RegisterPage />}/>
          <Route path="dashboard" element={<DashboardPage />}/>
       </Route>    
    </Routes>
  </>
  ); 
};
