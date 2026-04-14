import { BrowserRouter } from "react-router-dom";
import { GridBackground } from './components/GridBackground';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import './styles/global.css'

export function App() {
  return (
    <BrowserRouter>
      <GridBackground />
      <Nav />
      <Hero />
    </BrowserRouter>
  )
}