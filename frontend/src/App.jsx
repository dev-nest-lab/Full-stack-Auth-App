import { Routes, Route } from "react-router-dom";
import AuthForm from "./AuthForm";
import CustomerDetails from "./CustomerDetails";
import "./App.css"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthForm />} />
      <Route path="/customers" element={<CustomerDetails />} />
    </Routes>
  );
}

export default App;