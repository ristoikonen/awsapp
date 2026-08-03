import React, { useState, useMemo } from 'react';
import { View, Grid, Card, Flex, Heading, Text, Badge, Button, Image, SearchField, Divider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'; // Vital Amplify design token styles layout
import { mockImages, imageCategories, type ImageAsset } from '../data/imageData';

export const ImageBrowserSuite: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<ImageAsset | null>(null);

  // Performance-optimised search and filter evaluation pass
  const filteredImages = useMemo(() => {
    return mockImages.filter((img) => {
      const matchesSearch = img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            img.photographer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || img.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    alert("Image source CDN url copied to clipboard!");
  };

  return (
    <View 
      padding={{ base: '1.5rem', medium: '3rem' }} 
      backgroundColor="var(--amplify-colors-background-secondary)"
      minHeight="100vh"
    >
      <Flex direction="column" gap="2.5rem" maxWidth="1200px" margin="0 auto">
        
        {/* ===================================================================
            1. HEADER DASHBOARD TITLE & SEARCH CONTROLS
            =================================================================== */}
        <Flex direction={{ base: 'column', medium: 'row' }} justifyContent="space-between" alignItems="center" gap="1.5rem">
          <View>
            <Heading level={1} fontSize="2.25rem" fontWeight="800">
              Media Asset Explorer
            </Heading>
            <Text color="var(--amplify-colors-font-secondary)" fontSize="0.95rem" marginTop="4px">
              Browsing {filteredImages.length} high-resolution photography cards.
            </Text>
          </View>
          
          <View width={{ base: '100%', medium: '350px' }}>
            <SearchField
              label="Search images"
              placeholder="Search by title or artist..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onClear={() => setSearchQuery('')}
              labelHidden={true}
            />
          </View>
        </Flex>

        {/* ===================================================================
            2. CATEGORY COMPONENT FILTER BAR
            =================================================================== */}
        <Flex direction="row" gap="8px" wrap="wrap">
          {imageCategories.map((category) => (
            <Button
              key={category}
              size="small"
              variation={selectedCategory === category ? 'primary' : 'link'}
              onClick={() => setSelectedCategory(category)}
              style={{
                borderRadius: '20px',
                backgroundColor: selectedCategory === category ? 'var(--amplify-colors-brand-primary-80)' : 'transparent',
                fontWeight: 600
              }}
            >
              {category}
            </Button>
          ))}
        </Flex>

        <Divider />

        {/* ===================================================================
            3. DYNAMIC MEDIA ASSET EXPANSION GRID MAP
            =================================================================== */}
        {filteredImages.length === 0 ? (
          <View textAlign="center" padding="4rem" backgroundColor="var(--amplify-colors-background-primary)" borderRadius="var(--amplify-radii-medium)">
            <Text fontSize="1.1rem" fontWeight="600" color="var(--amplify-colors-font-tertiary)">
              No assets matched your search configurations.
            </Text>
          </View>
        ) : (
          <Grid
            templateColumns={{
              base: '1fr',
              medium: '1fr 1fr',
              large: '1fr 1fr 1fr'
            }}
            gap="2rem"
          >
            {filteredImages.map((image) => (
              <Card 
                key={image.id}
                backgroundColor="var(--amplify-colors-background-primary)"
                borderRadius="var(--amplify-radii-large)"
                boxShadow="var(--amplify-shadows-small)"
                padding="0"
                style={{ 
                  overflow: 'hidden',
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedImage(image)}
              >
                {/* Image frame section */}
                <View position="relative" height="240px" backgroundColor="var(--amplify-colors-neutral-10)">
                  <Image
                    src={image.imageUrl}
                    alt={image.title}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                  />
                  <Badge 
                    variation="info" 
                    position="absolute" 
                    top="12px" 
                    left="12px"
                    style={{ textTransform: 'uppercase', fontSize: '11px', fontWeight: 700 }}
                  >
                    {image.category}
                  </Badge>
                </View>

                {/* Content description layout blocks */}
                <Flex direction="column" gap="1rem" padding="1.5rem" style={{ flexGrow: 1, justifyContent: 'space-between' }}>
                  <View>
                    <Heading level={3} fontSize="1.25rem" fontWeight="700">
                      {image.title}
                    </Heading>
                    <Text fontSize="0.85rem" color="var(--amplify-colors-font-secondary)" marginTop="4px">
                      By {image.photographer} • {image.dimensions}
                    </Text>
                  </View>
                  
                  <Button 
                    variation="link" 
                    size="small" 
                    onClick={(e) => {
                      e.stopPropagation(); // Block detail modal layout toggle popups
                      handleCopyLink(image.imageUrl);
                    }}
                    style={{ padding: 0, alignSelf: 'flex-start' }}
                  >
                    Copy Source Link
                  </Button>
                </Flex>
              </Card>
            ))}
          </Grid>
        )}

        {/* ===================================================================
            4. LIGHTBOX DETAIL MODAL (SIMULATED VIA ABSOLUTE OVERLAY VIEW)
            =================================================================== */}
        {selectedImage && (
          <View 
            position="fixed" top="0" left="0" width="100vw" height="100vh" 
            backgroundColor="rgba(15, 23, 42, 0.75)"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }}
            onClick={() => setSelectedImage(null)}
          >
            <Card 
              maxWidth="650px" width="90%" 
              backgroundColor="var(--amplify-colors-background-primary)"
              borderRadius="var(--amplify-radii-large)"
              padding="0"
              onClick={(e) => e.stopPropagation()} // Stop modal closure when inside box frame is clicked
            >
              <Image 
                src={selectedImage.imageUrl} 
                alt={selectedImage.title}
                width="100%" height="auto" maxHeight="400px" objectFit="cover"
              />
              
              <Flex direction="column" gap="1rem" padding="2rem">
                <Flex justifyContent="space-between" alignItems="flex-start">
                  <View>
                    <Heading level={2} fontSize="1.5rem" fontWeight="800">
                      {selectedImage.title}
                    </Heading>
                    <Text fontSize="0.9rem" color="var(--amplify-colors-font-secondary)">
                      Captured by {selectedImage.photographer}
                    </Text>
                  </View>
                  <Badge variation="success">{selectedImage.dimensions}</Badge>
                </Flex>

                <Text fontSize="0.95rem" lineHeight="1.6" color="var(--amplify-colors-font-primary)">
                  {selectedImage.description}
                </Text>

                <Flex direction="row" gap="12px" marginTop="1rem" justifyContent="flex-end">
                  <Button size="small" onClick={() => setSelectedImage(null)}>
                    Close Gallery
                  </Button>
                  <Button size="small" variation="primary" onClick={() => handleCopyLink(selectedImage.imageUrl)}>
                    Download Path
                  </Button>
                </Flex>
              </Flex>
            </Card>
          </View>
        )}

      </Flex>
    </View>
  );
};
