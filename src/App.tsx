import { ThemeProvider } from "styled-components";

import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";

import { theme } from "./styles/theme";
import "./styles/App.css";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Body/>
      </div>
    </ThemeProvider>
  );
}

export default App;
