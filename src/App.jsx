import AppRouter from "./routes/AppRouter";
import AuthContextProvider from "./contexts/AuthContext";
import AlbumContextProvider from "./contexts/AlbumContext";

function App() {

  return (
    <>
      <AuthContextProvider>
        <AlbumContextProvider>
          <AppRouter />
        </AlbumContextProvider>
      </AuthContextProvider>
    </>
  )
}

export default App;
