
// useState,
import  {  useEffect } from 'react';
import { Link } from 'react-router-dom';
// was on below import ImageGallery,
import  { type CloudImage } from '../components/ImageGallery/ImageGallery';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as AmplifyUILink } from '@aws-amplify/ui-react';
import { ThemeProvider, View, Menu, MenuItem, Divider, Heading, Card  } 
   from '@aws-amplify/ui-react';




interface GalleryBrowserProps {
  images: CloudImage[];
  isLoading?: boolean;
}


//export default function Gallery() {
export default function GalleryBrowser({ images, isLoading = false }: GalleryBrowserProps) {

  //const [cloudData, setCloudData] = useState<CloudImage[]>([]);
  //const [loading, setLoading] = useState<boolean>(true);


  if (isLoading) {
    return (
      <p>
        TODO: Better Loading text..
      </p>
    );
  }

  if (!images || images.length === 0) {
    return <p>No images found in this collection.</p>;
  }

  useEffect(() => {

  }, []);

  return (
    <ThemeProvider>
      
      {images.map((image) => (
        
        <Card>
          <View padding="0.5rem">
            <Heading level={6}>{image.id.split('/').pop()}</Heading>
          </View>
        </Card>

      ))}

      <View width="4rem">
        <Menu
          menuAlign="start"
          size="small"
        >
          <MenuItem isDisabled >
            <AmplifyUILink as={ReactRouterLink} to="/gallery">
              Gallery
            </AmplifyUILink>
          </MenuItem>
          <Divider />
          <MenuItem>
            <AmplifyUILink as={ReactRouterLink} to="/">
              Home
            </AmplifyUILink>
          </MenuItem>
        </Menu>
        <Link to="/">Back to Main Page</Link>
      </View>
    </ThemeProvider>
  );
}
