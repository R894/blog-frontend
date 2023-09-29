import Content from '../components/Posts/Posts';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const HomePage = () => {
    return(
        <>
            <Header/>
            <div className='content'>
                <h1>Home</h1>
                <Content></Content>
            </div>
            <Footer/>
        </>
    );
}

export default HomePage;
