import React from "react";
import styles from "./Profile.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../Redux/Auth/action";
import { logoutUser } from "../../Redux/Auth/action";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({});

function Profile() {
    const { _id, email, username } = useSelector(
        (state) => state.auth.currentUser
    );
    let history = useHistory()

    const handleClick = () => {
        history.push("/profile/create_album");
        console.log("Button is click and print create album")

    };
    const classes = useStyles();
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getUser(_id));
    }, []);
    return (
        <div className={styles.Container}>
            <div className={styles.Container_Left}>
                <div></div>
                <Button className={classes.RightButton}>My profile</Button>
                <Button
                    className={classes.RightButton}
                    onClick={() => dispatch(logoutUser())}
                >
                    Log out
                </Button>
                <div></div>
            </div>
            <div className={styles.Container_Right}>
                <div className={styles.Container_Right_Top}>
                    <h5>Username : {username} </h5>
                    <h5>Email : {email} </h5>
                </div>
                <div>
                    <br /><br />
                    {/* <button onclick={create_Album}>Create Album</button> */}

                    <Button variant="contained" color="primary" onClick={handleClick}>
                        Click Here To Create Album
                    </Button>
                </div>
            </div>


        </div>


    );
}

export default Profile;