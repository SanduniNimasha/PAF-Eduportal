import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Notifications from "./Pages/Notifications";
import Home from "./Pages/Home";
import Post from "./Pages/Post";
import { Toaster } from "react-hot-toast";
import Profile from "./Pages/Profile";
import CreateWorkoutStatus from "./Pages/CreateLearningPlan";
import CreateWorkoutPlan from "./Pages/CreateLearningProgress";
// 
function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:userId" element={<Profile />} />

        <Route path="/CreateWorkoutStatus" element={<CreateWorkoutStatus />} />
        <Route
          path="/CreateWorkoutStatus/:statusId"
          element={<CreateWorkoutStatus />}
        />
        <Route path="/CreateWorkoutPlan" element={<CreateWorkoutPlan />} />
        <Route
          path="/CreateWorkoutPlan/:progressId"
          element={<CreateWorkoutPlan />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
