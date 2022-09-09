import React, { useEffect, useRef, useState, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withoutCallback = useRef(0);
    const withCallback = useRef(0);

    const handleChange = ({ target }) => {
       setData(prevState => ({ ...prevState, [target.name]: target.value }));
    };

    const validateWithoutCallback = (data) => {
        console.log(data);
    };

    useEffect(() => {
        withoutCallback.current++;
    }, [validateWithoutCallback]);

    const validateWithCallback = useCallback((data) => {
            console.log(data);
    }, []);

    useEffect(() => {
       validateWithoutCallback(data);
       validateWithCallback(data);
    }, [data]);

    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>withoutCallback: {withoutCallback.current}</p>
            <p>withCallback: {withCallback.current}</p>
            <label className="form-label" htmlFor="email">
                Email
            </label>
            <input
                value={data.email || ""}
                type="email"
                name="email"
                className="form-control"
                id="email"
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
