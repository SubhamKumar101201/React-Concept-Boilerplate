import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/Theme';
import Theme from './components/ThemeSwitcher/Theme';
import Card from './components/ThemeSwitcher/Card';

const App = () => {
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>

      <div className="flex flex-wrap mt-4 min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Theme />
          </div>

          <div className="flex flex-col gap-y-2 w-full max-w-sm mx-auto">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>

    </ThemeProvider>
  );
};

export default App;
