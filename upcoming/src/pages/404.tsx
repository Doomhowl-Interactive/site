import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import PageLayout from "../layout";

const NotFoundPage: React.FC<PageProps> = () => {
    return (
        <PageLayout>
            <h1>404 - This content doesn't exist or is no longer available.</h1>
        </PageLayout>
    );
};

export default NotFoundPage;
