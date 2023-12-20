import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from '@mui/material/styles'
import NotFound from './common/notFound';
import './App.css';
import { appTheme } from "./appTheme";
import Rockets from "./dashboard/rockets";
import RocketView from "./dashboard/rockets/rocketView";
import Launches from "./dashboard/launches";
import { persistStore } from "./store/persistStore";
import { useContext, useEffect } from "react";
import { StoreContext } from "./store";

const App = () => {
  const { rocket, sidebar, launch } = useContext(StoreContext)

  useEffect(() => {
    persistStore(rocket, sidebar, launch)
  }, [])

  return (
    <ThemeProvider theme={appTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Launches />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/rockets/:rocketId" element={<RocketView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
};

export default App;
