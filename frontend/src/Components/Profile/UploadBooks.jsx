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
import FormControl from "@material-ui/core/FormControl";
import { useSelector } from "react-redux";
// import { BeatLoader } from "react-spinners";
import("./UploadBooks.css");
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
  image2: "",
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
  const file = React.useRef();
  const [store, setStore] = React.useState([]);
  const [loading, isLoading] = React.useState(false);
  const [imgStatus, setImgStatus] = React.useState(false);
  const user = useSelector((state) => state.auth.currentUser);
  // console.log(user._id);
  const url = `http://localhost:8811/book/add`;
  let history = useHistory();
  const handleImageAdd = (e) => {
    // const { name, value } = e.target;
    // ({ file, [name]: e.target.files[0] });
    setImgStatus(true);
    console.log(file.current.files[0]);
  };
  var ImageData = "";
  const handleImage = async () => {
    isLoading(true);
    var bodyFormData = new FormData();
    bodyFormData.append("image", file.current.files[0]);
    axios
      .post("http://localhost:8811/upload", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      .then(function (response) {
        //handle success
        ImageData = response.data.data.image;
        isLoading(false);
        console.log(ImageData);
      })
      .catch(function (response) {
        //handle error
        isLoading(false);
        console.log(response);
      });
  };

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
      image2: ImageData,
      description: contact.description,
      sharing_status: contact.sharing_status,
      charity: contact.charity,
      seller_name: user._id,
    };
    console.log(payload);

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
      image2: "",
      description: "",
      sharing_status: false,
      charity: false,
      seller_name: "",
    });
    console.log(payload);
    alert("Book Successfully Donate");
    // history.push("/guest");
    setImgStatus(false)
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <Navbar />
      <br />
     
      <br />
      <h1>Add Book Details</h1>
      <div className="inputBox">
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
            <MenuItem value="comics">Comics</MenuItem>
            <MenuItem value="programming">Programming</MenuItem>
            <MenuItem value="religious">Religious</MenuItem>
            <MenuItem value="educational">Education</MenuItem>
            <MenuItem value="romatic">Romantic</MenuItem>
            <MenuItem value="thriller">Thriller</MenuItem>
          </Select>
        </FormControl>
       
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
        
       <div className="imageDataBox">
       <input
          type="file"
          name="image"
          id="file"
          ref={file}
          // value={file.image}
          accept="png || jpg"
          multiple
          onChange={handleImageAdd}
          placeholder="upload book image"
        />
        <Button onClick={handleImage}>Upload</Button>
       </div>
        <br />
       
        <Button disabled={loading} onClick={handleAdd} variant="contained" color="primary">
          Add Book
        </Button>
      </div>
    </div>
  );
}
