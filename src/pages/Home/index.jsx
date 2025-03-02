    import { Layout } from "../../components/Layout"
    import background from "../../assets/ENVIFO.png";

    const Home = () => {
        return (
    <Layout>
        <div classname="flex flex-col items-center justify-center main-h-screem bg-white">
            <div classname="mb-8 flex flex-col items-center">
            <img src={background} alt="Background" className="w-40 h-40" />
            </div>
        </div>
    </Layout>
        )
    }

export { Home }