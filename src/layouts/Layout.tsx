import React, { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return(
        <div className="flex flex-col w-5/6">
            <Header/>
            <div className='flex flex-col flex-grow gap-3'>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;