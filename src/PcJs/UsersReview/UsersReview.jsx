import React from "react";
import UsersList from "./UsersList";
import UsersIcon from "/top-users.png"

const usersItems = [

    {
        brand: "ブランド名",
        title: "商品の名前",
        category: "カテゴリー分類",
        description: "スタッフのレビュー文",
        usersName: "ユーザーのアカウント名",     
    },
    {
        brand: "ブランド名",
        title: "商品の名前",
        category: "カテゴリー分類",
        description: "スタッフのレビュー文",
        usersName: "ユーザーのアカウント名",     
    },
    {
        brand: "ブランド名",
        title: "商品の名前",
        category: "カテゴリー分類",
        description: "スタッフのレビュー文",
        usersName: "ユーザーのアカウント名",     
    },
    {
        brand: "ブランド名",
        title: "商品の名前",
        category: "カテゴリー分類",
        description: "スタッフのレビュー文",
        usersName: "ユーザーのアカウント名",     
    }

];

const UsersReview = () => {
    return(
        <div className="users">
            <div className="users-title">
            <h2 className="users-so"><span ><img className="users-span" src={UsersIcon} alt="キャラクター" /></span>総合レビュー</h2>
            <p>もっと見る</p>
            </div>
            <UsersList items={usersItems} />
            {/* <div className="users-btns">
            <button className="users-review-brn">もっと見る</button>
            </div> */}
        </div>
    )
}

export default UsersReview;