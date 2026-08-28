import { Link as AmplifyUILink, useTheme  } from '@aws-amplify/ui-react';
import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
//import CodeBlock1 from './././components/CodeBlock/CodeBlock';
import CodeBlock from '../components/CodeBlock/CodeBlock';

import {
    ThemeProvider,
    ToggleButton,
    ToggleButtonGroup
} from '@aws-amplify/ui-react';

import '../style/style.css';

export default function FontsPage ({}) {
  const [exclusiveValue, setExclusiveValue] = React.useState('align-left');
    const { tokens } = useTheme();
  return (  

<div className="container">
    <header>

    <ThemeProvider>
        <ToggleButtonGroup value={exclusiveValue} isExclusive
            onChange={(value) => setExclusiveValue(value as string)} >

            <ToggleButton>
                <AmplifyUILink as={ReactRouterLink} to="/">
                    Home &emsp; 
                </AmplifyUILink>
                <svg width="34px" height="34px" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_14_1983)"> <path d="M25.926 53.099V47.174C25.926 45.563 26.5659 44.0179 27.705 42.8787C28.844 41.7394 30.389 41.0993 32 41.099V41.099C32.7977 41.099 33.5876 41.2561 34.3246 41.5615C35.0616 41.8668 35.7313 42.3143 36.2953 42.8784C36.8593 43.4425 37.3067 44.1122 37.6119 44.8493C37.9171 45.5863 38.0741 46.3763 38.074 47.174V53.099" stroke="#426AB2" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.8 24.47V48.599C12.8 49.7925 13.2741 50.9371 14.118 51.781C14.9619 52.6249 16.1065 53.099 17.3 53.099H25.931" stroke="#426AB2" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M38.079 53.099H46.7C47.8935 53.099 49.0381 52.6249 49.882 51.781C50.7259 50.9371 51.2 49.7925 51.2 48.599V26.549C51.1992 25.8505 51.0362 25.1618 50.7239 24.5371C50.4115 23.9123 49.9583 23.3687 49.4 22.949" stroke="#426AB2" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 28.194L29.28 11.927C30.0625 11.329 31.0191 11.0033 32.004 10.9995C32.9888 10.9958 33.9479 11.3141 34.735 11.906L56 27.9" stroke="#426AB2" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.8 24.527V16.697C12.8 16.1666 13.0107 15.6579 13.3858 15.2828C13.7608 14.9077 14.2696 14.697 14.8 14.697H18C18.5304 14.697 19.0391 14.9077 19.4142 15.2828C19.7893 15.6579 20 16.1666 20 16.697V18.73" stroke="#426AB2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <clipPath id="clip0_14_1983"> <rect width="51.999" height="46.1" fill="white" transform="translate(6 9)"></rect> </clipPath> </defs> </g></svg>
            </ToggleButton>

            <ToggleButton value="dark">
                Fonts  &emsp;
                <svg width="34px" height="34px" viewBox="0 0 1024 1024"  version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M809.3 1024H214.7c-71.3 0-129.4-58-129.4-129.4V129.4C85.3 58 143.4 0 214.7 0h594.6c71.3 0 129.4 58 129.4 129.4v765.3c0 71.3-58.1 129.3-129.4 129.3zM214.7 85.3c-24.3 0-44 19.8-44 44v765.3c0 24.3 19.8 44 44 44h594.6c24.3 0 44-19.8 44-44V129.4c0-24.3-19.8-44-44-44H214.7z" fill="#3688FF"></path><path d="M725.3 384c-23.6 0-42.7-19.1-42.7-42.7V320H341.3v21.3c0 23.6-19.1 42.7-42.7 42.7S256 364.9 256 341.3v-64c0-23.6 19.1-42.7 42.7-42.7h426.7c23.6 0 42.7 19.1 42.7 42.7v64c-0.1 23.6-19.2 42.7-42.8 42.7z" fill="#5F6379"></path><path d="M512 789.3c-23.6 0-42.7-19.1-42.7-42.7V277.3c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v469.3c0 23.6-19.1 42.7-42.7 42.7z" fill="#5F6379"></path><path d="M618.7 789.3H405.3c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7h213.3c23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.6 42.7z" fill="#5F6379"></path></g></svg>
            </ToggleButton>

            <ToggleButton>
                User &emsp; 
                <svg width="34px" height="34px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 661.3c-117.6 0-213.3-95.7-213.3-213.3S394.4 234.7 512 234.7 725.3 330.4 725.3 448 629.6 661.3 512 661.3z m0-341.3c-70.6 0-128 57.4-128 128s57.4 128 128 128 128-57.4 128-128-57.4-128-128-128z" fill="#5F6379"></path><path d="M837 862.9c-15.7 0-30.8-8.7-38.2-23.7C744.3 729.5 634.4 661.3 512 661.3s-232.3 68.1-286.8 177.9c-10.5 21.1-36.1 29.7-57.2 19.2s-29.7-36.1-19.2-57.2C217.8 662.3 357 576 512 576s294.2 86.3 363.2 225.2c10.5 21.1 1.9 46.7-19.2 57.2-6.1 3-12.6 4.5-19 4.5z" fill="#5F6379"></path><path d="M512 1002.7c-270.6 0-490.7-220.1-490.7-490.7S241.4 21.3 512 21.3s490.7 220.1 490.7 490.7-220.1 490.7-490.7 490.7z m0-896c-223.5 0-405.3 181.8-405.3 405.3S288.5 917.3 512 917.3 917.3 735.5 917.3 512 735.5 106.7 512 106.7z" fill="#3688FF"></path></g></svg>
            </ToggleButton>

            <ToggleButton size="large"  backgroundColor={tokens.colors.blue[10]}>
                <AmplifyUILink as={ReactRouterLink} to="/fontplay">
                    Font Play &emsp;
                </AmplifyUILink>
                <svg width="34px" height="34px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 8H32" stroke="#426AB2" stroke-width="4.8" stroke-linecap="round"></path> <path d="M28 21H44" stroke="#426AB2" stroke-width="4.8" stroke-linecap="round"></path> <path d="M18 42L18 8" stroke="#426AB2" stroke-width="4.8" stroke-linecap="round"></path> <path d="M36 42L36 21" stroke="#426AB2" stroke-width="4.8" stroke-linecap="round"></path> </g></svg>
            </ToggleButton>
            <ToggleButton>
                Image AI &emsp;
                <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#a)" stroke="#3688FF" stroke-width="2.16" stroke-miterlimit="10"> <path d="M5 23H3.4A2.4 2.4 0 0 1 1 20.6V19m18 4h1.6a2.4 2.4 0 0 0 2.4-2.4V19m0-14V3.4A2.4 2.4 0 0 0 20.6 1H19M5 1H3.4A2.4 2.4 0 0 0 1 3.4V5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8.4 4H5.6A1.6 1.6 0 0 0 4 5.6v2.8A1.6 1.6 0 0 0 5.6 10h2.8A1.6 1.6 0 0 0 10 8.4V5.6A1.6 1.6 0 0 0 8.4 4Z" fill="#3688FF" fill-opacity=".16"></path> <path d="M8.4 14H5.6A1.6 1.6 0 0 0 4 15.6v2.8A1.6 1.6 0 0 0 5.6 20h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 8.4 14ZM18.4 4h-2.8A1.6 1.6 0 0 0 14 5.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8A1.6 1.6 0 0 0 20 8.4V5.6A1.6 1.6 0 0 0 18.4 4Z" fill="#ffffff"></path> <path d="M18.4 14h-2.8a1.6 1.6 0 0 0-1.6 1.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8a1.6 1.6 0 0 0-1.6-1.6Z" fill="#3688FF" fill-opacity=".16"></path> </g> <defs> <clipPath id="a"> <path fill="#ffffff" d="M0 0h24v24H0z"></path> </clipPath> </defs> </g></svg>
            </ToggleButton>

            <ToggleButton>
                Terms &emsp;
                <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.04582 10.8718C8.52718 10.601 8.6979 9.99127 8.42713 9.50992C8.15637 9.02856 7.54665 8.85784 7.0653 9.1286L3.50974 11.1286C3.18725 11.31 2.99128 11.6546 3.0003 12.0245C3.00931 12.3944 3.22184 12.7291 3.55279 12.8946L5.63258 13.9345L3.50974 15.1286C3.18725 15.31 2.99128 15.6546 3.0003 16.0245C3.00931 16.3944 3.22184 16.7291 3.55279 16.8946L11.5528 20.8946C11.8343 21.0354 12.1657 21.0354 12.4472 20.8946L20.4472 16.8946C20.7782 16.7291 20.9907 16.3944 20.9997 16.0245C21.0087 15.6546 20.8128 15.31 20.4903 15.1286L18.3674 13.9345L20.4472 12.8946C20.7782 12.7291 20.9907 12.3944 20.9997 12.0245C21.0087 11.6546 20.8128 11.31 20.4903 11.1286L16.9347 9.1286C16.4533 8.85784 15.8436 9.02856 15.5729 9.50992C15.3021 9.99127 15.4728 10.601 15.9542 10.8718L17.8679 11.9482L12 14.8821L6.13213 11.9482L8.04582 10.8718ZM16.2077 15.0144L12.4472 16.8946C12.1657 17.0354 11.8343 17.0354 11.5528 16.8946L7.7923 15.0144L6.13213 15.9482L12 18.8821L17.8679 15.9482L16.2077 15.0144Z" fill="#4296FF"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5528 3.10557C11.8343 2.96481 12.1657 2.96481 12.4472 3.10557L20.4472 7.10557C20.786 7.27496 21 7.62123 21 8C21 8.37877 20.786 8.72504 20.4472 8.89443L12.4472 12.8944C12.1657 13.0352 11.8343 13.0352 11.5528 12.8944L3.55279 8.89443C3.214 8.72504 3 8.37877 3 8C3 7.62123 3.214 7.27496 3.55279 7.10557L11.5528 3.10557ZM6.23607 8L12 10.882L17.7639 8L12 5.11803L6.23607 8Z" fill="#152C70"></path> </g></svg>
            </ToggleButton>

          </ToggleButtonGroup>
        </ThemeProvider>

        <br/><br/>

        <h1>Font Showcase</h1>

    </header>

        <div className="info-card">
            <h3>Copy links to load these eight fonts from Google's CDN</h3>
            <p>
                Add selection of Google's eight popular fonts onto your page.
                Versions are regular, bold amnd italics (weights are usually 400,700 and 800).
                Fonts are: Inter, 
            </p>


            <span><CodeBlock code="&lt;link rel=&quot;preconnect&quot; href=&quot;https://googleapis.com&quot;&gt;
&lt;link rel=&quot;preconnect&quot; href=&quot;https://fonts-gstatic.com&quot; crossorigin&gt;
&lt;link href=&quot;https://googleapis.com/css2?family=Inter:wght@400;600;700&amp;family=Lato:ital,wght@0,400;0,700;1,400&amp;family=Merriweather:ital,wght@0,400;0,700;1,300&amp;family=Montserrat:wght@400;700;800&amp;family=Open+Sans:wght@400;600;700&amp;family=Poppins:wght@400;600;700&amp;family=Roboto:wght@400;500;700&amp;family=Source+Sans+3:wght@400;600;700&amp;display=swap&quot; rel=&quot;stylesheet&quot;&gt;" /></span>
        </div>

        <div className="showcase-row">
            <div className="specimen-side">
                <h2 className="font-inter badge-inter">1. Inter</h2>
                <p className="large-display font-inter">Subscription Report</p>
                <p className="font-meta">Notice the ultra-clean numbers and high readability at large scaling.</p>
                <p className="font-eight">For UI design, general computer screen font.</p>
            </div>
            <div className="scenario-side">
                <div className="canvas-container font-inter">
                    <div className="layer-1">Design System</div>
                    <div className="layer-2">Scale Type 48px</div>
                    <div className="layer-3">Interface UI</div>
                    <div className="layer-4">Variables & Nodes</div>
                    <div className="layer-5">Clean Numbers 9.8%</div>
                    <div className="layer-6">Minimalist Screen Alignment</div>
                    <div className="layer-7">Tracking rendering configuration logs</div>
                </div>
            </div>
        </div>

        <div className="showcase-row">
            <div className="specimen-side">
                <h2 className="font-roboto badge-roboto">2. Roboto</h2>
                <p className="large-display font-roboto">Account Settings</p>
                <p className="font-meta">The structured, classNameic neo-grotesque layout feels instantly familiar.</p>
                <p className="font-eight">Mobile apps, websites and user interfaces.</p>
            </div>
            <div className="scenario-side">
                <div className="canvas-container font-roboto">
                    <div className="layer-1">Android Core</div>
                    <div className="layer-2">Neo-Grotesque</div>
                    <div className="layer-3">Global Standard</div>
                    <div className="layer-4">System Layouts</div>
                    <div className="layer-5">Engineered Flow</div>
                    <div className="layer-6">Dynamic Geometry Rendering</div>
                    <div className="layer-7">Cross-platform component structural bounds</div>
                </div>
            </div>
        </div>

        <div className="showcase-row">
            <div className="specimen-side">
                <h2 className="font-open-sans badge-open-sans">3. Open Sans</h2>
                <p className="large-display font-open-sans">Master CSS</p>
                <p className="font-meta">Extremely broad letter structures prevent eye-fatigue at scale.</p>
                <p className="font-eight">Everyday reading, website articles and long documents.</p>
            </div>
            <div className="scenario-side">
                <div className="canvas-container font-open-sans">
                    <div className="layer-1">Neutral Balance</div>
                    <div className="layer-2">Highly Readable</div>
                    <div className="layer-3">Editorial Flow</div>
                    <div className="layer-4">Optimized Blocks</div>
                    <div className="layer-5">Zero Fatigue Text</div>
                    <div className="layer-6">Broad Terminal Structuring</div>
                    <div className="layer-7">Humanist type properties optimized for paragraphs</div>
                </div>
            </div>
        </div>

        <div className="showcase-row">
            <div className="specimen-side">
                <h2 className="font-lato badge-lato">4. Lato</h2>
                <p className="large-display font-lato">Corporate Strategy</p>
                <p className="font-meta">Look closely at the slightly rounded endings on capital letters.</p>
                <p className="font-eight">For business.</p>
            </div>
            <div className="scenario-side">
                <div className="canvas-container font-lato">
                    <div className="layer-1">Strategy Plan</div>
                    <div className="layer-2">Light Terminal Station</div>
                    <div className="layer-3">Enterprise Detail</div>
                    <div className="layer-4">Financial Metrics</div>
                    <div className="layer-5">Polished Polish</div>
                    <div className="layer-6">Rounded classNameic Geometry</div>
                    <div className="layer-7">Professional communication letterforms</div>
                </div>
            </div>
        </div>

        <div className="showcase-row">
            <div className="specimen-side">
                <h2 className="font-montserrat badge-montserrat">5. Montserrat</h2>
                <p className="large-display font-montserrat">MAKE AN IMPACT</p>
                <p className="font-meta">The heavy geometric width provides unmatched poster-like visual power.</p>
                <p className="font-eight">Logo like: Headings and infographics.</p>
            </div>
            <div className="scenario-side">
                <div className="canvas-container font-montserrat">
                    <div className="layer-1">PURE GEOMETRIC</div>
                    <div className="layer-2">POSTER IMPACT</div>
                    <div className="layer-3">Capital News</div>
                    <div className="layer-4">Notice of Removal</div>
                    <div className="layer-5">HEAVY WEIGHT</div>
                    <div className="layer-6">Boutique & Visual Branding</div>
                    <div className="layer-7">Inspired by traditional Buenos Aires posters</div>
                </div>
            </div>
        </div>

        <div className="showcase-row">
            <div className="specimen-side">
                <h2 className="font-merriweather badge-merriweather">6. Merriweather</h2>
                <p className="large-display font-merriweather">Editorial Opinion Piece</p>
                <p className="font-meta-merriweather">A thick, sturdy serif designed to stay perfectly readable on low-contrast screens.<br />Reading font; Blogs, websites and e-books.</p>
            </div>
            <div className="scenario-side">
                <div className="canvas-container font-merriweather">
                    <div className="layer-1">Sturdy Serif</div>
                    <div className="layer-2">Editorial Layout</div>
                    <div className="layer-3">E-Book Contrast</div>
                    <div className="layer-4">Traditional Press</div>
                    <div className="layer-5">Literary Text</div>
                    <div className="layer-6">Thick Display Glyphs & Hooks</div>
                    <div className="layer-7">Designed specifically for long digital reading</div>
                </div>
            </div>
        </div>

        <div className="showcase-row">
            <div className="specimen-side">
                <h2 className="font-poppins badge-poppins">7. Poppins</h2>
                <p className="large-display font-poppins">Smart Watch</p>
                <p className="font-meta">Use in headlines, logos, and short paragraphs.</p>
            </div>
            <div className="scenario-side">
                <div className="canvas-container font-poppins">
                    <div className="layer-1">Perfect Circles</div>
                    <div className="layer-2">Geometric Pop</div>
                    <div className="layer-3">Modern Display</div>
                    <div className="layer-4">Smart Hardware</div>
                    <div className="layer-5">Vibrant Scale</div>
                    <div className="layer-6">Trendy Sans Systematics</div>
                    <div className="layer-7">Symmetric construction for application titles</div>
                </div>
            </div>
        </div>

        <div className="showcase-row">
            <div className="specimen-side">
                <h2 className="font-source-sans badge-source-sans">8. Source Sans 3</h2>
                <p className="large-display font-source-sans">Server Report</p>
                <p className="font-meta">General use font; body text, UI, and long documents.</p>
            </div>
            <div className="scenario-side">
                <div className="canvas-container font-source-sans">
                    <div className="layer-1">Adobe classNameic</div>
                    <div className="layer-2">Open Source UI</div>
                    <div className="layer-3">Data Manifests</div>
                    <div className="layer-4">Dense Typography</div>
                    <div className="layer-5">Technical Spec</div>
                    <div className="layer-6">Functional Layout Scaling</div>
                    <div className="layer-7">High legibility coding environments & structures</div>
                </div>
            </div>
        </div>

        <footer>Fonts.googleapis.com to serves a CSS stylesheet to fonts-gstatic.com that hosts font files.<br/>
                Fonts are of various weights, often 400, 700 and 800. Check googleapis.com -link for details.<br/>
                Fonts-gstatic.com and googleapis.com are part of Google's' massive, global Content Delivery Network (CDN).
                <br/>&copy; Risto Ikonen 2026
        </footer>

    </div>

)}