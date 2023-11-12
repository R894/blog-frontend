import Posts from '../components/Posts';
import SearchBar from '../components/SearchBar';
import Layout from '../layouts/Layout';


const HomePage = () => {
    return(
        <>
            <Layout>
                <SearchBar placeholder='Search...'/>
                <Posts/>
            </Layout>
        </>
    );
}

export default HomePage;
