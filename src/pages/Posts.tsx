import Layout from '../layouts/Layout';
import Posts from '../components/Posts';
import Hero from '../components/Hero';

const PostsPage = () => {
    return(
        <>
            <Layout>
                <Hero title="THE BLOG"/>
                <Posts/>
            </Layout>
        </>
    );
}

export default PostsPage;
