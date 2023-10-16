import Layout from '../layouts/Layout';
import GetPost from '../components/GetPost/GetPost';
import Comments from '../components/Comments/Comments';
import CreateComment from '../components/CreateComment';

const GetPostsPage = () => {
    return(
        <>
            <Layout>
                <GetPost/>
                <Comments/>
                <CreateComment/>
            </Layout>
        </>
    );
}

export default GetPostsPage;
