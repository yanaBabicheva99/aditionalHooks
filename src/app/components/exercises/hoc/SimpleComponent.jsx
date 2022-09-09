import React from "react";
import PropTypes from "prop-types";
const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <div>
            {
                !isAuth ? <button className="btn btn-primary" onClick={onLogin}>Войти</button>
                        : <button className="btn btn-primary" onClick={onLogOut}>Выйти из системы</button>
            }
        </div>
    );
};
SimpleComponent.propTypes = {
    isAuth: PropTypes.string,
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func
};
export default SimpleComponent;
