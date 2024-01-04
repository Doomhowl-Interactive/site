import { HeadFC } from "gatsby";
import * as React from "react";

export const Head: HeadFC = ({ location, params, data, pageContext }) => {
    let title = "Doomhowl Interactive - Solo developer's game studio";
    if (location.pathname != "/") {
        title = `${location.pathname} - Doomhowl Interactive`;
    }

    return (
        <>
            <title>{title}</title>
        </>
    );
};
