import { Suspense } from "react";
import AppRouter from "./routes/AppRouter";
import AuthContextProvider from "./contexts/AuthContext";
import AlbumContextProvider from "./contexts/AlbumContext";
import CommentContextProvider from "./contexts/CommentContext";

function App() {

  return (
    <>
      <Suspense fallback={"loading"} >
        <AuthContextProvider>
          <AlbumContextProvider>
            <CommentContextProvider>
              <AppRouter />
            </CommentContextProvider>
          </AlbumContextProvider>
        </AuthContextProvider>
      </Suspense>
    </>
  )
}

export default App;
