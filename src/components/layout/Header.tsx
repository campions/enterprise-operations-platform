import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { SIDEBAR_WIDTH } from './constants';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => (
  <AppBar
    position="fixed"
    elevation={0}
    color="transparent"
    sx={{
      width: { sm: `calc(100% - ${SIDEBAR_WIDTH}px)` },
      ml: { sm: `${SIDEBAR_WIDTH}px` },
      borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      backgroundColor: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(6px)'
    }}
  >
    <Toolbar sx={{ minHeight: 72, display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton edge="start" color="inherit" sx={{ display: { sm: 'none' } }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="text.primary" fontWeight={600}>
          {title}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton color="inherit">
          <NotificationsNoneIcon />
        </IconButton>
        <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}>EO</Avatar>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
