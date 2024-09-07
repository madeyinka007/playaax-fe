import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Public from "./Routes/Public";
import NotFound from "./pages/NotFound";
import Blogdetails from "./Pages/Blogdetails";
import Category from "./Pages/Category";
import MainDashboardLayout from "./components/layout/MainDashboardLayout";
import Dashboard from "src/components/layout/Dashboard";
import Categories from "./Pages/Admin/Categories";
import Authors from "./Pages/Admin/Authors";
import Posts from "./Pages/Admin/Posts";
import CreatePost from "./Pages/Admin/CreatePost";

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

        <Route path="admin" element={<MainDashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="posts" element={<Posts />}></Route>

          <Route path="posts/create" element={<CreatePost />}></Route>
          <Route path="category" element={<Categories />}></Route>
          <Route path="author" element={<Authors />}></Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
