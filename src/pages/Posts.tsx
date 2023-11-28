import Layout from '../layouts/Layout';
import Posts from '../features/Posts';
import Hero from '../components/Hero';

const PostsPage = () => {
    return(
        <>
            <Layout>
                <Hero/>
                <Posts/>
            </Layout>
        </>
    );
}

export default PostsPage;
