
interface HeroProps {
    title: string;
}

const Hero = ({title}: HeroProps) => {
    return(
        <div className="font-bold text-6xl md:text-9xl xl:text-[256px] border-y-2 text-center px-1">{title}</div>
    )
}

export default Hero