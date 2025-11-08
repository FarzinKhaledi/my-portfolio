'use client';

import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';
import EmotionCache from './EmotionCache';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <EmotionCache>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </EmotionCache>
  );
}

