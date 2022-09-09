import React, { useState } from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (Component) => {
    return (props) => {
        const [open, setOpen] = useState(false);

        const isAuth = localStorage.getItem("auth");

        const handleLogin = () => {
            localStorage.setItem("auth", "token");
            setOpen(!open);
        };

        const handleLogOut = () => {
            localStorage.removeItem("auth");
            setOpen(!open);
        };

        return (
            <CardWrapper>
                <Component { ...props } isAuth={isAuth} onLogin={handleLogin} onLogOut={handleLogOut}/>
            </CardWrapper>
        );
    };
};

export default withFunctions;
