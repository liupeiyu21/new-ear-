import React from "react";
import UsersList from "./UsersList";

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
            <h2 className="users-so">総合レビュー</h2>
            <UsersList items={usersItems} />
            <div className="users-btns">
            <button className="users-review-brn">もっと見る</button>
            </div>
        </div>
    )
}

export default UsersReview;