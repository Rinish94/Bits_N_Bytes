import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from "./Duk.module.css";
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Duk() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>Did You Know?</h1>
            <Grid container spacing={0}>

                <Grid item xs={12} sm={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <div style={{fontSize:"30px",padding:"20px"}}>
                            <ListItem>
                                By donating (30 books), you will help to reduce 85kg of carbon footprint
                            </ListItem>
                            <ListItem>
                            A ton of recycled paper saves 17 trees
                            </ListItem>
                            <ListItem>
                            In 1993, U.S. paper recovery saved more than 90,000,000 cubic yards of landfill space. It’s our turn in India
                            </ListItem>
                            <ListItem>
                            There are people who cannot access books. They can get books at FREE OF COST anywhere across India.
                            </ListItem>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <div className={styles.container}></div>

                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
}
