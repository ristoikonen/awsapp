export interface FontPair {
  name: string;
  header: string;
  header2: string;
  menu: string;
  menu2: string;
  url: string;
}

export type PairKey = 'pair1' | 'pair2' | 'pair3' | 'pair4' | 'pair5' | 'pair6';

export const pairings: Record<PairKey, FontPair> = {
  pair1: { 
    name: "Montserrat + Source Sans 3", 
    header: "'Montserrat', sans-serif", 
    header2: "Montserrat", 
    menu: "'Source Sans 3', sans-serif", 
    menu2: "Source Sans 3", 
    url: "https://googleapis.com" 
  },
  pair2: { 
    name: "Merriweather + Open Sans", 
    header: "'Merriweather', serif", 
    header2: "Merriweather", 
    menu: "'Open Sans', sans-serif", 
    menu2: "Open Sans", 
    url: "https://googleapis.com" 
  },
  pair3: { 
    name: "Poppins + Lato", 
    header: "'Poppins', sans-serif", 
    header2: "Poppins", 
    menu: "'Lato', sans-serif", 
    menu2: "Lato", 
    url: "https://googleapis.com" 
  },
  pair4: { 
    name: "Roboto + Roboto", 
    header: "'Roboto', sans-serif", 
    header2: "Roboto", 
    menu: "'Roboto', sans-serif", 
    menu2: "Roboto", 
    url: "https://googleapis.com" 
  },
  pair5: { 
    name: "Gotham + Roboto", 
    header: "'Gotham', sans-serif", 
    header2: "Gotham", 
    menu: "'Roboto', sans-serif", 
    menu2: "Roboto", 
    url: "https://googleapis.com" 
  },
  pair6: { 
    name: "Raleway + Bitter", 
    header: "'Raleway', sans-serif", 
    header2: "Raleway", 
    menu: "'Bitter', sans-serif", 
    menu2: "Bitter", 
    url: "https://googleapis.com" 
  }
};
