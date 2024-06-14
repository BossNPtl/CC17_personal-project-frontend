import { Suspense } from "react";
import AppRouter from "./routes/AppRouter";
import AuthContextProvider from "./contexts/AuthContext";
import AlbumContextProvider from "./contexts/AlbumContext";

function App() {

  return (
    <>
      <Suspense fallback={"loading"} >
        <AuthContextProvider>
          <AlbumContextProvider>
            <AppRouter />
          </AlbumContextProvider>
        </AuthContextProvider>
      </Suspense>
    </>
  )
}

export default App;
