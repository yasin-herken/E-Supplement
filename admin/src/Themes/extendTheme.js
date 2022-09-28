import { extendTheme } from '@chakra-ui/react';
import Card from "../Chakra/card";
const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
}
const customTheme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      900: '#f77070',
    },
    grey: {
      100: '#eff3fa',
    },
    blue: {
      100: '#0098ae',
    },
    red: {
      100: '#ff3d3d',
      200: '#f77070'
    },
  },
  fonts: {
    body: 'Graphik Font',
    heading: 'Graphik Font',
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  components: {
    Card,
  }
});

export default customTheme;