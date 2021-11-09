const Footer = () => {
    return (
        <footer className="footer bg-green-900 relative pt-1 border-b-2 lg:mt-60">
            <div className="container mx-auto px-6">
                <div className="sm:flex sm:mt-8">
                    <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                        <div className="flex flex-col">
                            <span className="font-bold text-white uppercase mb-2">Footer header 1</span>
                            <span className="my-2"><a href="#" className="text-white text-md hover:text-indigo-700">link 1</a></span>
                            <span className="my-2"><a href="#" className="text-white text-md hover:text-indigo-700">link 1</a></span>
                            <span className="my-2"><a href="#" className="text-white text-md hover:text-indigo-700">link 1</a></span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2">Footer header 2</span>
                            <span className="my-2"><a href="#" className="text-white text-md hover:text-indigo-700">link 1</a></span>
                            <span className="my-2"><a href="#" className="text-white  text-md hover:text-indigo-700">link 1</a></span>
                            <span className="my-2"><a href="#" className="text-white text-md hover:text-indigo-700">link 1</a></span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2">Footer header 3</span>
                            <span className="my-2"><a href="#" className="text-white  text-md hover:text-indigo-700">link 1</a></span>
                            <span className="my-2"><a href="#" className="text-white  text-md hover:text-indigo-700">link 1</a></span>
                            <span className="my-2"><a href="#" className="text-white  text-md hover:text-indigo-700">link 1</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-6">
                <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
                    <div className="sm:w-2/3 text-center py-6">
                        <p className="text-sm text-white font-bold mb-2">
                            © 2020 
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;