import React, { useState, useEffect } from 'react';
import { View, Flex, Button, Heading, Text, CheckboxField } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; // Essential Amplify UI Global Reset
import { pairings, type PairKey } from '../data/fontData.ts';

import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as AmplifyUILink } from '@aws-amplify/ui-react';

//interface FontPairsPageDemoProps {}

export default function FontPairsPageDemo ({}) {

//export default function FontPairsPageDemo: React.FC<FontPairsPageDemoProps> = () => {
  const [activePairKey, setActivePairKey] = useState<PairKey>('pair3');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const activePair = pairings[activePairKey];

  // Dynamic Google Fonts CDN Injection Side-Effect
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

    <View minHeight="100vh" backgroundColor="var(--amplify-colors-background-secondary)">
      {/*
      <Card variation="elevated" marginBottom="2rem" borderRadius="12px" padding="2rem">
        <Flex direction="column" gap="xs">

              <div key={activePair.name}>
                <Heading 
                  level={2} 
                  style={{ fontFamily: activePair.header, fontWeight: 700, marginBottom: '0.5rem', color: '#111' }}
                >
                  {activePair.header2}: Header Preview
                </Heading>
                <Text 
                  style={{ fontFamily: activePair.menu, color: '#444', lineHeight: '1.6' }}
                >
                  This text mimics your content layout using the {activePair.menu2} font file selection. 
                  Click any card below to hot-swap your application's base typography scheme.
                </Text>
              </div>

        </Flex>
      </Card>
      */}

      
      {/* ===================================================================
          CONTROL PANEL DROPDOWN SECTION
          =================================================================== */}
      <View 
        backgroundColor="var(--amplify-colors-background-primary)" 
        padding="1rem 2rem" 
        /* borderBottom="1px solid var(--amplify-colors-border-primary)" */
        boxShadow="var(--amplify-shadows-small)"
      >
        <Flex direction="row" alignItems="center" maxWidth="1100px" margin="0 auto">
          <Text fontWeight="bold" fontSize="16px" color="var(--amplify-colors-font-secondary)">
            Select Active Pairing:
          </Text>
          
          <View position="relative" display="inline-block">
            <Button 
              onClick={handleDropdownToggle}
              aria-haspopup="true" 
              aria-expanded={isDropdownOpen}
              variation="primary"
              size="small"
              fontFamily={activePair.menu}
            >
              <span>{activePair.name} (Active)</span>
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
                        label={pairings[key].name}
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
        </Flex>
      </View>

      {/* ===================================================================
          WEBSITE NAVIGATION MENU PRIMITIVE
          =================================================================== 
      <View as="nav" backgroundColor="var(--amplify-colors-neutral-100)" padding="1rem 2rem">
        <Flex direction="row" justifyContent="space-between" alignItems="center" maxWidth="1100px" margin="0 auto">
          <Text fontFamily={activePair.header} color="var(--amplify-colors-font-inverse)" fontWeight="800" fontSize="18px" letterSpacing="1px">
            FONT PAIRING  
          </Text>
          <Flex as="ul" direction="row" gap="24px" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {['Montserrat', 'Merriweather', 'Poppins', 'Roboto', 'Gotham'].map((font, idx) => (
              <View as="li" key={idx}>
                <Text 
                  as="a" 
                  href="#" 
                  color="var(--amplify-colors-neutral-40)"
                  fontFamily={activePair.menu}
                  style={{ textDecoration: 'none', fontWeight: 500 }}
                >
                  {font}
                </Text>
              </View>
            ))}
          </Flex>
        </Flex>
      </View>
    */}

      {/* ===================================================================
          MAIN CONTENT HERO COMPONENT BLOCK
          =================================================================== */}
      <View as="header" padding="5rem 2rem">
        <Flex direction="column" gap="1.5rem" maxWidth="1100px" margin="0 auto" alignItems="flex-start">
          
          <Heading level={1} fontSize="3.5rem" fontWeight="800" fontFamily={activePair.header} lineHeight="1.1">
            {activePair.header2}
          </Heading>
          
          <Heading level={3} fontSize="1.25rem" color="var(--amplify-colors-font-tertiary)"  fontWeight="400" fontFamily={activePair.menu} lineHeight="1.7">
            {activePair.menu2}
          </Heading>

          <br/>

          <Heading level={2} fontSize="1.75rem" fontWeight="600" color="var(--amplify-colors-font-secondary)" fontFamily={activePair.header}>
            Mix curated Google Fonts API fonts.
          </Heading>
          
          <Text textAlign="left" fontSize="1.125rem" lineHeight="1.7" color="var(--amplify-colors-font-tertiary)" maxWidth="750px" fontFamily={activePair.menu}>
            This environment enables rapid switching between distinct design philosophies. 
            Fonts are selected by popularity.
            When you modify the active checkbox selection above, the DOM updates its CSS 
            custom properties instantly. Observe how the weight balance transitions 
            seamlessly between geometric structural styles and warm, high-performance 
            interface typography.
          </Text>

          <View 
            fontFamily={activePair.menu}
            padding="20px"
            border="2px dashed var(--amplify-colors-border-secondary)"
            borderRadius="var(--amplify-radii-medium)"
            minHeight="100px"
            width="100%"
            maxWidth="750px"
            backgroundColor="var(--amplify-colors-background-primary)"
            fontSize="1.25rem"
            color="var(--amplify-colors-font-primary)"
            style={{ outline: 'none' }}
            contentEditable={true} 
            suppressContentEditableWarning={true}
          >
            Test font here
          </View>

        </Flex>
      </View>

    </View>
    </div>
  );
};
