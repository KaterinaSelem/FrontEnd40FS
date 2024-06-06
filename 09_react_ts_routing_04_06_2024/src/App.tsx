import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import TaskList from "./components/TaskList";
import UserList from "./components/UserList";
import Layout from "./layout/Layout";
import ImageGalerry from "./components/ImageGalerry";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TaskList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/images" element={<ImageGalerry />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
