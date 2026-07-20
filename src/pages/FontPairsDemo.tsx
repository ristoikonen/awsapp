import  { useEffect, useRef } from 'react';
// React,    useState, useEffect,
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as AmplifyUILink } from '@aws-amplify/ui-react';

import '../style/fontpairs.css';


interface FontPair {
  name: string;
  header: string;
  header2: string;
  menu: string;
  menu2: string;
  url: string;
}

// Typings for the pairings object using a dynamic key record map
type PairKey = 'pair1' | 'pair2' | 'pair3' | 'pair4' | 'pair5' | 'pair6';

// Type the pairings dictionary with explicit key structural constraints
const pairings: Record<string, FontPair> = {
  pair1: { name: "Montserrat + Source Sans 3", header: "'Montserrat', sans-serif", header2: "Montserrat", menu: "'Source Sans 3', sans-serif", menu2: "Source Sans 3", url: "https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=Source+Sans+3:wght@400;700&display=swap" },
  pair2: { name: "Merriweather + Open Sans", header: "'Merriweather', serif", header2: "Merriweather", menu: "'Open Sans', sans-serif", menu2: "Open Sans", url: "https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Open+Sans:wght@400;700&display=swap" },
  pair3: { name: "Poppins + Lato", header: "'Poppins', sans-serif", header2: "Poppins", menu: "'Lato', sans-serif", menu2: "Lato", url: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@600;800&display=swap" },
  pair4: { name: "Roboto + Roboto", header: "'Roboto', sans-serif", header2: "Roboto", menu: "'Roboto', sans-serif", menu2: "Roboto", url: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" },
  pair5: { name: "Gotham + Roboto", header: "'Gotham', sans-serif", header2: "Gotham", menu: "'Roboto', sans-serif", menu2: "Roboto", url: "https://fonts.googleapis.com/css2?family=Gotham:wght@400;700&Roboto:wght@400;700;900&display=swap" },
  pair6: { name: "Raleway + Bitter", header: "'Raleway', sans-serif", header2: "Raleway", menu: "'Bitter', sans-serif", menu2: "Bitter", url: "https://fonts.googleapis.com/css2?family=Raleway:wght@400;700;900&family=Bitter:wght@400;700;900&display=swap" }
};


export default function FontPairsPage ({}) {

     //const [hfHeader, setHfHeader] = useState<FontKey>('playfair');

const elementCacheRef1 = useRef<HTMLButtonElement | null>(null);
//const elementCacheRef2 = useRef<HTMLButtonElement | null>(null);

  // The ref callback evaluates the ID target immediately on mount
  const dropdownBtnSetup = (node: HTMLButtonElement | null) => {
    if (node) {
      // Falls back to direct native selection if caching requires a hard structural look
      elementCacheRef1.current = document.getElementById('dropdownBtn') as HTMLButtonElement;
    }
  };



const dropdownContainer = document.getElementById('dropdownContainer') as HTMLElement | null;
const dropdownBtn = document.getElementById('dropdownBtn') as HTMLButtonElement | null;
const arrowIndicator = document.getElementById('arrowIndicator') as HTMLElement | null;
const dropdownBtnText = dropdownBtn?.querySelector('span:first-child') as HTMLSpanElement | null;
const fontHeader1Text = document.getElementById('fontHeader1') as HTMLElement | null;
const fontHeader2Text = document.getElementById('fontHeader2') as HTMLElement | null;
const checkboxes = document.querySelectorAll<HTMLInputElement>('input[name="font-pair"]');

// 3. Setup interaction listeners with safe structural guard checks
if (dropdownBtn && dropdownContainer && arrowIndicator) {
  dropdownBtn.addEventListener('click', (e: MouseEvent) => {
    e.stopPropagation();
    const isActive = dropdownContainer.classList.toggle('is-active');
    dropdownBtn.setAttribute('aria-expanded', String(isActive));
    arrowIndicator.style.transform = isActive ? 'rotate(180deg)' : 'rotate(0deg)';
  });
}

// Contain focus within dropdown inner contents wrapper
if (dropdownContainer) {
  const content = dropdownContainer.querySelector('.dropdown-content') as HTMLElement | null;
  if (content) {
    content.addEventListener('click', (e: MouseEvent) => {
      e.stopPropagation();
    });
  }
}

// Global window click dismissal architecture
window.addEventListener('click', () => {
  if (dropdownContainer && dropdownBtn && arrowIndicator) {
    if (dropdownContainer.classList.contains('is-active')) {
      dropdownContainer.classList.remove('is-active');
      dropdownBtn.setAttribute('aria-expanded', 'false');
      arrowIndicator.style.transform = 'rotate(0deg)';
    }
  }
});

// 4. Checkbox Exclusivity System Loops
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function(this: HTMLInputElement) {
    if (this.checked) {
      checkboxes.forEach(cb => {
        if (cb !== this) cb.checked = false;
      });
      
      console.log(this.value);
      // Explicit type cast verification for dynamic structural key lookup safety
      updateFonts(this.value as PairKey);
    } else {
      this.checked = true; // Block unchecking the singular chosen element state
    }
  });
});


