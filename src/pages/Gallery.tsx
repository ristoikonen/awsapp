//React,
import  { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
// ImageGallery,
import  { type CloudImage } from '../components/ImageGallery/ImageGallery';
//import { Link as ReactRouterLink } from 'react-router-dom';
//import { Link as AmplifyUILink } from '@aws-amplify/ui-react';

// Menu, MenuItem, Divider 
import { ThemeProvider, Grid, Card, Image, View } 
   from '@aws-amplify/ui-react';



export default function Gallery() {
  const [cloudData, setCloudData] = useState<CloudImage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  if (loading) {
    return (
      <p>
        TODO: loading msg
      </p>
    );
  }

  useEffect(() => {
    const fetchCloudImages = async () => {
      try {
        

        // Replace with your real backend fetch call: fetch('/api/images')
        const mockCloudData: CloudImage[] = [
          {
            id: 'cloud-001',
            url: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/174-free-google-maps-pointer.png',
            caption: 'Google Maps Pointer',
            uploadedBy: 'Auto',
            createdAt: '2026-07-10T14:32:00Z',
            gmurl: ''
          },
          {
            id: 'cloud-002',
            url: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg',
            caption: 'Google Maps icon',
            uploadedBy: 'Auto',
            createdAt: '2026-07-12T09:15:00Z',
            gmurl: ''
          }
        ];
        
        setCloudData(mockCloudData);
      } catch (error) {
        console.error("Failed fetching cloud assets", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCloudImages();
  }, []);

  return (
    <ThemeProvider>
      <View width="4rem">
        <Grid
          templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
          gap="1rem"
          padding="1rem"
        >
          {cloudData.map((image) => (
          <Card 
            key={image.id} 
            padding="0" 
            borderRadius="medium"
            style={{ cursor: 'pointer', overflow: 'hidden' }}
            //onClick={() => onImageClick(image)} 
          >
            <View height="250px" width="100%">
              <Image
                src={image.gmurl} // <-- Small, 250px optimized version
                alt={image.caption}
                objectFit="cover"
                width="100%"
                height="100%"
              />
            </View>
          </Card>
        ))}
      </Grid>
      </View>
    </ThemeProvider>
  );
}
