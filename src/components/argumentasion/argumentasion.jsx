import argumentasionBreakfast1 from "/argumentasion-breakfast-1.webp"
import argumentasionBreakfast2 from "/argumentasion-breakfast-2.webp"

export default function Argumentasion() {
    return (<>
        <div className="flex flex-col-reverse xl:flex-row gap-8 px-4 py-16 md:px-8 md:py-32 ">
            <div className="w-full xl:w-1/2 flex flex-row gap-8">
                <div className="relative w-1/2 flex items-start">
                    <img src={argumentasionBreakfast1} className="object-cover rounded-lg w-full h-4/5" alt="" />

                </div>
                <div className="relative w-1/2 flex items-end">
                    <img src={argumentasionBreakfast2} className="object-cover rounded-lg w-full h-4/5" alt="" />

                </div>
            </div>
            <div className=" w-full xl:w-1/2 flex flex-col gap-12 px-4 md:px-16 md:py-8 text-center xl:text-left    ">
                <div className="flex flex-col gap-2">
                    <p className="text-xl text-[#b92e2d] font-bold tracking-tight">Augmentasion</p>
                    <h1 className=" text-3xl text-[#002922]  tracking-wider font-semibold bg-transparent">Why you should'nt skip breakfast</h1>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl">
                            Breakfast restores energy and metabolism.
                        </h1>
                        <p>
                            After sleeping for hours, our energy stores are low. Eating breakfast helps replenish glycogen and restore blood glucose, which fuels the body and brain. Without it, energy levels drop, causing tiredness and poor concentration.
                        </p>
                    </div>
                    <div className="flex flex-col gap-8">
                        <h1 className="text-2xl">
                            Breakfast provides essential nutrients.
                        </h1>
                        <p>

                            A healthy breakfast contains vital nutrients such as calcium, iron, and vitamins. People who eat breakfast regularly are more likely to meet their nutritional needs. These nutrients help maintain health and strengthen the immune system.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl">
                            Breakfast improves brain performance.
                        </h1>
                        <p>
                            Glucose is the brain’s main energy source. Skipping breakfast can lead to poor focus and memory. Studies show that students who eat breakfast perform better academically and stay more alert throughout the day.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
