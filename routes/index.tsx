import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

export function BrowserRouter() {
  return <RouterProvider router={router} />;
}
