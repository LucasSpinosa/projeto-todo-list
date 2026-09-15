import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditTasks from "./pages/EditTasks";
import ManageTasks from "./pages/ManageTasks";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column flex-md-row">
          <Header />
          <div className="d-flex flex-column w-100">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/edit-tasks" element={<EditTasks />} />
              <Route path="/manage-tasks" element={<ManageTasks />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
