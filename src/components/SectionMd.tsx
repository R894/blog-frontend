import { ReactNode } from "react";

interface SectionProps {
    title: string;
    children: ReactNode;
}

const SectionMd: React.FC<SectionProps> = ({title, children}) => {
    return (
    <div className="max-w-md flex flex-col gap-8">
        <h2 className="font-main text-4xl">{title}</h2>
        <div>{children}</div>
    </div>
    );
};

export default SectionMd;