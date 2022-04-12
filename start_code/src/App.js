import { useState } from 'react';
import MainPage from './pages/MainPage';
import { toggleMode } from './hooks';

function App() {

  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // }

  let {currentMode ,handleSwitch} = toggleMode

  return (
    <div className={currentMode ? "dark" : "light"}>
      <button onClick={handleSwitch}>Dark/Light</button>
      <MainPage />
    </div>
  );
}

export default App;
