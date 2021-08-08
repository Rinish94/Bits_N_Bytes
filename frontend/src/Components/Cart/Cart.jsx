import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, saveData } from "../../Utils/LocalStorage";
// import { fetchInCart } from "../../Redux/FireAuth/fireAction";
import { CartCard } from "./CartCard";
// import { addToCart } from "../IndividualPage/IndividualAction";
// import { finalCartSuccess } from "../../Redux/FireAuth/fireAction";
import { MyCartEmptyCard } from "../Cart/MyCartEmptyCard";
import { Link } from "react-router-dom";
import axios from "axios"
import swal from "sweetalert";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {clearData} from "../../Utils/LocalStorage"

export const CartView = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const isData = getData("books");
    const [cart, setCart] = React.useState([])
    let history = useHistory();

    // const [total, setTotal] = React.useState(0)
    var sum = 0
    // const dispatch = useDispatch();
    // const userId = useSelector((state) => state.fireReducer.userId);
    // const inCart = useSelector((state) => state.fireReducer.inCart);
    // const finalCart = useSelector((state) => state.fireReducer.finalCart);

    React.useEffect(()=>{
        console.log("Call") 
        axios.post("http://localhost:8811/book/cart", isData)
        .then(res => setCart(res.data.data))
        .catch(err => console.log(err))
    },[])

    const handlePay = async() =>{
        await swal({
            title: "Order Placed!!!",
            text: "Item will be delivered shortly",
            icon: "success",
        });
        clearData()
        setCart([])
        history.push("/");
    }

    const handleRemove = (id) => {
        // let cartItem = finalCart?.filter((el) => {
        //     if (el.id !== id) {
        //         return el;
        //     }
        // });
        // dispatch(finalCartSuccess(cartItem));
        // if (userId !== undefined || userId !== "") {
        //     dispatch(addToCart(userId, cartItem));
        // }
        // saveData("finalCart", cartItem);
    };

    // React.useEffect(() => {
    //     if (isAuth === true) {
    //         dispatch(fetchInCart(userId));
    //     }
    // }, [finalCart]);

    return (
        <>
            {cart?.length > 0 ? (
                cart.map((el) => {
                    // setTotal(total + el.price)
                    sum+= el.price

                    return <CartCard handleRemove={handleRemove} el={el} />;
                })
            ) : isData?.length > 0 ? (
                isData.map((el) => {
                    return <CartCard handleRemove={handleRemove} el={el} />;
                })
            ) : (
                <MyCartEmptyCard />
            )}
            <div>
                <strong>Total To Pay: ₹{sum}</strong>
            </div>
            {cart?.length > 0 && isAuth? (
                    <Button 
                        onClick={handlePay}
                        style={{
                            backgroundColor: "#e96a19",
                            border: "none",
                            minHeight: "6.5%",
                            maxHeight: "15.5%",
                            color: "white",
                            fontWeight: "500",
                            marginLeft: "3.5%",
                            marginTop: 30,
                            textAlign: "center",
                            paddingBottom: 15,
                            paddingLeft: 50,
                            paddingRight: 50,
                            textDecoration: "none",
                            paddingTop: 15,
                            marginBottom: "2%",
                        }}

                    >
                        {" "}
                        PROCEED TO PAY SECURELY{" "}
                    </Button>
            ) : 
            <Button 
            style={{
                backgroundColor: "#e96a19",
                border: "none",
                minHeight: "6.5%",
                maxHeight: "15.5%",
                color: "white",
                fontWeight: "500",
                marginLeft: "3.5%",
                marginTop: 30,
                textAlign: "center",
                paddingBottom: 15,
                paddingLeft: 50,
                paddingRight: 50,
                textDecoration: "none",
                paddingTop: 15,
                marginBottom: "2%",
            }}

        >
            {" "}
            Login to place order{" "}
        </Button>
            }
        </>
    );
};