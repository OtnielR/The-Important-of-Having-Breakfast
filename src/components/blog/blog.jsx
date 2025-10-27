import { Link } from "react-router-dom";

export default function Blog({ blog }) {
    return (
        <div className=" flex flex-col gap-4 relative border-2 border-[#F8EFD8] hover:bg-[#F8EFD8] hover:scale-110 ease-out transition-all duration-500 rounded-lg pt-24 px-4 py-4">
            <div className=" absolute top-0 bottom-0 overflow-hidden h-38  rounded-md" style={{ transform: `translateY(-50%)` }}>
                <img
                    src={blog.img}
                    alt={blog.title}
                    className=" w-full h-full object-cover transition-transform duration-500 hover:scale-100"
                />
            </div>
            <Link to={`/blogs/${blog.slug}`} className="mt-2 text-2xl tracking-widest font-semibold text-[#002922]">{blog.title}</Link>
            <p className="truncate-2-lines md:truncate-3-lines">{blog.content}</p>
        </div >
    );
}

