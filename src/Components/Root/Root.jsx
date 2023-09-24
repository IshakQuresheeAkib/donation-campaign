import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <h1>Hello</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;