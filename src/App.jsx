import gsap from 'gsap';
import {ScrollTrigger, SplitText} from "gsap/all";
import Navbar from './components/Navbar.jsx';
gsap.registerPlugin(ScrollTrigger, SplitText);
import  Hero from './components/Hero.jsx';
import Cocktails from './components/Cocktails.jsx';

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails/>

    </main>
  )
}
export default App;