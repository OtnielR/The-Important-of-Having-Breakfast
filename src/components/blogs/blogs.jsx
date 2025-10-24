import Blog from "../blog/blog"
import { getBlogsExcept } from "../../../lib/blog.js"

export default function Blogs({ title, slug }) {
    const foodData = getBlogsExcept(slug)

    return (
        <>
            <div className="px-24 py-16 flex flex-col gap-12 items-center justify-center">
                <div className="text-[#002922] text-4xl mb-16">
                    <h1>{title}</h1>
                </div>
                <div className="grid grid-cols-3 gap-12 justify-evenly items-center">
                    {foodData.map(blog => {
                        return <Blog blog={blog}></Blog>
                    })}
                </div>
            </div>
        </>
    )
}

