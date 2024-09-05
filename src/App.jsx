import Home from "./Pages/Home";

import { Route, Routes } from "react-router-dom";

import Public from "./Routes/Public";

import NotFound from "./pages/NotFound";
import Blogdetails from "./Pages/Blogdetails";
import Category from "./Pages/Category";

function App() {
  return (
    <>
      <Routes>
        {/* Routes for the public pages */}

        <Route element={<Public />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog-details" element={<Blogdetails />} />

          <Route path="/category" element={<Category />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}

          {/*  
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route path="/set-new-password" element={<ResetPassword />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/ui" element={<UI />} /> */}
        </Route>
        {/* <Route element={<Private />}>
          <Route element={<MainDashboardLayout />}>
            <Route path="/dashboard" element={<AdminDashboard />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="/dashboard/home-admin" element={<Dashboard />} />
              <Route path="/dashboard/order-home" element={<Dashboard />} />
            </Route>
          
           
          </Route>
        </Route> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
