
import Hero from '../components/Hero';
import Posts from '../features/Posts';
import Layout from '../layouts/Layout';


const HomePage = () => {
    return(
        <>
            <Layout>
                <Hero/>
                <Posts/>
            </Layout>
        </>
    );
}

export default HomePage;
