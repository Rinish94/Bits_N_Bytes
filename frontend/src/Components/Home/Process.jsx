import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: "100%",
        backgroundColor:"#ededf1"
    },
});

export default function Process() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div style={{margin:"3%", boxShadow:"0px 0px 4px #b3b0b0"}}>
                <h1>Our Process</h1>
                <p style={{fontWeight:"600"}}>Fill the form, we’ll collect from Home</p>
                <Paper square className={classes.root}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                        indicatorColor="primary"
                        textColor="white"
                        aria-label="icon tabs example"
                    >

                        <Tab icon={<InsertDriveFileIcon />} label="Fill up the form" aria-label="insertdrivefile" />
                        <Tab icon={<PhoneIcon />} label="Our team will schedule pickup" aria-label="phone" />
                        <Tab icon={<MenuBookIcon />} label="We will collect the books" aria-label="menubook" />
                    </Tabs>
                </Paper>
                <br/>
                <br/>
            </div>
        </>
    );
}
