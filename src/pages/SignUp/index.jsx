import { ReturnArrow } from "../../components/Icons"
import { Layout } from "../../components/Layout"

const SignUp = () => {
    return (
        <Layout>
            <header className="w-[100%] h-10 bg-yellow-400 p-1">
                <nav className="w-[100%] h-full flex justify-around items-center ">
                    <div className="w-[60%] h-full flex gap-2">
                        <ReturnArrow/>
                        <p className="text-lg font-bold font-sans
                        ">
                            Registro
                        </p>
                    </div>
                    <div className="w-[20%] h-full">
                        <img src="../" alt="" />
                    </div>
                </nav>
            </header>
        </Layout>
    )
}

export { SignUp }