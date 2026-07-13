//React,
import  { useState, useEffect } from 'react';
import ImageGallery, { type CloudImage } from '../components/ImageGallery/ImageGallery';

export default function Gallery() {
  const [cloudData, setCloudData] = useState<CloudImage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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
    <main className="max-w-7xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Cloud Storage Vault</h1>
      <p className="text-gray-600 mb-8">Secure media gallery synced directly to cloud object buckets.</p>
      
      <ImageGallery images={cloudData} isLoading={loading} />
    </main>
  );
}
