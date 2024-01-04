import { Link } from "gatsby";
import * as React from "react";

const links = {
    Home: "/",
    Games: "/games",
};

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul>
                {Object.entries(links).map(([text, to]) => (
                    <li key={text}>
                        <Link to={to}>{text}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

const PageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main>{children}</main>
            <footer>footer</footer>
        </>
    );
};

export default PageLayout;
