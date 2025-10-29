import { useState, useEffect } from "react"
import conclusionBreakfast from "/conclusion-breakfast.webp"
import leaf2 from "/leaf-2.webp"

export default function Conclusion() {
    const [motion, setMotion] = useState({ x: 0, y: 0, scroll: 0 })

    useEffect(() => {
        let target = { x: 0, y: 0, scroll: 0 }
        let current = { x: 0, y: 0, scroll: 0 }

        const handleMouseMove = (e) => {
            target.x = e.clientX / window.innerWidth - .5,
                target.y = e.clientY / window.innerHeight - .5
        }

        const handleScroll = () => {
            target.scroll = window.scrollY / window.innerHeight
        }

        const animate = () => {
            current.x += (target.x - current.x) * .1;
            current.y += (target.y - current.y) * .1;
            current.scroll += (target.scroll - current.scroll) * .1;
            setMotion({ ...current })
            requestAnimationFrame(animate)
        }

        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("scroll", handleScroll)
        requestAnimationFrame(animate)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])


    return (<>
        <div id="conclusion">
            <div className="relative px-4 py-6 md:py-12 md:px-6 xl:py-16">
                <div className="w-full h-full hidden xl:block absolute top-0 left-0 z-10 ">
                    <img src={leaf2} draggable="false" className="w-28 z-10 rotate-45 blur-sm absolute select-none transition-transform duration-50" alt="" style={{ top: `calc(20rem + ${motion.y * 20 + motion.scroll * -50}px)`, left: `calc(40rem + ${motion.x * 30}px)` }} />
                </div>


                <div className="flex flex-col xl:flex-row  rounded-lg bg-[#F8EFD8] px-2 py-8 md:px-4 md:py-12 z-20">
                    <div className="flex flex-col justify-center gap-8 flex-1 px-4 md:px-8 py-8 xl:px-16 xl:py-16 z-20">
                        <p className="text-2xl text-[#b92e2d] font-bold tracking-tight">Conclusion</p>
                        <h1 className="text-4xl text-[#002922]">What we've learned</h1>
                        <p className="w-full md:w-3/4 text-lg md:text-xl z-20">

                            In conclusion, breakfast is not just a daily routine but a key to a healthy lifestyle. It restores energy, provides nutrients, supports focus, and prevents disease. Therefore, skipping breakfast is an unwise habit, and everyone should start their day with a nutritious meal.
                        </p>


                    </div>
                    <div className="w-full xl:w-2/5 px-4 md:px-8 py-4">
                        <img src={conclusionBreakfast} className="w-full rounded-lg" alt="" />
                    </div>
                </div>
            </div>
        </div>

    </>)
}
