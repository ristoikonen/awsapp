import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as AmplifyUILink } from '@aws-amplify/ui-react';

import '../style/fontpairs.css';

export default function FontPairsPage ({}) {

  return (  
    <div className="control-panel">
        <div className="container">

        <header>
            <AmplifyUILink as={ReactRouterLink} to="/">
                Home
            </AmplifyUILink>
            <h3>UNDER CONSTRUCTION</h3>
            <h1>Font Pairings</h1>
        </header>

            <label className="control-text">
                Select Active Pairing:
            </label>
            <div className="dropdown-container" id="dropdownContainer">
                <button className="dropdown-button" id="dropdownBtn" aria-haspopup="true" aria-expanded="false">
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
        </div>

        <nav className="main-nav">
            <div className="container nav-wrapper">
                <div className="logo">STUDIO ARCHITECTURE</div>
                <ul className="menu-list">
                    <li><a href="#" className="menu-link">Overview</a></li>
                    <li><a href="#" className="menu-link">Portfolios</a></li>
                    <li><a href="#" className="menu-link">Case Studies</a></li>
                    <li><a href="#" className="menu-link">Journal</a></li>
                    <li><a href="#" className="menu-link">Contact</a></li>
                </ul>
            </div>
        </nav>


    <header className="content-section">
        <div className="container">
            <h1 id="fontHeader1">Dynamic Typography</h1>
            <h1 id="fontHeader2">using Google CDN</h1>
            <h2>Testing curated open-source font setups.</h2>
            <p className="description">
                This environment enables rapid switching between distinct design philosophies. When you modify the active checkbox selection above, the DOM updates its CSS custom properties instantly. Observe how the weight balance transitions seamlessly between geometric structural styles and warm, high-performance interface typography.
            </p>
            <div className="test-area">
                Test font here
            </div>

        </div>
    </header>


    </div>
 

)}