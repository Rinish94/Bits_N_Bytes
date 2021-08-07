import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Navbar from '../Navbar/Navbar';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: "25%",
        border: "1px solid gray",
        float: 'left',
        margin: "2% 5%"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function BookList() {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [data, setData] = useState([]);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    // useEffect(() => {
    //     // fetchTodos();
    // }, []);



    return (
        <div>
            <Navbar />
            <br /><br />
            <br /><br />
            <h1>List of Books</h1>
            <div style={{ margin: "auto" }}>
                {data.map((item, i) => {
                    return (
                        <Card key={i} className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        {/* <img src={item.artist_photo} style={{ height: "40px" }} /> */}
                                        {/* <img src={item.artist_photo} /> */}

                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        {/* <MoreVertIcon /> */}
                                    </IconButton>
                                }
                                title={item.artist_name}
                            // subheader="September 14, 2016"
                            />
                            <CardMedia
                                className={classes.media}
                                image={item.artist_logo}
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    There Are {item.no_of_songs} Songs available in this album.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    {/* <FavoriteIcon /> */}
                                </IconButton>
                                <IconButton aria-label="share">
                                    {/* <ShareIcon /> */}
                                </IconButton>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    {/* <ExpandMoreIcon /> */}
                                </IconButton>
                            </CardActions>
                        </Card>
                    );
                })}
               
            </div>

            {/* <button onClick={() => Setpage(page + 1)}>Next</button> */}
        </div>
    );

}










