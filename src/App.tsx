import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from './dashboard/landing';
import { ThemeProvider } from '@mui/material/styles'
import NotFound from './common/notFound';
import './App.css';
import { appTheme } from "./appTheme";
import Rockets from "./dashboard/rockets";
import RocketView from "./dashboard/rockets/rocketView";

const App = () => (

  <ThemeProvider theme={appTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/rockets/:rocketId" element={<RocketView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
