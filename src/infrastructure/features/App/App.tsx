import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import EdiblePage from '../pages/EdiblePage';
import HomePage from '../pages/HomePage';

const router = createBrowserRouter([
  {
    path: "/despensa",
    element: <EdiblePage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
