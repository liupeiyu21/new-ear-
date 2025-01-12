import React from "react";
import { useEffect, useState } from "react";
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
    const [ isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // 画面サイズ変更時にスマホ判定を更新
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 428);
        };
    
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    
      // 表示するレビューを制御
      const displayedReviews = isMobile ? usersItems.slice(0, 1) : usersItems;
    
    return(
        <div className="users">
            <img className="sp-users" src={UsersIcon} alt="" />
            <div className="users-title">
                <h2 className="users-so"><span ><img className="users-span" src={UsersIcon} alt="キャラクター" /></span>総合レビュー</h2>
                <p>もっと見る</p>
            </div>
            <UsersList items={displayedReviews} />
            {/* <div className="users-btns">
            <button className="users-review-brn">もっと見る</button>
            </div> */}
        </div>
    )
}

export default UsersReview;