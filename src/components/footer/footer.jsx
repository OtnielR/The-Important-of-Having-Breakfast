import { HashLink } from 'react-router-hash-link';

export default function Footer() {
    const links = {
        "Home": "/#header",
        "Thesis": "/#thesis",
        "Argumentasion": "/#argumentasion",
        "Conclusion": "/#conclusion",
        "Foods": "/#foods"
    }


    return (<>
        <div className="w-full bg-[#F8EFD8] py-12">
            <div className="flex flex-col xl:flex-row">
                <div className="flex flex-col gap-4 w-full xl:w-2/4 px-16 py-8  xl:border-r-2 border-[#C9C9B5] ">
                    <h1 className="w-2/3 text-3xl text-[#002922]">Thank you for visiting our website</h1>
                    <p className="text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate in rem natus voluptatum commodi dolores qui odit expedita? Animi quam consectetur dicta beatae et excepturi adipisci perferendis dolores officiis? Adipisci?</p>
                </div>
                <div className="flex flex-col gap-4 w-full xl:w-1/4  px-16 py-8  border-r-2 border-[#C9C9B5] ">
                    <h1 className="w-2/3 text-3xl text-[#002922] ">Links</h1>
                    <div className="flex flex-col gap-2 xl:gap-6 ">
                        {Object.entries(links).map(([key, value]) => {
                            return <HashLink className="text-xl tracking-wider transition-all duration-400 hover:text-[#b92e2d] hover:underline" smooth to={value}>{key}</HashLink>
                        })}
                    </div>

                </div>
                <div className="flex flex-col gap-4 w-full xl:w-1/4  px-16 py-8  border-r-2 border-[#C9C9B5] ">
                    <h1 className="w-2/3 text-3xl text-[#002922]">Contact Us</h1>
                    <p className="text-xl">Phone: 123-456-789</p>
                    <p className="text-xl">Phone: 123-456-789</p>

                </div>

            </div>
        </div>
    </>)
}
