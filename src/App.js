import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./components/User";
import Users from "./components/Users";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path=":username" element={<User />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;