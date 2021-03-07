import React from 'react';
import cx from "classnames"
import './index.css';

const SmallLoader = ({ type }) => {
    return (
        <div className={
            cx("small-loader",
                { "auth-loader": type === "auth" }
            )}>
            <div className={
                cx("loader",
                    { "loader-login": type === "auth" }
                )}>
            </div>
        </div>
    );
}

export default SmallLoader;