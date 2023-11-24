import React, { ReactNode } from "react";
import Header from "../components/Header";

interface LayoutProps {
    children: ReactNode;
}

const AboutLayout: React.FC<LayoutProps> = ({children}) => {
    return(
        <div className="flex flex-col w-full pl-5 pr-5">
            <Header/>
            <div className='flex flex-col items-center flex-grow gap-3'>
                {children}
            </div>
        </div>
    )
}

export default AboutLayout;