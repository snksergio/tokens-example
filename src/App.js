import './App.css';
import Button from './components/button';
import { ThemeProvider } from "styled-components"
import * as theme from './tokens/json/colors.json';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button />
      </div>
    </ThemeProvider>
  );
}

export default App;