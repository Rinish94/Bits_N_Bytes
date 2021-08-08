import Navbar from "../Navbar/Navbar";
import axios from "axios";
import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import {useSelector} from "react-redux"
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 227,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const initState = {
  book_name: "",
  author_name: "",
  book_type: "",
  price: 0,
  image: "",
  description: "",
  sharing_status: false,
  charity: false,
  seller_name: "",
};

// const imageInitstate = {
//   image: "",
// };
export default function UploadBooks() {
  const classes = useStyles();
  const [contact, setContact] = React.useState(initState);
  // const [file, setFile] = React.useState(imageInitstate);
  const [store, setStore] = React.useState([]);
  const user = useSelector((state)=>state.auth.currentUser)
  console.log(user._id)
  const url = `http://localhost:8811/book/add`;
  let history = useHistory();
  // const handleImageAdd = (e) => {
  //   const { name, value } = e.target;
  //   setFile({ ...file, [name]: value });
  //   // console.log(file)
  // };

  // const handleImage = async () => {
  //   console.log(file);
  //   var bodyFormData = new FormData();
  //   bodyFormData.append('image', file.image)
  //   axios({
  //     method: "post",
  //     url: "http://localhost:8811/upload",
  //     data: bodyFormData,
  //     headers: { "Content-Type": "multipart/form-data" },
  //   })
  //     .then(function (response) {
  //       //handle success
  //       console.log(response);
  //     })
  //     .catch(function (response) {
  //       //handle error
  //       console.log(response);
  //     });
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
    // console.log(contact)
  };

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
      book_name: contact.book_name,
      author_name: contact.author_name,
      book_type: contact.book_type,
      price: contact.price,
      image: contact.image,
      description: contact.description,
      sharing_status: contact.sharing_status,
      charity: contact.charity,
      seller_name: user._id,
    };

    axios
      .post(url, payload)
      .then(function (response) {
        console.log(response);
        setStore(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    setStore([...store, payload]);
    setContact({
      book_name: "",
      author_name: "",
      book_type: "",
      price: 0,
      image: "",
      description: "",
      sharing_status: false,
      charity: false,
      seller_name: "",
    });
    console.log(payload);
    alert("Book Successfully Donate");
    history.push("/guest");
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <h1>Add Book Details</h1>
      <TextField
        type="text"
        value={contact.book_name}
        name="book_name"
        onChange={handleChange}
        id="filled-basic"
        label="enter name of book"
        variant="filled"
      />
      <br />
      <br />
      <TextField
        type="text"
        value={contact.author_name}
        name="author_name"
        onChange={handleChange}
        id="filled-basic"
        label="enter author name"
        variant="filled"
      />
      <br />
      <br />
      <TextField
        type="text"
        value={contact.price}
        name="price"
        onChange={handleChange}
        id="filled-basic"
        label="enter amount"
        variant="filled"
      />
      <br />
      <br />
      <TextField
        type="text"
        value={contact.description}
        name="description"
        onChange={handleChange}
        id="filled-basic"
        label="enter description"
        variant="filled"
      />
      <br />
      <br />
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">enter book type</InputLabel>
        <Select
          name="book_type"
          label="enter book type"
          id="demo-simple-select"
          value={contact.book_type}
          onChange={handleChange}
        >
          <MenuItem value="sci-fi">Sci-Fi</MenuItem>
          <MenuItem value="Comics">Comics</MenuItem>
          <MenuItem value="programming">Programming</MenuItem>
          <MenuItem value="religious">Religious</MenuItem>
          <MenuItem value="education">Education</MenuItem>
          <MenuItem value="romatic">Romantic</MenuItem>
          <MenuItem value="thriller">Thriller</MenuItem>
        </Select>
      </FormControl>
      <br />
      <br />
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">
          enter sharing type
        </InputLabel>
        <Select
          name="charity"
          label="enter sharing type"
          id="demo-simple-select"
          value={contact.charity}
          onChange={handleChange}
        >
          <MenuItem value={true}>Charity</MenuItem>
          <MenuItem value={true}>Pre-owned</MenuItem>
        </Select>
      </FormControl>
      <br />
      <br />
      {/* <input
        type="file"
        name="image"
        id="file"
        value={file.image}
        accept="png || jpg"
        multiple
        onChange={handleImageAdd}
        placeholder="upload book image"
      />
      <button onClick={handleImage}>Upload</button> */}
      <br />
      <br />
      <Button onClick={handleAdd} variant="contained" color="primary">
        Add Book
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
  );
}
