
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MonsterprepContextProvider } from "./context/MonsterprepContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(

    <MonsterprepContextProvider>
      <App />
    </MonsterprepContextProvider>
  
);
