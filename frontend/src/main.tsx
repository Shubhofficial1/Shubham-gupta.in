import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HomeScreen } from "./Screens-test/HomeScreen/index.tsx";
import { ProjectDetailsScreen } from "./Screens-test/ProjectDetailsScreen/index.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" index={true} element={<HomeScreen />}></Route>
      <Route
        path="projects/:projectSlug"
        element={<ProjectDetailsScreen />}
      ></Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<RouterProvider router={router} />);
