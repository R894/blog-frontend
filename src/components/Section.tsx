import { ReactNode } from "react";

interface SectionProps {
    title: string;
    children: ReactNode;
}

const Section: React.FC<SectionProps> = ({title, children}) => {
    return (
    <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <div>{children}</div>
    </div>
    );
};

export default Section;