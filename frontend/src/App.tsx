import { Outlet } from "react-router-dom";
import Footer from "./Components/ui/Footer";

const App = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
