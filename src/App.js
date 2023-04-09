import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import { onehourRoutes } from "./routes/Routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import PrivateRoutes from "./PrivateRoute";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route element={<PrivateRoutes />}>
          {onehourRoutes.map((route, index) => (
            <Route key={index} element={route.Component} path={route.path} />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
