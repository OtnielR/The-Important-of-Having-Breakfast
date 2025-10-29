import { useState, useEffect } from "react"
import thesisBreakfast from "/thesis-breakfast.webp"
import leaf3 from "/leaf-3.webp"


export default function Thesis() {
    const [scroll, setScroll] = useState({ scroll: 0 })

    useEffect(() => {
        const handleScroll = () => {
            setScroll({ scroll: (window.scrollY / window.innerHeight) })
        }

        document.addEventListener("scroll", handleScroll)

        return () => document.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <div id="thesis">
                <div className="bg-[#F8EFD8] xl:bg-[#FFFAEE]">

                    <div className="relative px-8 md:px-16 py-24">
                        <div className="absolute hidden xl:block w-10/12 h-full bg-[#F8EFD8] rounded-lg top-0 right-8 z-0">

                        </div>
                        <div className="flex flex-col xl:flex-row items-center gap-16  w-full z-20">
                            <div className="w-full md:w-3/5 xl:w-1/3 z-20 relatif">
                                <img src={thesisBreakfast} className="h-full xl:w-full xl:h-auto select-none transition-transform transform-none duration-25" alt="" style={{ transform: `translateY(${(scroll.scroll - .5) * -100}px)` }} />
                            </div>
                            <div className="flex-1 flex flex-col gap-8 z-20">
                                <p className="hidden text-xl text-[#b92e2d] font-bold tracking-tight">Thesis</p>
                                <h1 className="w-full text-5xl text-[#002922]">WHY BREAKFAST IS IMPORTANT</h1>
                                <p className="w-full text-lg">Breakfast is one of the most important meals of the day because it provides the energy and nutrients our body and brain need to function well. Although some people skip breakfast due to busy schedules or dieting, this habit can harm both physical and mental health. Therefore, everyone should make breakfast a regular and healthy routine.</p>
                                <div className="w-full flex gap-6">
                                    <div className="flex flex-col items-center justify-center">
                                        <h1 className="w-full text-[#b92e2d] text-6xl text-center">63%</h1>
                                        <h1 className="w-full text-[#002922] text-lg text-center tracking-wider">Adults skip breakfast regularly</h1>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <h1 className="w-full text-[#b92e2d] text-4xl md:text-6xl text-center">25%</h1>
                                        <h1 className="w-full text-[#002922] text-lg text-center tracking-wider">Teens skip breakfast on school days</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden xl:block w-1/6 z-20">
                                <img src={leaf3} className="w-full" alt="" />
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}
