import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import Login from "./page/login";
import Register from "./page/register";
import Detail from "./page/detail";
import Dashboard from "./page/dashboard";
import Protected from "./components/protected";
import AdminLogin from "../src/page/admin/admin";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* USER LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* ADMIN LOGIN */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* USER REGISTER */}
        <Route path="/register" element={<Register />} />

        {/* USER PROTECTED ROUTES */}
        <Route element={<Protected allowedRoles={["user", "admin"]} />}>
          <Route path="/" element={<Home />} />
          <Route path="/shoe/:id" element={<Detail />} />
        </Route>

        {/* ADMIN PROTECTED ROUTES */}
        <Route element={<Protected allowedRoles={["admin"]} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;