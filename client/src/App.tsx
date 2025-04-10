import "./App.css";
import { ThemeProvider } from "./components/ui/theme-provider";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <ThemeProvider>
        <MainPage />
      </ThemeProvider>
    </>
  );
}

export default App;
