import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import AllRoutes from './routes/index.jsx';


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <AllRoutes/>
  </StrictMode>,
)
