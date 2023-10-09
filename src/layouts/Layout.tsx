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
            <div className='flex flex-col flex-grow mx-20 items-center gap-3'>
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default Layout;