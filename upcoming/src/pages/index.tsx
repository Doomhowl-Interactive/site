import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";

import PageLayout from "../layout";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <PageLayout>
            <h1>Hello world!</h1>
        </PageLayout>
    );
};

export default IndexPage;
export { Head } from "../head";
