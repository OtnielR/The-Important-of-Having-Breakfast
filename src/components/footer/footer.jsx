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
            <div className="flex flex-col xl:flex-row gap-8 md:gap-0">
                <div className="flex flex-col gap-4 w-full xl:w-2/4 px-8 py-4 md:px-16 md:py-8  xl:border-r-2 border-[#C9C9B5] ">
                    <h1 className="w-full md:w-2/3 text-2xl md:text-3xl text-[#002922]">Thank you for visiting our website</h1>
                    <p className="text-lg md:text-xl">Thank you for spending your time with us. Remember, breakfast is not just a meal, it's a moment to refuel your body abd refresh your mind before the day begin</p>
                </div>
                <div className="flex flex-col gap-4 w-full xl:w-1/4 px-8 md-4  md:px-16 md:py-8  border-r-2 border-[#C9C9B5] ">
                    <h1 className="w-2/3 text-2xl md:text-3xl text-[#002922] ">Links</h1>
                    <div className="flex flex-col gap-2 xl:gap-6 ">
                        {Object.entries(links).map(([key, value]) => {
                            return <HashLink className="text-lg md:text-xl tracking-wider transition-all duration-400 hover:text-[#b92e2d] hover:underline" smooth to={value}>{key}</HashLink>
                        })}
                    </div>

                </div>
                <div className="flex flex-col gap-4 w-full xl:w-1/4 px-8 py-4 md:px-16 md:py-8  border-r-2 border-[#C9C9B5] ">
                    <h1 className="w-2/3 text-lg md:text-3xl text-[#002922]">Contact Us</h1>
                    <p className="text-lg md:text-xl">Phone: 0851-7988-6159</p>
                    <p className="text-lg md:text-xl">Gmail: dennisotniel1@gmail.com</p>

                </div>

            </div>
        </div>
    </>)
}
