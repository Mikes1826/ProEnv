import { ReturnArrow } from "../../components/Icons"
import { Layout } from "../../components/Layout"
import { Logo } from "../../components/Logo"

const SignUp = () => {
    return (
        <Layout>
            <header className="flex items-center w-[100%] h-10 p-1">
                <nav className="w-[100%] h-full flex justify-around items-center ">
                    <div className="w-[60%] h-full flex gap-2">
                        <ReturnArrow/>
                        <p className="text-lg font-bold font-sans
                        ">
                            Registro
                        </p>
                    </div>
                    <div className="w-[30%] h-full flex justify-center items-center">
                        <Logo className="w-full h-[40px]"/>
                    </div>
                </nav>
            </header>
            <section className="flex flex-col p-4 ml-[10%] max-h-[500px] ">
                <p className="pl-3 text-orange-500 font-bold">Nombre</p>
                <input className="w-[90%] h-8 mt-2 p-2 border-2 bg-[#F0F0F0] border-orange-400  rounded-xl text-orange-500 font-semibold" type="text" />
                <p className="pl-3 text-orange-500 font-bold">Apellido</p>
                <input className="w-[90%] h-8 mt-2 p-2 border-2 bg-[#F0F0F0] border-orange-400  rounded-xl text-orange-500 font-semibold" type="text" />
                <p className="pl-3 text-orange-500 font-bold">Email</p>
                <input className="w-[90%] h-8 mt-2 p-2 border-2 bg-[#F0F0F0] border-orange-400  rounded-xl text-orange-500 font-semibold" type="text" />
                <p className="pl-3 text-orange-500 font-bold">Celular</p>
                <input className="w-[90%] h-8 mt-2 p-2 border-2 bg-[#F0F0F0] border-orange-400  rounded-xl text-orange-500 font-semibold" type="text" />
                <p className="pl-3 text-orange-500 font-bold">Contraseña</p>
                <input className="w-[90%] h-8 mt-2 p-2 border-2 bg-[#F0F0F0] border-orange-400  rounded-xl text-orange-500 font-semibold" type="password" />
                <p className="pl-3 text-orange-500 font-bold">Confirmar contraseña </p>
                <input className="w-[90%] h-8 mt-2 p-2 border-2 bg-[#F0F0F0] border-orange-400  rounded-xl text-orange-500 font-semibold" type="pasword" />

                <button className="w-[150px] h-10 mt-5 bg-orange-300 self-center rounded-xl">Registrar</button>
                <a href="" className="self-center text-sm">Ayuda</a>
            </section>
        </Layout>
    )
}

export { SignUp }