// 5. Core Layout Font Engine Update Mechanism
function updateFonts(pairKey: PairKey): void {
  const selectedPair = pairings[pairKey];
  if (!selectedPair) return;

  // Append new Google Webfont elements if they do not yet exist inside page head context
  if (!document.querySelector(`link[href="${selectedPair.url}"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = selectedPair.url;
    document.head.appendChild(link);
    
    // BUG FIX: document.title is a string primitive, not an object containing a .replace methodology
    document.title = selectedPair.name;
  }

  // Update dynamic CSS Document Root Variables
  document.documentElement.style.setProperty('--header-font', selectedPair.header);
  document.documentElement.style.setProperty('--menu-font', selectedPair.menu);

  // Manipulate node text metrics safely
  if (dropdownBtnText) {
    dropdownBtnText.textContent = `${selectedPair.name} (Active)`;
  }

  if (fontHeader1Text) {
    fontHeader1Text.textContent = selectedPair.header2;
    fontHeader1Text.style.fontFamily = selectedPair.header; // BUG FIX: assigned through .style.fontFamily container instead of .font
  }

  if (fontHeader2Text) {
    fontHeader2Text.textContent = selectedPair.menu2;
    fontHeader2Text.style.fontFamily = selectedPair.menu; // BUG FIX: assigned through .style.fontFamily container instead of .font
  }

  console.log(selectedPair);
}

   useEffect(() => {
    if (elementCacheRef1.current) {
      //elementCacheRef.current.style.fontFamily = fontLibrary[hfHeader];
    }
  }, 
    //[hfHeader]
    );

//const dropdownBtn = document.getElementById('dropdownBtn') as HTMLButtonElement | null;
//const arrowIndicator = document.getElementById('arrowIndicator') as HTMLElement | null;



return (  
    <div>


        <div className="control-panel">

            <div className="container">



        <header className="content-section">
            <div className="container">


                
                <AmplifyUILink as={ReactRouterLink} to="/">
                    Home
                </AmplifyUILink>


                <nav className="main-nav">
                    <div className="container nav-wrapper">
                        <div className="logo">FONT PAIRING</div>
                        <ul className="menu-list">
                            <li><a href="#" className="menu-link">Montserrat</a></li>
                            <li><a href="#" className="menu-link">Merriweather</a></li>
                            <li><a href="#" className="menu-link">Poppins</a></li>
                            <li><a href="#" className="menu-link">Roboto</a></li>
                            <li><a href="#" className="menu-link">Gotham</a></li>
                        </ul>
                    </div>
                </nav>


                <label className="control-text">
                    Select Active Pairing:
                </label>
                <div className="dropdown-container" id="dropdownContainer">
                    <button ref={dropdownBtnSetup} className="dropdown-button" id="dropdownBtn" aria-haspopup="true" aria-expanded="false">
                        <span>Poppins + Lato (Active)</span>
                        <span id="arrowIndicator" className="arrow">▼</span>
                    </button>
                    <div className="dropdown-content">
                        <label className="pair-option">
                            <input type="checkbox" name="font-pair" value="pair1"/>
                            <span>Montserrat + Source Sans 3</span>
                        </label>
                        <label className="pair-option">
                            <input type="checkbox" name="font-pair" value="pair2"/>
                            <span>Merriweather + Open Sans</span>
                        </label>
                        <label className="pair-option">
                            <input type="checkbox" name="font-pair" value="pair3" checked/>
                            <span>Poppins + Lato</span>
                        </label>
                        <label className="pair-option">
                            <input type="checkbox" name="font-pair" value="pair4"/>
                            <span>Roboto + Roboto</span>
                        </label>
                        <label className="pair-option">
                            <input type="checkbox" name="font-pair" value="pair5"/>
                            <span>Gotham + Roboto</span>
                        </label>
                        <label className="pair-option">
                            <input type="checkbox" name="font-pair" value="pair6"/>
                            <span>Raleway + Bitter</span>
                        </label>
                    </div>
                </div>


                <h1 id="fontHeader1">Dynamic Typography</h1>
                <h1 id="fontHeader2">using Google CDN</h1>
                <h2>Testing curated open-source font setups.</h2>
                <p className="description">
                    Switch between distinct designs. 
                    When you modify the active checkbox selection above, the DOM updates its CSS custom properties instantly. 
                    Observe how the weight balance transitions seamlessly between geometric structural styles and warm, 
                    high-performance interface typography.
                </p>
                
                {/* 
                <div className="test-area" contenteditable="true" placeholder="Test font here.">
                    Test font here
                </div> 
                */}

                
            </div>
        </header>




            </div>
        </div>
    </div>
)}