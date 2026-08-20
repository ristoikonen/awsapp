import { useState, useEffect } from 'react';
import { View  } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as AmplifyUILink } from '@aws-amplify/ui-react';

export default function FontPairsPageDemo() {
  //const [headerFont, setHeaderFont] = useState<PlayFontKey>('play1');
  const [headFont, setHeadFont] = useState<string>('Montserrat');
  const [textFont, setTextFont] = useState<string>('Open Sans');


  // Dynamically load Google Fonts when selections change
  useEffect(() => {
    const fontsToLoad = [headFont, textFont];
    
    //console.log(activePlay);
    
    fontsToLoad.forEach(font => {
      const fontQuery = font.replace(/\s+/g, '+');
      const href = `https://fonts.googleapis.com/css2?family=${fontQuery}:wght@400;600;700&display=swap`;
      
      const existingLink = document.querySelector(`link[href="${href}"]`);
      if (!existingLink) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
      }
    });
  }, [headFont, textFont]);

  return (
    
    <div>
      <header>
        <AmplifyUILink as={ReactRouterLink} to="/">
            Home
        </AmplifyUILink>
      </header>

      <View maxWidth='1100px' minHeight="10vh" backgroundColor="var(--amplify-colors-background-secondary)" padding="2px">
      
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        {/* ===================================================================
            TOP CONTROL BAR (Header & Text Font Selectors)
            =================================================================== */}
        <div style={{
          background: '#ffffff',
          border: '1px solid #dee2e6',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '24px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
        }}>
          {/* Header Font Cell */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#f1f5f9', padding: '10px 14px', borderRadius: '6px', border: '1px solid #dee2e6' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="48" height="48" style={{ flexShrink: 0 }}>
              <rect x="0" y="0" width="40" height="40" rx="8" fill="#94A3B8"/>
              <text x="20" y="27" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="22" fontWeight="700" fill="#ffffff" textAnchor="middle">H</text>
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '4px' }}>
              <select 
                value={headFont}
                onChange={(e) => setHeadFont(e.target.value)}
                style={{ padding: '4px 8px', border: '1px solid #dee2e6', borderRadius: '4px', fontFamily: 'inherit', fontSize: '0.9rem', backgroundColor: '#fff', outline: 'none', width: '100%' }}
              >
                <option value="Montserrat">Montserrat Bold</option>
                <option value="Roboto">Roboto Bold</option>
                <option value="Merriweather">Merriweather Bold</option>
                <option value="Inter">Inter Bold</option>
                <option value="Raleway">Raleway Bold</option>
              </select>
            </div>
          </div>

          {/* Text Font Cell */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#f1f5f9', padding: '10px 14px', borderRadius: '6px', border: '1px solid #dee2e6' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="48" height="48" style={{ flexShrink: 0 }}>
              <rect x="0" y="0" width="40" height="40" rx="8" fill="#94A3B8"/>
              <text x="20" y="27" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="22" fontWeight="700" fill="#ffffff" textAnchor="middle">T</text>
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '4px' }}>
              <select 
                value={textFont}
                onChange={(e) => setTextFont(e.target.value)}
                style={{ padding: '4px 8px', border: '1px solid #dee2e6', borderRadius: '4px', fontFamily: 'inherit', fontSize: '0.9rem', backgroundColor: '#fff', outline: 'none', width: '100%' }}
              >
                <option value="Open Sans">Open Sans Regular</option>
                <option value="Roboto">Roboto Regular</option>
                <option value="Montserrat">Montserrat Regular</option>
                <option value="Lato">Lato Regular</option>
                <option value="Raleway">Raleway Regular</option>
              </select>
            </div>
          </div>
        </div>

        <h2 style={{ fontFamily: `'${headFont}', sans-serif`, textAlign: 'left', fontWeight: 700, fontSize: '1.5rem', padding: '1px' , color: 'var(--amplify-colors-font-secondary)'}}>
          Parasite-cleaning method
        </h2>
        <p style={{ fontFamily: `'${textFont}', sans-serif`, textAlign: 'left', marginBottom: '36px', color: '#495057', lineHeight: 1.5 }}>
          Evolutionary psychologists studying great apes noted that primates spend hours grooming each other's fur to pick off ticks, lice, and dead skin. Human kissing originated roughly 21 million years ago as a final "suction" step in ancient ape grooming rituals. As early humans evolved and lost their thick body fur, the practical need for hours of grooming disappeared. However, the very last stage—the lip-to-skin touch and suction—remained behind as a vestigial shorthand to say, "I care about you."
        </p>
        
        <h2 style={{ fontFamily: `'${headFont}', sans-serif`, textAlign: 'left', fontWeight: 700, fontSize: '1.5rem', padding: '1px' , color: 'var(--amplify-colors-font-secondary)' }}>
          Tetrachromats among us
        </h2>
        <p style={{ fontFamily: `'${textFont}', sans-serif`, textAlign: 'left', marginBottom: '36px', color: '#495057', lineHeight: 1.5 }}>
          Rare humans called tetrachromats see a fourth primary color because a genetic mutation gives them a fourth type of cone cell in their retinas. While typical human vision combines red, green, and blue (RGB) inputs to perceive about 1 million colors, a true tetrachromat can process an extra dimension of light, allowing them to see up to 100 million distinct shades.
        </p> 

      </div>
    </View>
    </div>
  );
}