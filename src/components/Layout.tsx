import { ReactNode } from "react";
import WhatsappConnect from "./WhatsappConnect";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <>
        {children}
        <WhatsappConnect />
    </>;
};

export default Layout;
