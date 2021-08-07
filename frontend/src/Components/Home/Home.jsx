import { Button } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router-dom';
import styles from "./Home.module.css";

export default function Home_compo() {
    let history = useHistory()

    const handleClick = () => {
        history.push("/guest");
        console.log("Button is click and print create album")

    };
    
    const handleClick1 = () => {
        history.push("/guest");
        console.log("Button is click and print create album")

    };
    return (
        <div>
            <div className={styles.container}>
                <br /><br /><br /><br /><br />
                <h1 style={{ color: "teal", fontSize: "70px", marginTop: "90px" }}>
                    Share Book... Share Knowledge
                </h1>
                <Button onClick={handleClick} style={{margin:"10px"}} variant="contained" color="primary">
                    Find Books
                </Button>
                <Button onClick={handleClick1} style={{margin:"10px"}} variant="contained" color="primary">
                    Share Books
                </Button>
            </div>


        </div>
    )
}
