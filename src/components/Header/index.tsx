import Hero from "../Hero"
import Navbar from "../Navbar"

const Header = () => {
    return(
        <div className="mx-20 p-5 flex flex-col gap-14">
            <Navbar/>
            <Hero title="THE BLOG"/>
        </div>
        
    )
}

export default Header