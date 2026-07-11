import React, { useEffect } from 'react';
import { Card, Flex, Grid, Heading, Text, Button, View, ThemeProvider, Badge, Link  } 
   from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// TODO: Update the path below to the correct location of your amplify data resource type
import type { Schema } from '../../../amplify/data/resource'
import { generateClient } from 'aws-amplify/data'

const client = generateClient<Schema>()

interface AmplifyAppsProps {}

const AmplifyApps: React.FC<AmplifyAppsProps> = () => {

  //Error: Client could not be generated
  useEffect(() => {
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
  }, [])

  
   return(

      <ThemeProvider>
        <View padding="medium">

        {/* Giga font header section */}
        
        <Flex direction="column" alignItems="center" padding="large">
          <View maxWidth="1200px" width="100%">
            <Heading level={1} textAlign="center">
              <Text color="orange.60" fontWeight="extrabold">.NET Aspire</Text>
              <Text color="purple.80" fontWeight="extrabold">Microsoft Agent Framework</Text>
              <Text color="blue.60" fontWeight="extrabold">React</Text>
              <Text color="red.60" fontWeight="extrabold">AWS Amplify</Text>
            </Heading>
          </View>
        </Flex>

        {/* Card Grid starts here*/}

        <Grid
          templateColumns={{ base: '1fr', medium: '1fr 1fr' }}
          gap="large"
          padding={{ base: 'medium', medium: 'large' }}
        >
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
              <View color="orange.60">
                <svg width="80" height="80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 00-1.05-9.95l-.65-.18a7.001 7.001 0 00-13.62-2.73 4 4 0 00-2.73 4.62 4 4 0 00-4.62 2.73 7.001 7.001 0 002.73 13.62 4 4 0 004.62-2.73"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 10h.01M18 14h.01M18 18h.01"></path>
                </svg>
              </View>
              <Heading level={3} textAlign="center">AWS Serverless</Heading>
              <Text textAlign="center">
                AWS Amplify application on .NET Aspire host
              </Text>
              <Button
                variation="link"
                onClick={() => window.open('https://github.com/ristoikonen/Embed.AppHost/blob/master/LambdaReadme.md', '_blank')}
              >
                Serverless readme
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
              <Badge variation="success">AI</Badge>
              <Badge variation="success">Ollama</Badge>
              <Badge variation="success">Process Framework</Badge>
            </Flex>
            <br/>
            <Flex direction="column" alignItems="center" gap="medium">
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
              <Heading level={3} textAlign="center">MS Agent Framework</Heading>
              <Text textAlign="center">AI orchestration with Microsoft Agent Framework</Text>
              <Button
                variation="link"
                onClick={() => window.open('https://github.com/ristoikonen/KernelProcess', '_blank')}
              >
                Learn more
              </Button>
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
              <View color="orange.60">
                <svg width="80" height="80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.007 12.007 0 002.944 12c0 2.894.834 5.618 2.306 7.956A11.955 11.955 0 0112 21.056c2.894 0 5.618-.834 7.956-2.306A12.007 12.007 0 0021.056 12c0-2.894-.834-5.618-2.306-7.956z"></path>
                </svg>
              </View>
              <Heading level={3} textAlign="center">Future value calculator</Heading>
              <Text textAlign="center">AWS Lambda function on .NET Aspire host. Financial function exposed through Amazon API Gateway.</Text>
              <Button
                variation="link"
                onClick={() => window.open('https://github.com/ristoikonen/Embed.AppHost/blob/master/FV.md', '_blank')}
              >
                FV readme 
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
              <Badge variation="success">C#</Badge>
              <Badge variation="success">Steganography</Badge>
            </Flex>
            <br/>
            <Flex direction="column" alignItems="center" gap="medium">
              <View color="orange.60">
                <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M3 3h8v8H3V3zm6 6V5H5v4h4zm9 4h-2v3h-3v2h3v3h2v-3h3v-2h-3v-3zM15 3h6v8h-8V3h2zm4 6V5h-4v4h4zM5 13h6v8H3v-8h2zm4 6v-4H5v4h4z" fill="currentColor"/>
              </svg>
              </View>
              <Heading level={3} textAlign="center">Pixel Mapper</Heading>
              <Text textAlign="center">Embed ASCII data into a Bitmap by encoding bit values into RGBA pixels. Encoding readable using image editor</Text>
              <Button
                variation="link"
                onClick={() => window.open('https://github.com/ristoikonen/PixMapper', '_blank')}
              >
                Pixel Mapper repo 
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
              <Badge variation="success">.NET Core 9.0</Badge>
              <Badge variation="success">OpenAPI</Badge>
              <Badge variation="success">Docker</Badge>
            </Flex>
            <br/>
            <Flex direction="column" alignItems="center" gap="medium">
              <View color="orange.60">
                <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M4 2h18v16H6v2H4v-2h2v-2h14V4H4v18H2V2h2zm5 7H7v2h2V9zm2 0h2v2h-2V9zm6 0h-2v2h2V9z" fill="currentColor"/>
                </svg>
              </View>
              <Heading level={3} textAlign="center">Free email verifier API</Heading>
              <Text textAlign="center">Generates temp email address, and polls Mail tm's inbox. Max 8 queries per second.</Text>
              <Button
                variation="link"
                onClick={() => window.open('https://github.com/ristoikonen/MailTmAPI', '_blank')}
              >
                 Mail API repo
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
              <Badge variation="success">React</Badge>
              <Badge variation="success">Vercel Analytics</Badge>
              <Badge variation="success">API Client</Badge>
            </Flex>
            <br/>
            <Flex direction="column" alignItems="center" gap="medium">
              <View color="orange.60">
                <svg  width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M6 2h12v2H6V2zM4 6V4h2v2H4zm0 12V6H2v12h2zm2 2v-2H4v2h2zm12 0v2H6v-2h12zm2-2v2h-2v-2h2zm0-12h2v12h-2V6zm0 0V4h-2v2h2zm-9-1h2v2h3v2h-6v2h6v6h-3v2h-2v-2H8v-2h6v-2H8V7h3V5z" fill="currentColor"/>
                </svg>
              </View>
              <Heading level={3} textAlign="center">Crypto Ticker</Heading>
              <Text textAlign="center">Live Crypto Ticker, React component<br/>HTTP client of Coinlore API for live market access. </Text>
              <Heading level={5}>
                <Link href="https://coin.ristoikonen.com/" color="#950495" isExternal={true} >
                    Access Coin Ticker 
                 </Link>
              </Heading>
              <Button
                variation="link"
                onClick={() => window.open('https://github.com/ristoikonen/ReactCoinloreAPI', '_blank')}
              >
                 Coin Ticker readme
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

        {/* Footer */}
        <Flex justifyContent="center" padding="large" marginTop="large">
          <Text variation="tertiary" fontSize="small">
            Risto Ikonen 2026&copy;. Site under active development.
          </Text>
        </Flex>
      </View>
    </ThemeProvider>

   )
};

export default AmplifyApps;
