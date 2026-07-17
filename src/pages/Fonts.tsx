//import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as AmplifyUILink } from '@aws-amplify/ui-react';
//import CodeBlock1 from './././components/CodeBlock/CodeBlock';
import CodeBlock from '../components/CodeBlock/CodeBlock';

import '../style/style.css';

export default function FontsPage ({}) {

  return (  

    <div className="container">
        <header>
            <AmplifyUILink as={ReactRouterLink} to="/">
                Home
            </AmplifyUILink>
            <h3>UNDER CONSTRUCTION</h3>
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