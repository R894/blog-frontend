import RegisterForm from '../components/RegisterForm/RegisterForm';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const LoginPage = () => {
    return(
        <>
            <Header/>
            <div className='content'>
                <RegisterForm/>
            </div>
            <Footer/>
        </>
    );
}

export default LoginPage;