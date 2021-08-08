import React from 'react'
import style from "./Footer.module.css"
export const Footer = () => {
    return (
        <div className={style.container}>
            <div className={style.Logobox}>
                <img src="https://mypustak-5.s3.ap-south-1.amazonaws.com/uploads/icons/MyPustakLogo.png" alt="pic" />
                <p>All rights reserved To @Pushtak.com</p>
            </div>
            <div className={style.contentBox}>
                <p>Home</p>
                <p>BookList</p>
                <p>Profile</p>

            </div>
            <div className={style.socialBox}>
                <p style={{marginRight:"80px"}}>Social Platforms</p>
                <div>
                    <img style={{ marginLeft: "40px" }} src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19754.png" alt="pic" />
                    <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="pic" />
                    <img src="http://assets.stickpng.com/images/5ecec78673e4440004f09e77.png" alt="pic" />
                    <img src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c545.png" alt="pic" />
                    <img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png" alt="pic" />
                </div>

            </div>
        </div>
    )
}