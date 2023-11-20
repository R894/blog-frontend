
import Hero from '../components/Hero';
import Posts from '../features/Posts';
import Layout from '../layouts/Layout';


const HomePage = () => {
    return(
        <>
            <Layout>
                <Hero title="THE BLOG"/>
                <Posts/>
            </Layout>
        </>
    );
}

export default HomePage;
