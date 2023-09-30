import React, { ReactNode } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return(
        <>
            <Header/>
            <div className='content'>
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default Layout;