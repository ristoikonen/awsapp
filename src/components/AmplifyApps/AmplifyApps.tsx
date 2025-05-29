import  { FC } from 'react';
import { 
  Card,   Flex,    Grid,    Heading,    Text,    Button, 
  View,    ThemeProvider  } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { AmplifyAppsWrapper } from './AmplifyApps.styled';

interface AmplifyAppsProps {}

const AmplifyApps: FC<AmplifyAppsProps> = () => {

   return(
   <AmplifyAppsWrapper data-testid="AmplifyApps">
      <ThemeProvider>
        <View padding="medium">
        {/* Header Section */}
        <Flex direction="column" alignItems="center" padding="large">
          <View maxWidth="1200px" width="100%">
            <Heading level={1} textAlign="center">
              <Text color="orange.60" fontWeight="extrabold">.NET Aspire</Text>
              <Text color="purple.80" fontWeight="extrabold">Semantic Kernel</Text>
              <Text color="blue.60" fontWeight="extrabold">React</Text>
            </Heading>
          </View>
        </Flex>

        {/* Cards Grid */}
        <Grid
          templateColumns={{ base: '1fr', medium: '1fr 1fr' }}
          gap="large"
          padding={{ base: 'medium', medium: 'large' }}
        >
          {/* Card 1 */}
          <Card
            variation="elevated"
            padding="large"
            borderRadius="large"
            backgroundColor="white"
          >
            <Flex direction="column" alignItems="center" gap="medium">
              <View color="orange.60">
                <svg width="80" height="80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 00-1.05-9.95l-.65-.18a7.001 7.001 0 00-13.62-2.73 4 4 0 00-2.73 4.62 4 4 0 00-4.62 2.73 7.001 7.001 0 002.73 13.62 4 4 0 004.62-2.73"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 10h.01M18 14h.01M18 18h.01"></path>
                </svg>
              </View>
              <Heading level={3} textAlign="center">AWS Serverless</Heading>
              <Text textAlign="center">AWS Amplify app on .NET Aspire host</Text>
              <Button
                variation="link"
                onClick={() => window.open('https://github.com/ristoikonen/Embed.AppHost/blob/master/LambdaReadme.md', '_blank')}
              >
                Serverless readme
              </Button>
            </Flex>
          </Card>

{/*                 <Card
            variation="elevated"
            padding="large"
            borderRadius="large"
            backgroundColor="white"
          >
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
              <Heading level={3} textAlign="center">Semantic Kernel</Heading>
              <Text textAlign="center">AI orchestration with Microsoft Semantic Kernel</Text>
              <Button
                variation="link"
                onClick={() => window.open('https://github.com/microsoft/semantic-kernel', '_blank')}
              >
                Learn more
              </Button>
            </Flex>
          </Card>  */}

          {/* Card 2 */}
          <Card
            variation="elevated"
            padding="large"
            borderRadius="large"
            backgroundColor="white"
          >
            <Flex direction="column" alignItems="center" gap="medium">
              <View color="orange.60">
                <svg width="80" height="80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.007 12.007 0 002.944 12c0 2.894.834 5.618 2.306 7.956A11.955 11.955 0 0112 21.056c2.894 0 5.618-.834 7.956-2.306A12.007 12.007 0 0021.056 12c0-2.894-.834-5.618-2.306-7.956z"></path>
                </svg>
              </View>
              <Heading level={3} textAlign="center">Future value calculator</Heading>
              <Text textAlign="center">AWS Lambda function on .NET Aspire host. First part of a financial Lambda functions.</Text>
              <Button
                variation="link"
                onClick={() => window.open('https://github.com/ristoikonen/Embed.AppHost/blob/master/FV.md', '_blank')}
              >
                FV readme 
              </Button>
            </Flex>
          </Card>
        </Grid>

        {/* GitHub Button */}
        <Flex justifyContent="center" padding="large">
          <Button
            variation="primary"
            backgroundColor="purple.80"
            color="white"
            size="large"
            borderRadius="full"
            onClick={() => window.open('https://github.com/ristoikonen/', '_blank')}
          >
            Explore Projects in GitHub
          </Button>
        </Flex>

        {/* Coming Soon Section */}
        <Flex direction="column" alignItems="center" padding="large" backgroundColor="neutral.10" borderRadius="medium" marginTop="large">
          
          {/* Progress Indicator */}
          <Flex direction="column" width="80%" maxWidth="500px" padding="medium">
            <Flex justifyContent="space-between" marginBottom="xs">
              
              <Text>Coming soon...</Text>
            </Flex>
            <View backgroundColor="neutral.20" height="8px" borderRadius="full">
              <View backgroundColor="purple.60" width="60%" height="100%" borderRadius="full" />
            </View>
            <Text>Semantic Kernel App -  60% complete</Text>
          </Flex>
        </Flex>

        {/* Footer */}
        <Flex justifyContent="center" padding="large" marginTop="large">
          <Text variation="tertiary" fontSize="small">
            &copy; 2025 Risto Ikonen. Site under more/less active development.
          </Text>
        </Flex>
      </View>
    </ThemeProvider>

   </AmplifyAppsWrapper>
)
};


export default AmplifyApps;
