// // import React, { useEffect, useState } from "react";
// // import Table from "@material-ui/core/Table";
// // import TableBody from "@material-ui/core/TableBody";
// // import TableCell from "@material-ui/core/TableCell";
// // import TableContainer from "@material-ui/core/TableContainer";
// // import TableHead from "@material-ui/core/TableHead";
// // import TableRow from "@material-ui/core/TableRow";
// // import Paper from "@material-ui/core/Paper";
// // import axios from "axios";
// // import { makeStyles } from "@material-ui/core";
// // import Navbar from "../../Components/Navbar/Navbar";

// // const useStyles = makeStyles((theme) => ({
// //     root: {
// //         flexGrow: 1
// //     },
// //     paper: {
// //         padding: theme.spacing(2),
// //         textAlign: "center",
// //         color: theme.palette.text.secondary
// //     },
// //     table: {
// //         minWidth: 650
// //     }
// // }));
// // const url = `http://localhost:5000/createAlbum`;
// // export default function Guest() {
// //     const classes = useStyles();

// //     const [data, setData] = useState([]);

// //     const fetchTodos = () => {
// //         axios
// //             .get(url)
// //             .then((res) => {
// //                 const data = res.data;
// //                 setData(data);
// //             })
// //             .catch((error) => {
// //                 console.log(error);
// //             });
// //     };

// //     useEffect(() => {
// //         fetchTodos();
// //     }, []);

// //     return (
// //         <div>
// //             <Navbar />
// //             <br /><br />
// //             <br /><br />
// //             <h1>List of Album</h1>
// //             <TableContainer component={Paper}>
// //                 <Table className={classes.table} aria-label="simple table">
// //                     <TableHead>
// //                         <TableRow>
// //                             <TableCell align="center">Name</TableCell>
// //                             <TableCell align="center">Song no</TableCell>
// //                             <TableCell align="center">Album Image</TableCell>
// //                             <TableCell align="center">Artist Logo</TableCell>
// //                         </TableRow>
// //                     </TableHead>

// //                     <TableBody>
// //                         {data.map((item, i) => {
// //                             return (
// //                                 <TableRow key={i}>
// //                                     <TableCell align="center" component="th" scope="row">
// //                                         {item.artist_name}
// //                                     </TableCell>
// //                                     <TableCell align="center">{item.no_of_songs}</TableCell>
// //                                     <TableCell align="center">
// //                                         <img src={item.artist_photo} style={{ height: "30px" }} />
// //                                     </TableCell>
// //                                     <TableCell align="center">
// //                                         <img src={ item.artist_logo} style={{ height: "30px" }} />

// //                                     </TableCell>
// //                                 </TableRow>
// //                             );
// //                         })}
// //                     </TableBody>
// //                 </Table>
// //             </TableContainer>
// //         </div>
// //     );
// // }



// import React, { useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// // import FavoriteIcon from '@material-ui/icons/Favorite';
// // import ShareIcon from '@material-ui/icons/Share';
// // import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// // import MoreVertIcon from '@material-ui/icons/MoreVert';
// import axios from 'axios';
// import Navbar from '../../Components/Navbar/Navbar';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         maxWidth: "25%",
//         border: "1px solid gray",
//         float: 'left',
//         margin: "2% 5%"
//     },
//     media: {
//         height: 0,
//         paddingTop: '56.25%', // 16:9
//     },
//     expand: {
//         transform: 'rotate(0deg)',
//         marginLeft: 'auto',
//         transition: theme.transitions.create('transform', {
//             duration: theme.transitions.duration.shortest,
//         }),
//     },
//     expandOpen: {
//         transform: 'rotate(180deg)',
//     },
//     avatar: {
//         backgroundColor: red[500],
//     },
// }));
// const url = `http://localhost:5000/createAlbum`;

// export default function Guest() {
//     const classes = useStyles();
//     const [expanded, setExpanded] = useState(false);
//     const [data, setData] = useState([]);
//     const [page,Setpage]=useState(1)
//     // const limit = 2;
//     // =&_limit=2
//     const fetchTodos = () => {
//         axios
//             .get(url, {
//                 params: {
//                     _page: page,
//                     _limit: 2
//                 }
//             })
//             .then((res) => {
//                 const data = res.data;
//                 setData(data);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     };


//     const handleExpandClick = () => {
//         setExpanded(!expanded);
//     };

//     useEffect(() => {
//         fetchTodos(page);
//     }, [page]);



//     return (
//         <div>
//             <Navbar />
//             <br /><br />
//             <br /><br />
//             <h1>List of Album</h1>
//             <div style={{ margin: "auto" }}>
//                 {data.map((item, i) => {
//                     return (
//                         <Card key={i} className={classes.root}>
//                             <CardHeader
//                                 avatar={
//                                     <Avatar aria-label="recipe" className={classes.avatar}>
//                                         <img src={item.artist_photo} style={{ height: "40px" }} />
//                                         {/* <img src={item.artist_photo} /> */}

//                                     </Avatar>
//                                 }
//                                 action={
//                                     <IconButton aria-label="settings">
//                                         {/* <MoreVertIcon /> */}
//                                     </IconButton>
//                                 }
//                                 title={item.artist_name}
//                             // subheader="September 14, 2016"
//                             />
//                             <CardMedia
//                                 className={classes.media}
//                                 image={item.artist_logo}
//                                 title="Paella dish"
//                             />
//                             <CardContent>
//                                 <Typography variant="body2" color="textSecondary" component="p">
//                                     There Are {item.no_of_songs} Songs available in this album.
//                                 </Typography>
//                             </CardContent>
//                             <CardActions disableSpacing>
//                                 <IconButton aria-label="add to favorites">
//                                     {/* <FavoriteIcon /> */}
//                                 </IconButton>
//                                 <IconButton aria-label="share">
//                                     {/* <ShareIcon /> */}
//                                 </IconButton>
//                                 <IconButton
//                                     className={clsx(classes.expand, {
//                                         [classes.expandOpen]: expanded,
//                                     })}
//                                     onClick={handleExpandClick}
//                                     aria-expanded={expanded}
//                                     aria-label="show more"
//                                 >
//                                     {/* <ExpandMoreIcon /> */}
//                                 </IconButton>
//                             </CardActions>
//                         </Card>
//                     );
//                 })}
//                 <br/>
//                 <button onClick={() => Setpage(page - 1)}>Prev</button>

//                 <h3>Page : {page}</h3>
//                 <button onClick={() => Setpage(page + 1)}>Next</button>
//             </div>
//         </div>
//     );

// }










