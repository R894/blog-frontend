import LoginForm from '../components/LoginForm/LoginForm';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const LoginPage = () => {
    return(
        <>
            <Header/>
            <div className='content'>
                <LoginForm/>
            </div>
            <Footer/>
        </>
    );
}

export default LoginPage;