import { useState, useEffect } from "react"
import thesisBreakfast from "/thesis-breakfast.webp"


export default function Thesis() {
    const [scroll, setScroll] = useState({ scroll: 0 })

    useEffect(() => {
        const handleScroll = () => {
            setScroll({ scroll: (window.scrollY / window.innerHeight) })
        }

        document.addEventListener("scroll", handleScroll)

        return () => document.removeEventListener("scroll", handleScroll)
    }, [])

    console.log(scroll)
    return (
        <>
            <div className="relative px-12 py-24">
                <div className="absolute w-10/12 h-full bg-[#F8EFD8] rounded-lg top-0 right-8 z-0">

                </div>
                <div className="flex items-center gap-28 flex-row w-full z-20">
                    <div className="w-1/3 z-20 relatif">
                        <img src={thesisBreakfast} className=" w-full select-none transition-transform duration-25" alt="" style={{ transform: `translateY(${(scroll.scroll - .5) * -100}px)` }} />
                    </div>
                    <div className="flex-1 flex flex-col gap-8 z-20">
                        <p></p>
                        <h1 className="w-2/3 text-5xl text-[#002922]">WHY BREAKFAST IS IMPORTANT</h1>
                        <p className="w-2/3 text-lg">Breakfast is one of the most important meals of the day because it provides the energy and nutrients our body and brain need to function well. Although some people skip breakfast due to busy schedules or dieting, this habit can harm both physical and mental health. Therefore, everyone should make breakfast a regular and healthy routine.</p>
                        <div className="w-2/3 flex gap-6">
                            <div className="flex flex-col items-center justify-center">
                                <h1 className="w-full text-[#b92e2d] text-6xl text-center">63%</h1>
                                <h1 className="w-full text-[#002922] text-xl text-center tracking-wider">Adults skip breakfast regularly</h1>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h1 className="w-full text-[#b92e2d] text-6xl text-center">25%</h1>
                                <h1 className="w-full text-[#002922] text-xl text-center tracking-wider">Teens skip breakfast on school days</h1>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
