import { useState } from 'react';
import MainPage from './pages/MainPage';
import { useToggleMode } from './hooks';

function App() {

  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // }

  let [currentMode, handleSwitch] = useToggleMode()

  const example = () => {
    handleSwitch()
  }

  return (
    <div className={currentMode ? "dark" : "light"}>
      <button onClick={example}>Dark/Light</button>
      <MainPage />
    </div>
  );
}

export default App;
