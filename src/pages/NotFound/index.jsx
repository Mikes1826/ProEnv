import { Layout } from "../../components/Layout";


const NotFound = () => {
    return (
        <Layout>
            <div className=" flex flex-1 flex-col items-center justify-center">
            <div class="relative flex item-center justify-center w-64 h-64 border-4 border-black rounded-full">
                <h1 className=" absolute justify-center item-center font-bold">404</h1>
            </div>
            <p className="text 2x1 font-bold mt-4">Page Not Found</p>
            </div>
        </Layout>
    );
};

export { NotFound };