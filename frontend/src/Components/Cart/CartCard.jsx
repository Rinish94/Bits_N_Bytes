import React from "react";
import {Link} from "react-router-dom";

export const CartCard=({el,handleRemove})=>{
    return(
        <>
        <div style={{width:440,margin:"auto",display:"flex",justifyContent:"flex-start",paddingBottom:20,paddingTop:"10%",borderBottom:"1px solid silver"}}>
            <div style={{margin:"auto"}}>
                <img style={{width:100,height:100,marginLeft:-65,marginTop:-20}} src={el.image} alt ="cart img"/>
            </div>
            <div style={{marginLeft:-35}}>
                <Link to={"/"} style={{textDecoration:"none",color:"black"}}>
                <div style={{fontSize:13,fontWeight:"bold",marginRight:10,width:290,height:"auto"}}>
                    {el.book_name}
                </div>
                </Link>
                <div style={{fontSize:13,fontWeight:"bold"}}>
                    {el.author_name}
                </div>
                <div style={{display:"flex",marginTop:20}}>
                    <div>
                        {/* <p style={{fontSize:13,margin:0,color:"grey"}}>Retail Price{" "}</p>{" "} */}
                        <p style={{fontSize:13,margin:0,fontWeight:"bold",color:"grey"}}>Offer Price</p>{" "}
                    </div>
                    <div>
                        {/* <p style={{fontSize:13,margin:0,marginLeft:30}}>{" "} ₹ {" "}<s>{el.actual_price}</s></p> */}
                        <p style={{fontSize:14,margin:0,marginLeft:30,fontWeight:"bold"}}>{" "} ₹ {" "}{el.price}</p>
                    </div>
                </div>
                <div style={{marginTop:15}}>
                    <div>
                        <u  style={{fontSize:13,margin:0,marginLeft:100,cursor:"pointer"}}>Move To Wishlist</u>{" "}{" "}
                        <u onClick={()=>handleRemove(el.id)} style={{fontSize:13,margin:0,marginLeft:20,cursor:"pointer"}}>Remove</u>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}