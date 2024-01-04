import { PageProps } from "gatsby";
import * as React from "react";
import PageLayout from "../layout";

const GamesPage: React.FC<PageProps> = () => {
    return (
        <PageLayout>
            <main>making games, taking names</main>
        </PageLayout>
    );
};

export default GamesPage;
export { Head } from "../head";
