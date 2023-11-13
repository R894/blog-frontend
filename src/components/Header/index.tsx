import Hero from "../Hero"
import Navbar from "../Navbar"

const Header = () => {
    return(
        <div className="py-5 flex flex-col gap-14">
            <Navbar title="Blog"/>
            <Hero title="THE BLOG"/>
        </div>
        
    )
}

export default Header