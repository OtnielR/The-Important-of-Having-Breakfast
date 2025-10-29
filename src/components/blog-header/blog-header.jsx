export default function BlogHeader({ blog }) {

    return (
        <>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 px-4 py-12">
                <div>
                    <div className="h-full w-full overflow-hidden">
                        <img src={blog.img} className="h-full w-full object-cover rounded-lg" alt="" />
                    </div>
                </div>
                <div className="flex flex-col gap-8 border-2 border-[#F8EFD8] rounded-lg ">
                    <div className="flex flex-col gap-8 px-12 py-12">
                        <div>
                            <h1 className="text-4xl md:text-5xl text-[#002922]">{blog.title}</h1>
                            <div className="flex">
                                <p className="text-lg tracking-wider font-semibold ">Net Qty: 555</p>
                            </div>
                        </div>
                        <p className="text-lg">
                            {blog.content}
                        </p>

                    </div>
                    <div className="grid grid-cols-3">
                        {Object.entries(blog.nutrients).map(([key, value]) => (
                            <div className="flex flex-col justify-center items-center border-2 border-[#F8EFD8] py-8">
                                <h1 className="text-lg md:text-xl text-[#002922] text-center">{key}</h1>
                                <p className="text-xl">{value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
