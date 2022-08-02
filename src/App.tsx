import { ThemeProvider } from "styled-components";

import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";

import { theme } from "./styles/theme";
import "./styles/App.css";
import { SideBar } from "./components/SideBar/SideBar";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Body/>
        <SideBar/>
      </div>
    </ThemeProvider>
  );
}

export default App;
