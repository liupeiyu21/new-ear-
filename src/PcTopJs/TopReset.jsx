import PcTop from "/pc-top.png"

import React, { useState, useEffect } from "react";

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // スクロール位置を監視
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // 上部に戻る関数
    const scrollToTop = () => {
        window.scrollTo({
            top: 0, // ページトップ
            behavior: "smooth", // スムーズスクロール
        });
    };

    return (
        <div>
            {isVisible && (
                <img 
                className="top-reset"
                src={PcTop} 
                alt=""
                onClick={scrollToTop} 
                />
            )}
        </div>
    );
}

export default ScrollToTopButton;
