// , useState
import React, { useEffect } from 'react';

import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as AmplifyUILink } from '@aws-amplify/ui-react';
//import { Menu, MenuItem, Divider } from '@aws-amplify/ui-react';

//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Card, Flex, Grid, Heading, Text, Button, View, ThemeProvider, Badge, Image  as AmplifyUIImage } 
   from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// TODO: Update the path below to the correct location of your amplify data resource type
//import type { Schema } from '../../../amplify/data/resource'
//import { generateClient } from 'aws-amplify/data'

//import ImageGallery, { type CloudImage } from '../ImageGallery/ImageGallery'
//import ImageGallery from '../ImageGallery/ImageGallery.tsx';

//const client = generateClient<Schema>()

interface AmplifyAppsProps {}


const AmplifyApps: React.FC<AmplifyAppsProps> = () => {
  
  //const [cloudData, setCloudData] = useState<CloudImage[]>([]);
  //const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {

  /*
    const GetData = async () => {
      try {
        // Fetch data from the Amplify data resource
        const { data: funks } = await client.models.Funks.list();
        console.log('Fetched Funks:', funks);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    GetData()
  */

  }, [])
  
   return(
      <ThemeProvider>

{/*         <View>
          <Menu
            menuAlign="start"
            size="small"
          >

            <MenuItem>
              <AmplifyUILink as={ReactRouterLink} to="/gallery">
                Gallery
              </AmplifyUILink>
            </MenuItem>
            <MenuItem>
              <AmplifyUILink as={ReactRouterLink} to="/fonts">
                Fonts
              </AmplifyUILink>
            </MenuItem>
            <Divider />
            <MenuItem isDisabled >
              <AmplifyUILink as={ReactRouterLink} to="/">
                Home
              </AmplifyUILink>
            </MenuItem>
          </Menu>
        </View> */}

        {/* Giga font header section */}

        <View padding="medium">
        <Flex direction="column" alignItems="center" padding="large">
          <View maxWidth="1200px" width="100%">
            <Heading level={2} textAlign="center">
              <Text color="orange.60" fontWeight="extrabold">.NET Aspire</Text>
              <Text color="purple.80" fontWeight="extrabold">Microsoft Agent Framework</Text>
              <Text color="blue.60" fontWeight="extrabold">React</Text>
              <Text color="red.60" fontWeight="extrabold">AWS Amplify</Text>
            </Heading>
          </View>
        </Flex>

        <Flex direction="column" alignItems="center" padding="normal">
          <View maxWidth="1200px" width="100%">
            <Heading level={4} textAlign="center">
              <Text color="gray" fontWeight={300} >Click projects icon to access it's GitHub repo</Text>
            </Heading>
          </View>
        </Flex>


        {/* Card Grid starts here*/}

        <Grid
          templateColumns={{ base: '1fr', medium: '1fr 1fr' }}
          gap="large"
          padding={{ base: 'medium', medium: 'large' }}
        >

           {/* AWS Serverless */}
          <Card
            variation="elevated"
            padding="large"
            borderRadius="large"
            backgroundColor="white"
          >
            <Flex direction="row" alignItems="left" gap="small">
              <Badge variation="success">AWS</Badge>
              <Badge variation="success">.NET Aspire</Badge>
              <Badge variation="success">Docker</Badge>
            </Flex>
            <br/>
            <Flex direction="column" alignItems="center" gap="medium">
              <Button
                variation="link"
                onClick={() => window.open('https://github.com/ristoikonen/Embed.AppHost/blob/master/LambdaReadme.md', '_blank')}
              >
                <View color="orange.60">
                  <svg width="80" height="80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 00-1.05-9.95l-.65-.18a7.001 7.001 0 00-13.62-2.73 4 4 0 00-2.73 4.62 4 4 0 00-4.62 2.73 7.001 7.001 0 002.73 13.62 4 4 0 004.62-2.73"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 10h.01M18 14h.01M18 18h.01"></path>
                  </svg>
                </View>
              </Button>
              <Heading level={3} textAlign="center">AWS Serverless</Heading>
              <Text textAlign="center">
                AWS Amplify application on .NET Aspire host
              </Text>
            </Flex>
          </Card>

        {/* MS Agent */}
        <Card
            variation="elevated"
            padding="large"
            borderRadius="large"
            backgroundColor="white"
          >
            <Flex direction="row" alignItems="left" gap="small">
              <Badge variation="success">AI</Badge>
              <Badge variation="success">Ollama</Badge>
              <Badge variation="success">Process Framework</Badge>
            </Flex>
            <br/>
            <Flex direction="column" alignItems="center" gap="medium">
              <Button
                variation="link"
                onClick={() => window.open('https://github.com/ristoikonen/KernelProcess', '_blank')}
              >
                <View color="purple.80">
                  <svg width="80" height="80" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="8" />
                    <path 
                      d="M100 40 L150 70 L150 130 L100 160 L50 130 L50 70 Z" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="6" 
                    />
                    <line x1="100" y1="40" x2="100" y2="160" stroke="currentColor" strokeWidth="4" />
                    <line x1="50" y1="70" x2="150" y2="130" stroke="currentColor" strokeWidth="4" />
                    <line x1="50" y1="130" x2="150" y2="70" stroke="currentColor" strokeWidth="4" />
                    <circle cx="100" cy="40" r="8" fill="currentColor" />
                    <circle cx="150" cy="70" r="8" fill="currentColor" />
                    <circle cx="150" cy="130" r="8" fill="currentColor" />
                    <circle cx="100" cy="160" r="8" fill="currentColor" />
                    <circle cx="50" cy="130" r="8" fill="currentColor" />
                    <circle cx="50" cy="70" r="8" fill="currentColor" />
                    <circle cx="100" cy="100" r="10" fill="currentColor" />
                  </svg>
                </View>
              </Button>
              <Heading level={3} textAlign="center">MS Agent Framework</Heading>
              <Text textAlign="center">AI orchestration with Microsoft Agent Framework</Text>
            </Flex>
          </Card>  


          {/* FV */}
          <Card
            variation="elevated"
            padding="large"
            borderRadius="large"
            backgroundColor="white"
          >
            <Flex direction="row" alignItems="left" gap="small">
              <Badge variation="success">AWS</Badge>
              <Badge variation="success">.NET Aspire</Badge>
              <Badge variation="success">Serverless</Badge>
            </Flex>
            <br/>
            <Flex direction="column" alignItems="center" gap="medium">
              <Button
                variation="link"
                onClick={() => window.open('https://github.com/ristoikonen/Embed.AppHost/blob/master/FV.md', '_blank')}
              >
                <View color="orange.60">
                  <svg width="80" height="80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.007 12.007 0 002.944 12c0 2.894.834 5.618 2.306 7.956A11.955 11.955 0 0112 21.056c2.894 0 5.618-.834 7.956-2.306A12.007 12.007 0 0021.056 12c0-2.894-.834-5.618-2.306-7.956z"></path>
                  </svg>
                </View>
              </Button>
              <Heading level={3} textAlign="center">Future value calculator</Heading>
              <Text textAlign="center">AWS Lambda financial functions hosted on .NET Aspire. Functions exposed through Amazon API Gateway.</Text>
            </Flex>
          </Card>

          {/* PixMapper */}
          <Card
            variation="elevated"
            padding="large"
            borderRadius="large"
            backgroundColor="white"
          >
            <Flex direction="row" alignItems="left" gap="small">
              <Badge variation="success">C#</Badge>
              <Badge variation="success">Steganography</Badge>
            </Flex>
            <br/>
            <Flex direction="column" alignItems="center" gap="medium">
              <Button
                variation="link"
                onClick={() => window.open('https://github.com/ristoikonen/PixMapper', '_blank')}
                >
                  <View color="orange.60">
                    <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M3 3h8v8H3V3zm6 6V5H5v4h4zm9 4h-2v3h-3v2h3v3h2v-3h3v-2h-3v-3zM15 3h6v8h-8V3h2zm4 6V5h-4v4h4zM5 13h6v8H3v-8h2zm4 6v-4H5v4h4z" fill="currentColor"/>
                  </svg>
                  </View>
              </Button>
              <Heading level={3} textAlign="center">Pixel Mapper</Heading>
              <Text textAlign="center">Embed hidden text into an image by encoding ASCII bit values into RGBA pixels. Encoding readable using image editor</Text>
                <Button
                  variation="link"
                  colorTheme="info"
                  onClick={() => window.open('https://www.nuget.org/packages/PixMapper/1.0.2', '_blank')}
                >
                  PixMapper NuGet package
                </Button>
            </Flex>
          </Card>
          
          {/* MailTmAPI */}
          <Card
            variation="elevated"
            padding="large"
            borderRadius="large"
            backgroundColor="white"
          >
            <Flex direction="row" alignItems="left" gap="small">
              <Badge variation="success">.NET Core 9.0</Badge>
              <Badge variation="success">OpenAPI</Badge>
              <Badge variation="success">Docker</Badge>
            </Flex>
            <br/>
            <Flex direction="column" alignItems="center" gap="medium">
              <Button
                variation="link"
                onClick={() => window.open('https://github.com/ristoikonen/MailTmAPI', '_blank')}
              >
                <View color="orange.60">
                  <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M4 2h18v16H6v2H4v-2h2v-2h14V4H4v18H2V2h2zm5 7H7v2h2V9zm2 0h2v2h-2V9zm6 0h-2v2h2V9z" fill="currentColor"/>
                  </svg>
                </View>
              </Button>
              <Heading level={3} textAlign="center">Free email verifier API</Heading>
              <Text textAlign="center">
                Generates Mail Tm temp email address, and polls inbox via API. Max 8 queries per second.
              </Text>
            </Flex>
          </Card>

          {/* Coin */}
          <Card
            variation="elevated"
            padding="large"
            borderRadius="large"
            backgroundColor="white"
          >
            <Flex direction="row" alignItems="left" gap="small">
              <Badge variation="success">React</Badge>
              <Badge variation="success">Vercel Analytics</Badge>
              <Badge variation="success">API Client</Badge>
            </Flex>
            <br/>
            <Flex direction="column" alignItems="center" gap="medium">
              <Button
                variation="link"
                onClick={() => window.open('https://github.com/ristoikonen/ReactCoinloreAPI', '_blank')}
              >
                <View color="orange.60">
                  <svg  width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M6 2h12v2H6V2zM4 6V4h2v2H4zm0 12V6H2v12h2zm2 2v-2H4v2h2zm12 0v2H6v-2h12zm2-2v2h-2v-2h2zm0-12h2v12h-2V6zm0 0V4h-2v2h2zm-9-1h2v2h3v2h-6v2h6v6h-3v2h-2v-2H8v-2h6v-2H8V7h3V5z" fill="currentColor"/>
                  </svg>
                </View>
              </Button>
              <Heading level={3} textAlign="center">Crypto Ticker</Heading>
              <Text textAlign="center">Crypto currency ticker tape, React component<br/>HTTP client of Coinlore API for live market access. </Text>
              <Button
                  variation="link"
                  colorTheme="info"
                  onClick={() => window.open('https://coin.ristoikonen.com/', '_blank')}
                >
                  Live Coin Ticker site
              </Button>
            </Flex>
          </Card>

          <Card
            variation="elevated"
            padding="large"
            borderRadius="large"
            backgroundColor="white"
          >
            <Flex direction="row" alignItems="left" gap="small">
              <Badge variation="success">Google CDN</Badge>
              <Badge variation="success">React</Badge>
            </Flex>
            <br/>
            <Flex direction="column" alignItems="center" gap="medium">
              <Button
                variation="link"
                onClick={() => window.open('https://github.com/ristoikonen/awsapp', '_blank')}
              >
                <View color="purple.80">
                  <svg version="1.0" width="221.25pt" height="193.5pt" viewBox="0 0 221.25 193.5" fill="#BF8040" preserveAspectRatio="xMidYMid meet"  xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(0,193.5)scale(.075,.075)">
                      <path id="path1" d="M 2205 -2100 l -55 0 2 252 3 253 55 0 55 0 3 -230 c 1 -127 0 -240 -3 -253 -5 -19 -12 -22 -60 -22 z M 563 -2006 c -38 -2 -80 0 -94 5 -14 4 -36 14 -50 21 -13 7 -41 29 -62 49 -28 26 -43 54 -58 103 -18 57 -19 75 -10 118 6 28 20 67 30 88 11 20 32 49 48 64 15 14 50 38 76 52 26 14 68 28 92 31 28 5 62 1 97 -9 30 -8 72 -31 94 -50 24 -20 50 -57 63 -86 16 -36 21 -66 19 -103 l -3 -52 -143 -3 -143 -3 3 48 3 48 73 9 c 57 8 72 13 70 25 -2 8 -18 26 -37 38 -23 16 -49 23 -80 23 -27 0 -58 -8 -77 -19 -17 -10 -38 -34 -47 -54 -9 -19 -17 -50 -17 -68 0 -18 10 -53 21 -77 12 -24 36 -52 53 -63 19 -11 49 -19 77 -19 36 0 54 6 84 30 31 25 47 30 91 30 40 0 54 -4 54 -14 0 -8 -15 -36 -33 -62 -22 -31 -51 -57 -80 -73 -32 -16 -68 -25 -114 -27 z M 1036 -1980 c -22 0 -59 9 -81 19 -23 10 -53 32 -68 50 -14 17 -29 47 -33 67 -3 19 -4 57 -2 84 3 31 15 65 32 91 19 27 44 48 79 65 29 13 65 24 82 24 17 0 47 -5 67 -11 21 -5 53 -26 72 -45 22 -22 38 -53 46 -83 8 -34 8 -60 0 -96 -6 -28 -18 -60 -25 -72 -8 -12 -25 -32 -37 -43 -13 -12 -38 -28 -57 -36 -18 -8 -52 -14 -75 -14 z m 22 111 c 7 -1 24 10 37 24 14 13 25 36 25 50 0 14 -7 39 -15 54 -8 16 -22 31 -30 35 -9 3 -29 6 -44 6 -15 0 -36 -9 -45 -19 -10 -11 -18 -36 -18 -56 0 -21 8 -45 18 -57 11 -11 28 -24 39 -29 11 -4 26 -8 33 -8 z M 1490 -1974 c -27 -3 -63 0 -89 9 -24 7 -54 24 -67 36 -13 12 -31 41 -40 65 -11 29 -15 62 -12 98 3 39 13 67 33 96 16 23 47 51 69 63 28 14 60 21 102 22 50 0 68 -5 102 -27 23 -16 49 -43 59 -60 11 -21 17 -55 17 -93 0 -39 -6 -72 -18 -95 -10 -19 -28 -46 -40 -58 -11 -13 -32 -30 -46 -37 -14 -7 -45 -16 -70 -19 z m -12 105 c 7 -1 23 4 35 10 12 7 25 17 29 23 4 6 8 28 8 49 0 29 -7 46 -29 68 -16 16 -40 29 -53 29 -13 0 -34 -7 -46 -16 -17 -12 -22 -25 -22 -60 0 -25 5 -54 11 -65 6 -11 20 -24 32 -29 12 -5 28 -9 35 -9 z M 1875 -1979 c -17 0 -48 9 -71 19 -23 10 -50 31 -61 46 -12 16 -26 54 -32 84 -9 45 -9 64 4 107 11 38 26 61 57 88 24 20 53 38 65 41 13 4 40 4 60 2 21 -3 46 -8 55 -12 14 -7 18 -3 18 16 0 14 -9 33 -20 43 -12 11 -36 19 -55 19 -22 0 -43 -8 -58 -22 -17 -16 -36 -22 -70 -22 -43 0 -47 2 -47 25 0 13 15 41 32 61 18 20 47 43 65 50 18 8 63 14 101 14 55 0 76 -5 102 -23 19 -12 43 -38 54 -57 19 -32 21 -51 21 -242 0 -148 -3 -210 -12 -219 -7 -7 -31 -12 -55 -12 -32 0 -44 4 -46 16 -2 10 -5 17 -7 17 -3 0 -19 -9 -37 -20 -18 -11 -46 -20 -63 -19 z m 33 110 c 7 -1 22 3 32 9 10 5 23 25 29 43 7 19 9 43 5 53 -4 10 -16 29 -27 42 -13 14 -32 22 -52 22 -18 0 -39 -8 -47 -18 -9 -9 -19 -27 -22 -39 -4 -12 0 -38 8 -57 8 -20 25 -40 38 -46 13 -5 29 -9 36 -9 z M 2500 -1980 c -33 0 -69 7 -89 18 -19 9 -48 34 -65 55 -26 32 -31 49 -34 106 -3 55 0 76 17 110 14 26 39 53 67 70 27 18 66 31 99 36 41 5 63 2 90 -10 19 -10 49 -33 66 -52 18 -21 29 -44 27 -56 -3 -19 -10 -22 -64 -25 -50 -2 -63 1 -79 18 -10 11 -28 20 -41 20 -12 0 -30 -7 -39 -16 -9 -9 -14 -21 -12 -28 2 -7 44 -12 117 -14 63 -1 119 -7 124 -12 6 -6 5 -28 -2 -62 -7 -28 -24 -67 -38 -86 -15 -18 -40 -42 -58 -53 -20 -13 -49 -19 -86 -19 z m 6 110 c 16 0 35 5 42 12 7 7 12 16 12 20 0 4 -27 8 -60 8 -33 0 -60 -4 -60 -10 0 -5 8 -14 18 -19 9 -6 31 -11 48 -11 z M 1125 -1540 c -32 0 -47 5 -53 18 -5 9 -17 42 -27 72 -10 30 -25 68 -35 85 -10 17 -21 46 -25 65 -4 19 -16 66 -28 104 -16 51 -28 70 -44 77 -13 5 -23 15 -23 23 0 7 6 19 14 25 8 6 36 14 64 18 28 3 62 3 76 -1 14 -3 26 -13 26 -21 0 -8 -9 -24 -20 -35 -16 -16 -18 -25 -10 -45 9 -23 14 -25 77 -25 63 0 69 2 80 25 10 22 8 27 -8 36 -13 6 -19 18 -17 32 2 13 13 24 28 28 14 4 51 7 82 8 31 1 63 -2 72 -5 9 -3 16 -14 16 -24 0 -10 -12 -27 -26 -37 -20 -15 -38 -56 -84 -189 -32 -94 -65 -185 -74 -202 -15 -29 -21 -32 -61 -32 z m -5 147 c 4 4 17 36 28 70 11 34 18 64 14 67 -3 3 -22 6 -43 6 -21 0 -40 -3 -42 -8 -3 -4 5 -38 16 -75 11 -37 23 -64 27 -60 z M 1587 -1538 c -29 1 -85 4 -125 5 -57 3 -72 7 -72 19 0 9 11 29 24 45 24 28 25 34 25 185 0 155 0 155 -25 164 -14 6 -24 17 -24 29 0 11 9 25 19 31 11 5 60 10 108 10 54 0 94 -5 101 -12 7 -7 8 -17 2 -28 -5 -10 -23 -23 -40 -28 -27 -10 -30 -16 -30 -50 0 -33 4 -41 22 -46 13 -3 38 -6 56 -6 18 0 47 -6 65 -14 18 -7 43 -25 56 -40 18 -19 25 -40 28 -78 4 -51 3 -55 -36 -91 -22 -22 -43 -48 -46 -58 -4 -11 -18 -24 -32 -30 -13 -5 -48 -8 -76 -7 z m 7 68 c 19 0 41 7 49 15 9 8 18 27 22 43 3 15 0 46 -7 67 -9 26 -23 44 -41 53 -15 7 -36 11 -46 7 -11 -3 -21 -19 -25 -37 -3 -17 -6 -45 -6 -64 0 -18 4 -44 10 -58 8 -21 16 -26 44 -26 z M 1900 -1400 l -50 0 0 139 c 0 137 0 140 -22 143 -17 2 -23 10 -23 28 0 17 7 26 25 31 14 4 54 7 90 8 37 1 71 -4 77 -10 6 -6 9 -19 6 -28 -3 -9 -12 -21 -20 -27 -9 -8 -15 -46 -19 -125 -3 -63 -7 -124 -10 -137 -4 -19 -11 -22 -54 -22 z M 1030 -999 c -14 1 -40 5 -59 9 -18 4 -45 17 -59 27 -14 11 -39 35 -55 55 -20 25 -31 52 -36 92 -4 31 -4 81 0 111 4 33 18 71 36 97 19 29 46 52 82 71 38 18 70 27 104 27 27 0 64 -7 81 -15 18 -9 47 -31 65 -49 21 -22 37 -53 48 -92 10 -39 13 -77 9 -113 -4 -30 -15 -73 -25 -95 -10 -23 -34 -55 -54 -73 -20 -18 -53 -37 -74 -42 -21 -6 -49 -10 -63 -10 z m 15 70 c 11 0 25 3 32 7 7 4 19 24 28 45 9 23 15 67 15 119 0 62 -5 92 -21 125 -13 27 -29 45 -44 49 -13 3 -33 4 -45 2 -13 -2 -32 -16 -44 -31 -18 -24 -21 -43 -21 -125 0 -73 4 -106 18 -133 10 -20 28 -41 40 -47 12 -6 31 -11 42 -11 z M 619 -990 c -162 0 -169 1 -169 20 0 11 9 25 20 32 19 12 20 24 20 181 0 160 -1 169 -20 174 -11 3 -20 13 -20 22 0 9 5 22 12 29 8 8 49 12 119 12 59 0 110 -3 112 -7 3 -5 1 -18 -4 -31 -5 -14 -17 -22 -31 -22 -13 0 -29 -4 -36 -9 -9 -5 -12 -26 -10 -67 3 -53 5 -59 26 -62 15 -2 32 6 48 23 13 14 32 25 42 23 14 -3 18 -16 20 -72 2 -42 -2 -73 -9 -82 -7 -8 -22 -14 -33 -12 -13 2 -22 12 -24 26 -3 18 -10 22 -38 22 l -34 0 0 -58 c 0 -32 5 -63 12 -70 7 -7 29 -12 49 -12 32 0 40 5 58 35 15 25 27 35 46 35 23 0 25 -3 25 -49 0 -27 -3 -56 -6 -65 -5 -14 -30 -16 -175 -16 z M 1334 -990 c -67 0 -74 2 -74 20 0 11 11 27 25 36 l 25 17 -2 166 c -3 164 -3 166 -26 169 -13 2 -22 10 -22 21 0 9 5 22 12 29 7 7 43 12 90 12 65 0 78 -3 78 -16 0 -9 -13 -28 -30 -42 -29 -26 -30 -29 -29 -117 0 -49 4 -98 8 -109 6 -16 11 -14 37 21 16 23 58 86 94 141 36 55 75 105 87 112 12 7 33 12 47 12 14 0 27 6 28 12 1 6 4 -80 7 -191 6 -188 7 -203 27 -225 17 -17 20 -28 13 -46 -8 -20 -15 -22 -84 -22 -66 0 -75 2 -75 18 0 10 11 28 25 40 24 21 25 27 25 127 0 58 -3 105 -8 104 -4 0 -41 -53 -82 -117 -41 -64 -86 -129 -98 -144 -22 -26 -29 -28 -98 -28 z M 1965 -990 l -193 0 -4 82 c -2 58 1 85 10 95 7 7 22 13 32 13 15 0 23 -14 36 -59 13 -47 21 -60 39 -64 17 -3 25 1 29 17 3 12 6 87 6 167 0 125 -2 148 -16 153 -9 3 -24 6 -35 6 -12 0 -19 7 -19 19 0 10 6 24 14 30 9 8 52 11 127 9 104 -3 114 -5 114 -22 0 -10 -9 -23 -20 -29 -11 -6 -26 -13 -33 -16 -8 -4 -15 -27 -18 -56 -2 -28 0 -100 4 -160 7 -108 8 -110 31 -110 20 0 27 8 40 49 9 27 23 54 32 59 9 6 24 7 34 3 16 -6 17 -15 11 -83 -3 -42 -11 -82 -17 -89 -9 -11 -54 -14 -204 -14 z M 2400 -989 c -42 0 -89 6 -107 14 -18 8 -42 29 -53 47 -15 24 -20 44 -16 71 2 21 15 52 29 70 14 18 54 48 89 67 34 18 71 40 80 48 10 8 18 27 18 42 0 15 -6 33 -14 39 -8 7 -34 11 -58 9 -40 -3 -44 -6 -62 -46 -16 -34 -24 -42 -46 -42 -25 0 -28 4 -34 52 -6 47 -5 55 14 70 12 10 38 22 58 28 20 5 67 10 104 10 56 0 71 -4 96 -25 16 -14 37 -43 46 -65 9 -24 13 -52 10 -72 -4 -18 -13 -43 -20 -56 -8 -12 -31 -33 -52 -46 -20 -13 -48 -26 -62 -31 -14 -4 -37 -19 -52 -33 -16 -14 -28 -34 -28 -43 0 -10 10 -25 22 -33 12 -9 35 -16 49 -16 23 0 30 6 39 36 7 20 21 39 34 44 11 4 24 5 29 1 4 -4 8 -32 10 -61 2 -48 -1 -55 -23 -67 -14 -7 -58 -13 -100 -12 z " />
                    </g>
                  </svg>

                </View>
              </Button>
              <Heading level={3} textAlign="center">Google API Fonts</Heading>
              <Text textAlign="center">Test Google CDN fonts and pairings.<br/>Load eight popular fonts using provided Google CDN links.<br/>AWS Amplify build workflow diagram.</Text>
              <Button
                  variation="link"
                  colorTheme="info"
                  onClick={() => window.open('https://www.ristoikonen.com/fontpairspagedemo', '_blank')}
                >
                  Play with Font pairings
              </Button>
            </Flex>
          </Card>


        </Grid>

        {/* GitHub Repos Button */}
        <Flex justifyContent="center" padding="large">
          <Button
            variation="primary"
            backgroundColor="purple.80"
            color="white"
            size="large"
            borderRadius="full"
            onClick={() => window.open('https://github.com/ristoikonen?tab=repositories', '_blank')}
          >
            Explore my Repos in GitHub
          </Button>
        </Flex>

{/*   'Coming Soon' section with Progress Indicator for future projects  
        <Flex direction="column" alignItems="center" padding="large" backgroundColor="neutral.10" borderRadius="medium" marginTop="large">
          <Flex direction="column" width="80%" maxWidth="500px" padding="medium">
            <Flex justifyContent="space-between" marginBottom="xs">
              <Text></Text>
            </Flex>
            <View backgroundColor="neutral.20" height="8px" borderRadius="full">
              <View backgroundColor="purple.60" width="40%" height="100%" borderRadius="full" />
            </View>
            <Text></Text>
          </Flex>
        </Flex>
 */}

        <br/>
        <AmplifyUILink as={ReactRouterLink} to="/fontpairspagedemo">
          <AmplifyUIImage src="src/assets/mixlogoS.png" alt="fontlogo"/>
        </AmplifyUILink>
        <br/>

          <View textAlign="center" padding="large">
            <AmplifyUILink as={ReactRouterLink} to="/fonts">
              Fonts
            </AmplifyUILink>
            <br/>
            <AmplifyUILink as={ReactRouterLink} to="/gallery">
              Image Gallery - In dev
            </AmplifyUILink>
            <AmplifyUILink as={ReactRouterLink} to="/fontpairspagedemo">
              Font Pairs Page Demo
            </AmplifyUILink>
          </View>

        {/* Footer */}
        <Flex justifyContent="center" padding="large" marginTop="large">
          <Text variation="tertiary" fontSize="small">
            Risto Ikonen 2026&copy;. Site under active development.
          </Text>
        </Flex>

{/*         <View width="4rem">
          <Menu
            menuAlign="center"
            size="large"
          >
            <MenuItem>
              <AmplifyUILink as={ReactRouterLink} to="/gallery">
                Gallery
              </AmplifyUILink>
            </MenuItem>
            <Divider />
            <MenuItem isDisabled >
              <AmplifyUILink as={ReactRouterLink} to="/">
                Home
              </AmplifyUILink>
            </MenuItem>
          </Menu>
        </View> */}

        
      </View>
    </ThemeProvider>

   )
};

export default AmplifyApps;
