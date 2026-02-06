import { Box, Toolbar } from '@mui/material';
import type { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface AppLayoutProps {
  children: ReactNode;
  title: string;
}

const AppLayout = ({ children, title }: AppLayoutProps) => (
  <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: 'background.default' }}>
    <Sidebar />
    <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
      <Header title={title} />
      <Toolbar sx={{ minHeight: 72 }} />
      <Box component="section" sx={{ p: 3, flexGrow: 1 }}>{children}</Box>
    </Box>
  </Box>
);

export default AppLayout;
