export interface ImageAsset {
  id: string;
  title: string;
  category: string;
  photographer: string;
  dimensions: string;
  imageUrl: string;
  description: string;
}

export const imageCategories: string[] = ["All", "Nature", "Architecture", "Minimalist", "Abstract"];

export const mockImages: ImageAsset[] = [
  {
    id: "img-1",
    title: "Misty Mountain Ridge",
    category: "Nature",
    photographer: "Elena Rostova",
    dimensions: "6000 x 4000",
    imageUrl: "https://unsplash.com",
    description: "A dramatic composition of subalpine peaks blanketed by morning low-stratus cloud formations."
  },
  {
    id: "img-2",
    title: "Brutalist Concrete Arch",
    category: "Architecture",
    photographer: "Marcus Vance",
    dimensions: "4500 x 5600",
    imageUrl: "https://unsplash.com",
    description: "Geometric lines capturing structural concrete shadows against a clear sky backdrop."
  },
  {
    id: "img-3",
    title: "Desert Dune Ripples",
    category: "Minimalist",
    photographer: "Siddharth Nair",
    dimensions: "5120 x 2880",
    imageUrl: "https://unsplash.com",
    description: "High-contrast wind patterns carved into deep red desert sand dunes during golden hour."
  },
  {
    id: "img-4",
    title: "Monochromatic Wave Forms",
    category: "Abstract",
    photographer: "Chieko Tanaka",
    dimensions: "3840 x 2160",
    imageUrl: "https://unsplash.com",
    description: "Fluid fluid-dynamics study translated into macro photography light streaks."
  },
  {
    id: "img-5",
    title: "Deep Forest Canopy",
    category: "Nature",
    photographer: "Elena Rostova",
    dimensions: "5800 x 3900",
    imageUrl: "https://unsplash.com",
    description: "An immersive low-angle view looking directly up into a dense rainforest emerald canopy."
  },
  {
    id: "img-6",
    title: "Glass Skyscraper Facade",
    category: "Architecture",
    photographer: "Marcus Vance",
    dimensions: "4000 x 6000",
    imageUrl: "https://unsplash.com",
    description: "Symmetrical reflections of neighboring high-rises mirroring across structured cyan glass panels."
  }
];
