import { Layout } from "../../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="flex-grow flex items-center justify-center bg-white">
        <img src="/404.jpg" alt="Not Found" className=" h-80 object-contain" />
      </div>
    </Layout>
  );
};

export { NotFound };
