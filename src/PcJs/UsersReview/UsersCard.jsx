import React from "react";
import TopUsersReview from "/top-usersreview.png"

const UsersCard = ( {item} ) => {
    
    return(
        <>
        <div className="users-card">
            <img src={TopUsersReview} alt="ユーザーが撮った商品の写真です。" />
            <div className="users-card-content">

                <p className="users-star"></p>
               
                <p className="users-brand">{item.brand}</p>
                <p className="users-title">{item.title}</p>
                <p className="user-description">{item.description}</p>
                <p className="users-name">{item.usersName}</p>
            </div>
        </div>
        </>
       
    )
};

export default UsersCard;