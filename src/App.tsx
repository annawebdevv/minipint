import { ThemeProvider } from "styled-components";
import "./styles/App.css";
import { Header } from "./components/Header/Header";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
