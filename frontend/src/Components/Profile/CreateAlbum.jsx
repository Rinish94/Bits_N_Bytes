import Navbar from '../Navbar/Navbar'
import axios from 'axios';
import React, { useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const initState = {
    artist_name: "",
    no_of_songs: "",
    artist_photo: "",
    artist_logo: ""
}



export default function CreateAlbum() {
    const [contact, setContact] = React.useState(initState)
    const [store, setStore] = React.useState([])
    const url = `http://localhost:5000/createAlbum`;
    //   const classes = useStyles();
    let history=useHistory();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value })
    }

    const fetchTodos = () => {
        axios
            .get(url)
            .then((res) => {
                const data = res.data;
                setStore(data);
            })
            .catch((error) => console.log(error));
    };

    const handleAdd = () => {
        const payload = {
            artist_name: contact.artist_name,
            no_of_songs: contact.no_of_songs,
            artist_photo: contact.artist_photo,
            artist_logo: contact.artist_logo

        }

        axios
            .post(url, payload)
            .then(function (response) {
                console.log(response);
                setStore(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        // setStore([...store, payload])
        setContact({
            artist_name: "",
            no_of_songs: "",
            artist_photo: "",
            artist_logo: ""
        })
        alert("Album Successfully Created")
        history.push("/guest")
    }




    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            <Navbar />
            <br /><br /><br />
            <h1>
                Create Album
            </h1>
            <TextField type="text" value={contact.artist_name} name="artist_name" onChange={handleChange} id="filled-basic" label="Enter Name of Artist" variant="filled" /><br /><br />
            <TextField type="text" value={contact.no_of_songs} name="no_of_songs" onChange={handleChange} id="filled-basic" label="No of songs" variant="filled" /><br /><br />
            <TextField type="text" value={contact.artist_photo} name="artist_photo" onChange={handleChange} id="filled-basic" label="artist_photo" variant="filled" /><br /><br />
            <TextField type="text" value={contact.artist_logo} name="artist_logo" onChange={handleChange} id="filled-basic" label="logo of artist" variant="filled" /><br /><br />

            <Button onClick={handleAdd} variant="contained" color="primary">
                Create Album
            </Button>
            {/* <div>
                {store.map((item =>
                    <div>
                        {`${item.name}`}
                        {`${item.email}`}
                        {`${item.phone}`}
                    </div>
                ))}
            </div> */}
        </div>
    )
}