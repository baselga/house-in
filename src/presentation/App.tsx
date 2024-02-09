import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "./components/templates/RequireAuth";
import { SECTIONS, SectionKey } from "./config/sections";
import { AuthProvider } from "./helpers/authContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {Object.keys(SECTIONS).map((key) => {
              const section = SECTIONS[key as SectionKey];
              return (
                <Route
                  path={section.path}
                  element={
                    section.private ? (
                      <RequireAuth>{section.view}</RequireAuth>
                    ) : (
                      section?.view
                    )
                  }
                  key={section.path}
                />
              );
            })}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
