import { createTheme } from '@mui/material/styles';

const focusRingStyles = {
  outline: '3px solid rgba(25, 118, 210, 0.5)',
  outlineOffset: '2px'
} as const;

export const appTheme = createTheme({
  spacing: 8,
  typography: {
    fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: { fontSize: '2rem', fontWeight: 600, letterSpacing: '-0.5px' },
    h2: { fontSize: '1.75rem', fontWeight: 600, letterSpacing: '-0.25px' },
    h3: { fontSize: '1.5rem', fontWeight: 600 },
    h4: { fontSize: '1.25rem', fontWeight: 600 },
    h5: { fontSize: '1.1rem', fontWeight: 600 },
    h6: { fontSize: '1rem', fontWeight: 600 },
    subtitle1: { fontSize: '1rem', fontWeight: 500 },
    body1: { fontSize: '1rem', lineHeight: 1.5 },
    body2: { fontSize: '0.9rem', lineHeight: 1.6 }
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&:focus-visible': focusRingStyles
        }
      }
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          '&.Mui-focusVisible': focusRingStyles
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          '&:focus-visible': focusRingStyles
        }
      }
    }
  }
});
