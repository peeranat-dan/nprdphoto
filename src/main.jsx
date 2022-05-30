import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NoContent from "./views/NoContent";
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
          <Route path="/nprdphoto" element={<App />} />
          <Route path="*" element={<NoContent />} />
      </Routes>
  </BrowserRouter>
);
