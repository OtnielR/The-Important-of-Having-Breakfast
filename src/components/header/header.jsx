import { useState, useEffect } from "react"
import rippedPaperEffect from "/ripped-paper-effect.webp"
import headerBreakfast from "/header-breakfast.webp"
import leaf1 from "/leaf-1.webp"
import leaf2 from "/leaf-2.webp"
import tomatoes1 from "/tomatoes-1.webp"
import spices1 from "/spices-1.webp"

export default function Header() {
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

    return (
        <>
            <div className="">
                <img src={rippedPaperEffect} className="absolute top-0 left-0 z-0" />

                <div className="w-screen h-screen absolute top-0 left-0 z-10 ">
                    <img src={leaf1} draggable="false" className="w-48 blur-sm absolute top-24 left-32 select-none transition-transform duration-50" alt="" style={{ top: `calc(6rem + ${motion.y * 20 + motion.scroll * -50}px)`, left: `calc(8rem + ${motion.x * 30}px)` }} />
                    <img src={leaf2} draggable="false" className="w-32 blur-sm absolute top-18 right-32 select-none transition-transform duration-50rotate-45" alt="" style={{ top: `calc(4.5rem + ${motion.y * -25 + motion.scroll * -80}px)`, right: `calc(8rem + ${motion.x * -40}px)` }} />
                    <img src={tomatoes1} draggable="false" className="w-38 blur-sm absolute bottom-12 left-24 select-none transition-transform duration-50" alt="" style={{ bottom: `calc(8rem + ${motion.y * -25 + motion.scroll * 40}px)`, left: `calc(6rem + ${motion.x * 40}px)` }} />
                    <img src={spices1} draggable="false" className="w-48 blur-sm absolute bottom-12 right-24 select-none transition-transform duration-50" alt="" style={{ bottom: `calc(4.5rem + ${motion.y * 55 + motion.scroll * 60}px)`, right: `calc(6rem + ${motion.x * -60}px)` }} />
                </div>

                <div className="flex flex-col items-center gap-12 px-12 py-12 z-20">
                    <div className="flex flex-col gap-8 justify-center items-center z-20">
                        <p className="text-2xl text-[#b92e2d] font-bold tracking-tight">Issue</p>
                        <h1 className="w-2/3 text-6xl text-[#002922] text-center tracking-wider font-bold bg-transparent">THE IMPORTANT OF BREAKFAST</h1>
                    </div>
                    <div className="w-1/2 z-20">
                        <img src={headerBreakfast} className="w-full h-full" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

