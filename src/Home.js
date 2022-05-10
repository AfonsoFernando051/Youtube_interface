import React, { useEffect } from 'react';
import {
    Button,
    makeStyles,
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Divider,
    ListItemIcon,
    Typography,
    ListSubheader,
    Grid,
    Hidden,
    Box,
    Switch
}
    from "@material-ui/core";

import { useTheme } from '@material-ui/styles';
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

import VideoCallIcon from '@material-ui/icons/VideoCall';
import MoreVert from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';

import logoWhite from './images/iconeyoutube.png';
import logoBlack from './images/logoyoutubeblack.png';

import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';

import VideoLibrary from '@material-ui/icons/VideoLibrary'
import History from '@material-ui/icons/History'
import AddCircle from '@material-ui/icons/AddCircle';
import myFoto from './images/foto.jpg'

import AliceInChains from './images/thumb1.jpg'
import Kaka from "./images/thumb2.png"
import Muzy from "./images/thumb3.png"
import Gringa from "./images/thumb4.png"
import itAint from "./images/thumb5.png"
import Vini from "./images/thumb6.png"
import Elon from "./images/thumb7.png"
import SQL from "./images/thumb8.png"


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
    },
    AppBar: {
        boxShadow: "none",
        zIndex: theme.zIndex.drawer + 1,
    },
    logo: {
        height: 30,
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        borderRight: "none",
    },
    menuIcon: {
        paddingRight: theme.spacing(4),
        paddingLeft: theme.spacing(5),
    },
    icons: {
        paddingRight: theme.spacing(5)
    },
    grow: {
        flexGrow: 1
    },
    listItemText: {
        font: 14
    },
    listItem: {
        paddingTop: 4,
        paddingBottom: 4,
    },
    subheader: {
        textTransform: 'uppercase'
    },
    box1: {
        width: '80%',
        marginLeft: "15%"
    }
}));

const videos = [
    {
        id: 1,
        title:
            ' Vinícius Jr - FUT MOTIVATION',
        channel: 'Fut cortes',
        views: '11 mi de visualizações',
        date: 'há 1 semana',
        avatar: myFoto,
        thumb: Vini,
    },
    {
        id: 2,
        title:
            "Alice In Chains - Rotten Apple HD - Collegno 2010",
        channel: ' Alice in Chains',
        views: '957 mil visualizações',
        date: 'há 1 semana',
        avatar: myFoto,
        thumb: AliceInChains,
    },
    {
        id: 3,
        title: "DERROTA NA COPA DE 2010",
        channel: 'Cortes do Futebol',
        views: '106 mil visualizações',
        date: 'há 1 semana',
        avatar: myFoto,
        thumb: Kaka,
    },
    {
        id: 4,
        title:
            'a DICA INFÁLIVEL para GERENCIAR O SEU TEMPO (com Paulo Muzy)',
        channel: 'Cortes do MHM',
        views: '5,6 mi de visualizações',
        date: 'há 1 semana',
        avatar: myFoto,
        thumb: Muzy,
    },
    {
        id: 5,
        title:
            '5 coisas que amo no Brasil',
        channel: 'Aquela Gringa StacyAngy',
        views: '2,2 mi de visualizações',
        date: 'há 1 semana',
        avatar: myFoto,
        thumb: Gringa,
    },
    {
        id: 6,
        title: 'It Aint like that',
        channel: 'Alice in Chains',
        views: '233 mil visualizações',
        date: 'há 1 semana',
        avatar: myFoto,
        thumb: itAint,
    },
    {
        id: 7,
        title:
            'Podcast com Elon Musk',
        channel: 'Cortes PodCast',
        views: '118 mil visualizações',
        date: 'há 1 semana',
        avatar: myFoto,
        thumb: Elon,
    },
    {
        id: 8,
        title:
            'Fiz um servidor de "SQL"?? | Entendendo Banco de Dados',
        channel: 'Fabio Akita',
        views: '1,9 mi de visualizações',
        date: 'há 1 semana',
        avatar: myFoto,
        thumb: SQL,
    },
];

