//import React from 'react';

import { Image,Card, Grid, View, Heading, Collection, Divider,Button } from '@aws-amplify/ui-react';

// 1. Define the TypeScript contract for your cloud image metadata
export interface CloudImage {
  id: string;
  url: string;        // Secure CDN or storage URL (e.g., Cloudinary, S3)
  gmurl: string;        // Google map link
  caption: string;    // User-facing description
  uploadedBy?: string; // Optional metadata
  createdAt?: string;  // Optional timestamp
}

interface ImageGalleryProps {
  images: CloudImage[];
  isLoading?: boolean;
}

export default function ImageGallery({ images, isLoading = false }: ImageGalleryProps) {
  // 2. Handle the loading state gracefully
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // 3. Handle empty cloud storage states
  if (images.length === 0) {
    return (
      <div>
        <p>No cloud images found in this gallery.</p>
      </div>
    );
  }

  // 4. Render the responsive image grid with metadata overlays
  return (


    <Grid
        templateColumns={{ base: '1fr', medium: '1fr 1fr', large: '1fr 1fr 1fr' }}
        gap="1rem"
      >

    {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4"> */}


    
<Collection
  items={images}
  type="list"
  direction="column"
  gap="20px"
  wrap="nowrap"
>
  {(images, index) => (
    <Card
      key={index}
      borderRadius="medium"
      maxWidth="20rem"
      variation="outlined"
    >
      <Image
        src={images.url}
        alt="Glittering stream with old log, snowy mountain peaks tower over a green field."
      />
      <View padding="xs">
{/*         <Flex>
          {images.uploadedBy.map((badge) => (
            <Badge
              key={badge}
              backgroundColor={
                badge === 'Auto' ? 'blue.40' 
                : badge === 'Mountain' ? 'green.40' : 'yellow.40'}
            >
              {badge}
            </Badge>
          ))}
        </Flex> */}
        <Divider padding="xs" />
        <Heading padding="medium">{images.caption}</Heading>
        <Button variation="primary" isFullWidth>
          Book it
        </Button>
      </View>
    </Card>
  )}
</Collection>






      
      {images.map((image) => (



        <Card key={image.id} borderRadius="medium" variation="elevated">
    
        <div 
          key={image.id} 
          className="group relative overflow-hidden rounded-xl bg-white shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl"
        >
          <div>
            <Image
                src={image.url}
                alt={image.caption}
              />
          </div>  

          {/* Metadata Footer Panel */}
          <div className="p-4 bg-white">
            <p className="font-medium text-gray-800 line-clamp-2 text-sm">
              {image.caption}
            </p>
            
            {/* Optional Metadata Display */}
            {(image.uploadedBy || image.createdAt) && (
              <div className="mt-2 flex items-center justify-between text-xs text-gray-400 border-t border-gray-50 pt-2">
                {image.uploadedBy && <span>By {image.uploadedBy}</span>}
                {image.createdAt && <span>{new Date(image.createdAt).toLocaleDateString()}</span>}
              </div>
            )}
          </div>
        </div>
        <View padding="0.5rem">
              <Heading level={6}>{image.id.split('/').pop()}</Heading>
            </View>
        </Card>
      ))}
    </Grid>
  );
}
