import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Signup } from "./components/Signup/Signup";
import { Toast } from "./components/Toast/Toast";
import { Home } from "./Pages/Home";

function App() {
  const [toast, setToast] = useState({
    isVisible: false,
    message: "",
  });
  function showToastMessage(message) {
    setToast(() => ({ isVisible: true, message: message }));
  }
  function hideToast() {
    setToast(() => ({ isVisible: false, message: "" }));
  }
  useEffect(() => {
    let timer = setTimeout(() => {
      hideToast();
    }, 3000);
    return () => clearTimeout(timer);
  }, [toast]);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Signup showToast={showToastMessage} />}
        ></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="*"
          element={<Signup showToast={showToastMessage} />}
        ></Route>
      </Routes>
      <Toast hideToast={hideToast} toast={toast} />
    </div>
  );
}

export default App;
