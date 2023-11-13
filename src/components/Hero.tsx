
interface HeroProps {
    title: string;
}

const Hero = ({title}: HeroProps) => {
    return(
        <div className="font-bold text-[243.8px] border-t-2 border-b-2 text-center px-1">{title}</div>
    )
}

export default Hero