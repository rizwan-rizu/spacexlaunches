import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from '@mui/material/styles'
import { persistStore } from "./store/persistStore";
import { useContext, useEffect } from "react";
import { StoreContext } from "./store";
import { appTheme } from "./appTheme";
import Rockets from "./dashboard/rockets";
import RocketView from "./dashboard/rockets/rocketView";
import Launches from "./dashboard/launches";
import LaunchPad from "./dashboard/launchPads";
import LaunchPadView from "./dashboard/launchPads/launchPadView";
import LaunchView from "./dashboard/launches/launchView";
import NotFound from './common/notFound';
import './App.css';

const App = () => {
  const { rocket, sidebar, launch, launchPad, upcomingLaunch } = useContext(StoreContext)

  useEffect(() => {
    persistStore(rocket, sidebar, launch, launchPad, upcomingLaunch)
  }, [])

  return (
    <ThemeProvider theme={appTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Launches />} />
          <Route path="/launch/:launchId" element={<LaunchView />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/rockets/:rocketId" element={<RocketView />} />
          <Route path="/launch-pad" element={<LaunchPad />} />
          <Route path="/launch-pad/:launchPadId" element={<LaunchPadView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
};

export default App;
