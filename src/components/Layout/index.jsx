const Layout = ({children}) => {
    return (
        <div className="flex flex-col w-[100%] h-[100vh]" >
            <div className="flex flex-col w-[100%] h-[80vh]flex-1 p-3">
                {children}
            </div>
            <div className="block w-[100%] h-[20vh] bg-gradient-to-t from-[#ed7304] to-[#ffff]">
            </div>
        </div>
    )
}

export { Layout }