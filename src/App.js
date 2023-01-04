import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-purple/theme.css";
import {BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Change, Forgot, Login, Register,  } from "./func/index";
import React from "react";
import Navbar from "./func/services/Navbar";
import Protected from "./func/services/Protected";
import { AuthContextProvider } from "./func/AuthContext";
import Account from "./func/services/Account";
import Home from "./func/services/Home";
// import Signin from "./func/services/Signin";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/change" element={<Change />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/account"
              element={
                <Protected>
                  <Account />
                </Protected>
              }
            />
          </Routes>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