function Home({ darkMode, setDarkMode }) {
    const classes = useStyles();
    const theme = useTheme();

    useEffect(() => {
        console.log("HOME -> ", darkMode)
    }, [darkMode])
    return (
        <div className={classes.root}>
            <AppBar color="inherit" className={classes.AppBar}>
                <Toolbar>
                    <IconButton

                        className={classes.MenuIcon}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src={theme.palette.type === 'dark'
                        ? logoWhite
                        : logoBlack}
                        alt='logo'
                        className={classes.logo}
                    />
                    <div className={classes.grow} />
                    <Switch
                        value={darkMode}
                        onChange={() => setDarkMode(prevState => {
                            console.log(prevState);
                            console.log(!darkMode)
                            return !darkMode
                        })}
                        className={classes.icons}
                    />
                    <IconButton className={classes.icons}>
                        <VideoCallIcon />
                    </IconButton>
                    <IconButton className={classes.icons}>
                        <AppsIcon />
                    </IconButton>
                    <IconButton className={classes.icons}>
                        <MoreVert />
                    </IconButton>
                    <Button startIcon={<AccountCircle />}
                        variant="outlined"
                        color="secondary"
                    >
                        Fazer Login
                    </Button>
                </Toolbar>
            </AppBar>
            <Box display="flex">
                <Hidden mdDown>
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <Toolbar />
                        <div className={classes.drawerContainer}>
                            <List>
                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText,
                                        }}
                                        primary={'Início'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon>{<Whatshot />}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText,
                                        }}
                                        primary={'Em alta'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText,
                                        }}
                                        primary={'Inscrições'} />
                                </ListItem>
                            </List>
                            <Divider />
                            <List>
                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon>{< VideoLibrary />}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText,
                                        }}
                                        primary={'Biblioteca'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon>{<History />}</ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText,
                                        }}
                                        primary={'Histórico'} />
                                </ListItem>
                            </List>
                            <Divider />
                            <Box p={7}>
                                <Typography variant="body1">
                                    Faça login para curtir vídeos, comentar e se inscrever.
                                </Typography>
                                <Box mt={2}>
                                    <Button
                                        variant='outlined'
                                        color="secondary"
                                        startIcon={<AccountCircle />}
                                    >
                                        Fazer login
                                    </Button>
                                </Box>
                            </Box>
                            <Divider />
                            <List
                                components="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader
                                        components='div'
                                        id='nested-list-subheader'
                                        className={classes.subheader}>
                                        O melhor do youtube
                                    </ListSubheader>
                                }>
                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon>
                                        <AddCircle />
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText,
                                        }}
                                        primary={'Música'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon>
                                        <AddCircle />
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText,
                                        }}
                                        primary={'Esportes'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon>
                                        <AddCircle />
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText,
                                        }}
                                        primary={'Jogos'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon>
                                        <AddCircle />
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText,
                                        }}
                                        primary={'Filmes'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon>
                                        <AddCircle />
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText,
                                        }}
                                        primary={'Notícias'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon>
                                        <AddCircle />
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText,
                                        }}
                                        primary={'Ao vivo'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon>
                                        <AddCircle />
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText,
                                        }}
                                        primary={'Destaques'} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.ListItem }}>
                                    <ListItemIcon>
                                        <AddCircle />
                                    </ListItemIcon>
                                    <ListItemText
                                        classes={{
                                            primary: classes.ListItemText,
                                        }}
                                        primary={'Videos 360'} />
                                </ListItem>
                            </List>
                            <Divider />
                            <ListItem button classes={{ root: classes.ListItem }}>
                                <ListItemIcon>
                                    <AddCircle />
                                </ListItemIcon>
                                <ListItemText
                                    classes={{
                                        primary: classes.ListItemText,
                                    }} primary={'Procurar mais'} />
                            </ListItem>
                            <Divider />

                        </div>
                    </Drawer >
                </Hidden>
                <Box padding={8} classes={{ root: !darkMode ? classes.box1 : "" }} >
                    <Toolbar />
                    <Typography
                        variant='h5'
                        color='textPrimary'
                        style={{ fontWeight: 600 }}
                    >
                        Recomendados
                    </Typography>


                    <Grid container spacing={1} >
                        {
                            videos.map((item, index) => (
                                <Grid item lg={3} md={4} sm={6} xs={12}>
                                    <Box>
                                        <img
                                            style={{ width: '100%' }}
                                            alt={item.title}
                                            src={item.thumb}
                                        />
                                        <Box>
                                            <Typography
                                                style={{ fontWeight: 600 }}
                                                gutterBottom
                                                variant='body1'
                                                color='textPrimary'
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                display='block'
                                                variant='body2'
                                                color='textSecondary'
                                            >
                                                {item.channel}
                                            </Typography>
                                            <Typography variant='body2' color='textSecondary'>
                                                {`${item.views} • ${item.date}`}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>

                </Box>
            </Box>
        </div >
    )
}

export default Home;