import Blog from "../blog/blog"
import { getBlogsExcept, getRandomBlog } from "../../../lib/blog.js"

export default function Blogs({ title, subtitle, slug, limit = 3 }) {
    const foodData = getBlogsExcept(slug)
    const blogs = getRandomBlog(foodData, limit)

    return (
        <>
            <div id="foods">
                <div className="px-8 md:px-10 py-8 xl:px-24 md:py-16 flex flex-col gap-12 items-center justify-center">
                    <div className="text-[#002922] text-4xl mb-16">
                        <p className="text-xl text-[#b92e2d] text-center font-bold tracking-tight">{subtitle}</p>
                        <h1 className="text-3xl text-center md:text-center text-[#002922]">{title}</h1>
                    </div>
                    <div className="grid grod-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-32 gap-x-16 xl:gap-12 justify-evenly items-center">
                        {blogs.map(blog => {
                            return <Blog blog={blog}></Blog>
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}

