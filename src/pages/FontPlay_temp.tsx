import React, { useState, useEffect } from 'react';
import { View, Flex, Button, Heading,  CheckboxField } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; // Essential Amplify UI Global Reset
import { pairings, type PairKey } from '../data/fontData.ts';

import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as AmplifyUILink } from '@aws-amplify/ui-react';

export default function FontPairsPageDemo() {
  const [activePairKey, setActivePairKey] = useState<PairKey>('pair3');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const activePair = pairings[activePairKey];

  // Dynamically load Google Fonts when selections change
  useEffect(() => {

    const existingLink = document.querySelector(`link[href="${activePair.url}"]`);
    if (!existingLink) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = activePair.url;
      document.head.appendChild(link);
    }
    document.title = activePair.name;
    document.documentElement.style.setProperty('--header-font', activePair.header);
    document.documentElement.style.setProperty('--menu-font', activePair.menu);
  }, [activePairKey, activePair]);


    // Global Click-Away To Close Menu Content
    useEffect(() => {
      const handleGlobalClick = () => setIsDropdownOpen(false);
      window.addEventListener('click', handleGlobalClick);
      return () => window.removeEventListener('click', handleGlobalClick);
    }, []);
  
    const handleDropdownToggle = (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsDropdownOpen(prev => !prev);
    };

  return (
    
    <div>
            <header>
            <AmplifyUILink as={ReactRouterLink} to="/" fontFamily={activePair.header}>
                Home
            </AmplifyUILink>


        </header>

    <View maxWidth='1100px' minHeight="100vh" backgroundColor="var(--amplify-colors-background-secondary)" padding="20px">
      
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


          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#f1f5f9', padding: '10px 14px', borderRadius: '6px', border: '1px solid #dee2e6' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="48" height="48" style={{ flexShrink: 0 }}>
              <rect x="0" y="0" width="40" height="40" rx="8" fill="#94A3B8"/>
              <text x="20" y="27" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="22" fontWeight="700" fill="#ffffff" textAnchor="middle">H</text>
            </svg>


                      <View position="relative" display="inline-block">
                        <Button 
                          onClick={handleDropdownToggle}
                          aria-haspopup="true" 
                          aria-expanded={isDropdownOpen}
                          variation="primary"
                          size="small"
                          fontFamily={activePair.menu}
                        >
                          <span>{activePair.menu} (Active)</span>
                          <span style={{ 
                            marginLeft: '10px', 
                            display: 'inline-block',
                            transition: 'transform 0.2s', 
                            transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' 
                          }}>▼</span>
                        </Button>

            {isDropdownOpen && (
              <View 
                position="absolute"
                top="calc(100% + 5px)"
                left="0"
                /*zIndex="100"*/
                backgroundColor="var(--amplify-colors-background-primary)"
                border="1px solid var(--amplify-colors-border-secondary)"
                borderRadius="var(--amplify-radii-medium)"
                boxShadow="var(--amplify-shadows-large)"
                padding="0.5rem"
                minWidth="280px"
                onClick={(e) => e.stopPropagation()} // Stop menu closures on inside-clicks
              >
                <Flex direction="column" gap="4px">
                  {(Object.keys(pairings) as PairKey[]).map((key) => (
                    <View 
                      key={key} 
                      padding="8px 12px" 
                      borderRadius="var(--amplify-radii-small)"
                      style={{ cursor: 'pointer' }}
                    >
                      <CheckboxField
                        label={pairings[key].header}
                        name="font-pair"
                        value={key}
                        checked={activePairKey === key}
                        onChange={() => setActivePairKey(key)}
                        labelHidden={false}
                      />
                    </View>
                  ))}
                </Flex>
              </View>
            )}

            </View>

{/*              <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '4px' }}>
              <select 
                value={headerFont}
                onChange={(e) => setHeaderFont(e.target.value)}
                style={{ padding: '4px 8px', border: '1px solid #dee2e6', borderRadius: '4px', fontFamily: 'inherit', fontSize: '0.9rem', backgroundColor: '#fff', outline: 'none', width: '100%' }}
              >
                <option value="Montserrat">Montserrat Bold</option>
                <option value="Roboto">Roboto Bold</option>
                <option value="Merriweather">Merriweather Bold</option>
                <option value="Inter">Inter Bold</option>
                <option value="Raleway">Raleway Bold</option>
              </select>
            </div>  */}


          </div>

          {/* Text Font Cell */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#f1f5f9', padding: '10px 14px', borderRadius: '6px', border: '1px solid #dee2e6' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="48" height="48" style={{ flexShrink: 0 }}>
              <rect x="0" y="0" width="40" height="40" rx="8" fill="#94A3B8"/>
              <text x="20" y="27" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="22" fontWeight="700" fill="#ffffff" textAnchor="middle">T</text>
            </svg>


{/*             <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '4px' }}>
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
            </div> */}


          </div>
        </div>

        {/* ===================================================================
            DOCUMENT PREVIEW CANVAS 
            =================================================================== */}
        <div>


      <View as="header" padding="5rem 2rem">
        <Flex direction="column" gap="1.5rem" maxWidth="1100px" margin="0 auto" alignItems="flex-start">
          
          <Heading level={1} fontSize="3.5rem" fontWeight="800" fontFamily={activePair.header} lineHeight="1.1">
            {activePair.header2}
          </Heading>
          
          <Heading level={3} fontSize="1.25rem" color="var(--amplify-colors-font-tertiary)"  fontWeight="400" fontFamily={activePair.menu} lineHeight="1.7">
            {activePair.menu2}
          </Heading>
          </Flex>
          </View>

{/*           <h2 style={{ fontFamily: `'${headerFont}', sans-serif`, textAlign: 'left', fontSize: '1.5rem'}}>
            Parasite-cleaning method
          </h2>
          <p style={{ fontFamily: `'${textFont}', sans-serif`, textAlign: 'left', marginBottom: '16px', color: '#495057', lineHeight: 1.5 }}>
            Evolutionary psychologists studying great apes noted that primates spend hours grooming each other's fur to pick off ticks, lice, and dead skin. Human kissing originated roughly 21 million years ago as a final "suction" step in ancient ape grooming rituals. As early humans evolved and lost their thick body fur, the practical need for hours of grooming disappeared. However, the very last stage—the lip-to-skin touch and suction—remained behind as a vestigial shorthand to say, "I care about you."
          </p>
         
          <h2 style={{ fontFamily: `'${headerFont}', sans-serif`, textAlign: 'left', fontWeight: 700, color: '#0f172a', fontSize: '1.5rem' }}>
            Tetrachromats among us
          </h2>
          <p style={{ fontFamily: `'${textFont}', text-align: left, sans-serif`, textAlign: 'left',   color: '#495057', lineHeight: 1.5 }}>
            Rare humans called tetrachromats see a fourth primary color because a genetic mutation gives them a fourth type of cone cell in their retinas. While typical human vision combines red, green, and blue (RGB) inputs to perceive about 1 million colors, a true tetrachromat can process an extra dimension of light, allowing them to see up to 100 million distinct shades.
          </p> */}



        </div>
      </View>

    </div>

  );
}