import Layout from '../layouts/Layout';
import GetPost from '../components/GetPost/GetPost';
import Comments from '../components/Comments/Comments';

const GetPostsPage = () => {
    return(
        <>
            <Layout>
                <GetPost/>
                <Comments/>
            </Layout>
        </>
    );
}

export default GetPostsPage;
