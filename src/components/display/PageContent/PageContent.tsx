import { PageContentRoot } from "./PageContent.styles";
import { ReactNode } from "react";
import { CSSProperties } from "styled-components";

export interface PageContentProps {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}

export default function PageContent(props: PageContentProps): JSX.Element {
    return <PageContentRoot {...props} />;
}
