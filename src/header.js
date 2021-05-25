import "./App.css";
import React from "react";

const Header = () => {
    return (
        <header className="HOME_header">
            <div className="header_con1">
                <p className="con1_text">KoreaUniv KUCc</p>
                <div className="right">
                    <button className="btn_login">LOGIN</button>
                    <button className="btn_signin">SIGN in</button>

                </div>
            </div>
        </header>
    );
};
export default Header;