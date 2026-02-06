import { NAV_LINKS, SIDEBAR_WIDTH } from './constants';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableChartIcon from '@mui/icons-material/TableChart';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';

const iconMap: Record<(typeof NAV_LINKS)[number]['href'], typeof DashboardIcon> = {
  '/dashboard': DashboardIcon,
  '/table-view': TableChartIcon,
  '/configuration': SettingsIcon
} as const;

const Sidebar = () => {
  const router = useRouter();

  return (
    <Box
      component="nav"
      sx={{
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': { width: SIDEBAR_WIDTH, boxSizing: 'border-box' }
      }}
    >
      <Box
        sx={{
          position: 'fixed',
          width: SIDEBAR_WIDTH,
          height: '100vh',
          borderRight: (theme) => `1px solid ${theme.palette.divider}`,
          bgcolor: '#0f172a',
          color: 'white'
        }}
      >
        <Toolbar sx={{ minHeight: 72, px: 3 }}>
          <Typography variant="subtitle1" fontWeight={600} letterSpacing={0.2}>
            Enterprise Ops
          </Typography>
        </Toolbar>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)' }} />
        <List>
          {NAV_LINKS.map((item) => {
            const isActive = router.pathname === item.href;
            const Icon = iconMap[item.href];
            return (
              <ListItemButton
                key={item.href}
                component={Link}
                href={item.href}
                selected={isActive}
                sx={{
                  color: 'white',
                  '&.Mui-selected': {
                    bgcolor: 'rgba(255,255,255,0.12)'
                  },
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.08)'
                  }
                }}
              >
                <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                  {Icon ? <Icon fontSize="small" /> : null}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
