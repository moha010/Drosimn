
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./commponent/Home";
import Mohaderh from "./commponent/Mohaderh";
import Video from "./commponent/Video";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <div>
      <Mohaderh />
    </div>,
  },
  {
    path: "/:id/:id",
    element: <Video />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}


export default App;
