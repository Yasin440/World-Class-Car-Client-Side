import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import useAuth from '../../../Hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import Payment from './Payment/Payment';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import AddCar from './AddCar/AddCar';
import MyOrder from './MyOrder/MyOrder';
import PrivateAdminRoute from '../../../PrivateRoute/PrivateAdminRoute';
import AddAdmin from './AddAdmin/AddAdmin';
import ManageAllCars from './ManageAllCars/ManageAllCars';
import AddReview from './AddReview/AddReview';
import { CircularProgress } from '@mui/material';

const drawerWidth = 200;

const Dashboard = (props) => {
    const { user, logOut, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <i className="fas fa-user-circle me-1" style={{ color: '#1e88e5', fontSize: '1.2rem' }}></i>
                        <ListItemText primary={user?.displayName} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <NavLink to='/home' style={{ textDecoration: 'none' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <i className="fas fa-home" style={{ color: '#1e88e5', fontSize: '1.2rem' }}></i>
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
                <NavLink to={`${url}`} style={{ textDecoration: 'none' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="My Order" />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
                {admin &&
                    <>
                        <NavLink to={`${url}/add_admin`} style={{ textDecoration: 'none' }}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Add Admin" />
                                </ListItemButton>
                            </ListItem>
                        </NavLink>
                        <NavLink to={`${url}/manage_all_order`} style={{ textDecoration: 'none' }}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Manage All Order" />
                                </ListItemButton>
                            </ListItem>
                        </NavLink>
                        <NavLink to={`${url}/manage_all_cars`} style={{ textDecoration: 'none' }}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Manage All Cars" />
                                </ListItemButton>
                            </ListItem>
                        </NavLink>
                        <NavLink to={`${url}/dashboard_add_car`} style={{ textDecoration: 'none' }}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Add Car" />
                                </ListItemButton>
                            </ListItem>
                        </NavLink>
                    </>
                }

                <NavLink to={`${url}/dashboard_review`} style={{ textDecoration: 'none' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Review" />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
                <NavLink to='/home' style={{ textDecoration: 'none' }}>
                    <ListItem disablePadding>
                        <ListItemButton onClick={logOut}>
                            <i className="fas fa-sign-out-alt me-1" style={{ color: '#F71943', fontSize: '1.2rem' }}></i>
                            <ListItemText primary="LogOut" />
                        </ListItemButton>
                    </ListItem>
                </NavLink>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={`${path}`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/dashboard_review`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${path}/payment/:id`}>
                        <Payment></Payment>
                    </Route>
                    {!admin ?
                        <div style={{ textAlign: 'center' }}>
                            <CircularProgress sx={{ my: 3 }} />
                        </div>
                        :
                        <>
                            <PrivateAdminRoute path={`${path}/dashboard_add_car`}>
                                <AddCar></AddCar>
                            </PrivateAdminRoute>
                            <PrivateAdminRoute path={`${path}/add_admin`}>
                                <AddAdmin></AddAdmin>
                            </PrivateAdminRoute>
                            <PrivateAdminRoute path={`${path}/manage_all_order`}>
                                <ManageAllOrders></ManageAllOrders>
                            </PrivateAdminRoute>
                            <PrivateAdminRoute path={`${path}/manage_all_cars`}>
                                <ManageAllCars></ManageAllCars>
                            </PrivateAdminRoute>
                        </>
                    }
                </Switch>
            </Box >
        </Box >
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;