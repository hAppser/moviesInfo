import { BrowserRouter } from "react-router-dom";
import AppContent from "./components/AppContent/AppContent";

const App = () => {
  return (
    <BrowserRouter>
      <AppContent/>
    </BrowserRouter>
  );
}

export default App;
