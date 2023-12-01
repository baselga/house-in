import { SectionKey, SECTIONS } from "@/infrastructure/config/sections";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  Object.keys(SECTIONS).map((key) => {
    const sectionConfig = SECTIONS[key as SectionKey]
    return {
      path: sectionConfig.path,
      element: sectionConfig.view
    }
  })
);

const queryClient = new QueryClient()

function App() {  
  return (    
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App;
