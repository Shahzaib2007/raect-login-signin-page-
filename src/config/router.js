import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddQuiz from "../screens/addquiz";
import DashboardScreen from "../screens/dashboard";
import DisplayQuiz from "../screens/displayquiz";
import Login from "../screens/login";
import Signup from "../screens/signup";
import { Post } from "./apibasemethods";
import ProtectedRoute from "./protectedRoute";

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="post/" element={<ProtectedRoute Component={Post} />} />
          <Route path="displayquiz" element={<DisplayQuiz />} />
          <Route path="addquiz" element={<AddQuiz />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard/*" element={<ProtectedRoute Component={DashboardScreen} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default AppRouter;
