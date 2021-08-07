// import { Button } from '@material-ui/core';
// import React from 'react'
// import { useHistory } from 'react-router-dom';

// export default function DUK() {
//     let history = useHistory()

//     const handleClick = () => {
//         history.push("/guest");
//         console.log("Button is click and print create album")

//     };

//     const handleClick1 = () => {
//         history.push("/guest");
//         console.log("Button is click and print create album")

//     };
//     return (
//         <div>
//             {/* <div className={styles.cont}>
//                 <h2>
//                 By donating (30 books), you will help to reduce 85kg of carbon footprint
//                 </h2>
//                 <h2>
//                 A ton of recycled paper saves 17 trees                    
//                 </h2>
//             </div>
//             <div className={styles.container}>
//                 <br /><br /><br /><br /><br />
//                 <h1 style={{ color: "teal", fontSize: "70px", marginTop: "90px" }}>
//                     Share Book... Share Knowledge
//                 </h1>
//                 <Button onClick={handleClick} style={{ margin: "10px" }} variant="contained" color="primary">
//                     Find Books
//                 </Button>
//                 <Button onClick={handleClick1} style={{ margin: "10px" }} variant="contained" color="primary">
//                     Share Books
//                 </Button>
//             </div> */}
//             <div class="row">
//                 <div class="column" style={{ backgroundColor: "#aaa" }}>
//                     <h2>Column 1</h2>
//                     <p>Some text..</p>
//                 </div>
//                 <div class="column" style={{ backgroundColor: "#bbb" }}>
//                     <h2>Column 2</h2>
//                     <p>Some text..</p>
//                 </div>
//             </div>
//         </div>
//     )
// }


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from "./DUK.module.css";
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

export default function DKU() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>Did You Know?</h1>
            <Grid container spacing={3}>

                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
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
                    <Paper className={classes.paper}>
                        <div className={styles.container}></div>

                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
}
