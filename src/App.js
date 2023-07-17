import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import HomePage from "./components/Home";
import { store } from "./store";
import api from "./api";
// import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      {/* <ApiProvider api={api}> */}
      <Provider store={store}>
        {/* <QueryClientProvider client={queryClient}> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
        {/* </QueryClientProvider> */}
      </Provider>
      {/* </ApiProvider> */}
    </div>
  );
}

export default App;
