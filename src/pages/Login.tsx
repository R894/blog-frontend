import LoginForm from "../features/Authentication/LoginForm";
import Layout from "../layouts/Layout";

const LoginPage = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-grow justify-center items-center">
          <LoginForm />
        </div>
      </Layout>
    </>
  );
};

export default LoginPage;
