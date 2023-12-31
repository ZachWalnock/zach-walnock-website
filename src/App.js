import './App.css';
import Header from './Header/Header.js'
import Body from './Body/Body.js'
import Experience from './Experiences/Experience.js';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    const onPageLoad = () => {
      let width = window.screen.width;
      console.log(width)
      const slider = document.getElementById('slider')
      if (!window.matchMedia("(preferes-reduced-motion: reduce)").matches && width >= 600) {
          slider.setAttribute("infiniteScrolling", true)

          const scroller = document.getElementById('scroller')
          const scrollerChildren = Array.from(scroller.children)
          scrollerChildren.forEach((item) => {
            const duplicatedItem = item.cloneNode(true)
            duplicatedItem.setAttribute("aria-hidden", true)
            scroller.appendChild(duplicatedItem)
            
          })

      }
    }
    if (document.readyState === 'complete') {
      onPageLoad();
    }
    else {
      window.addEventListener('load', onPageLoad, false);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, [])
  return (
  <>
    <div className="App">
      <Header/>
      <Body/>
      <div className='gap'></div>
      <Experience/>
    </div>
  </>
  );
}

export default App;
