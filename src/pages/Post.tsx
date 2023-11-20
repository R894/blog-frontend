import Layout from '../layouts/Layout';
import GetPost from '../features/Posts/GetPost';
import Comments from '../features/Comments';
import CreateComment from '../features/Comments/CreateComment';

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
