import Layout from '../layouts/Layout';
import Posts from '../components/Posts';
import Hero from '../components/Hero';
import Pagination from '../components/Pagination';

const PostsPage = () => {
    return(
        <>
            <Layout>
                <Hero title="THE BLOG"/>
                <Posts/>
                <Pagination/>
            </Layout>
        </>
    );
}

export default PostsPage;
