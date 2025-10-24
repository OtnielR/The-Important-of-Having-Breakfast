import { useParams } from "react-router-dom"
import { getBlog } from "../../lib/blog"
import BlogHeader from "../components/blog-header/blog-header"
import Blogs from "../components/blogs/blogs"
import BlogDescription from "../components/blog-description/blog-description"

export default function BlogDetails() {
  const { slug } = useParams()
  const blog = getBlog(slug)

  return (<>
    <BlogHeader blog={blog}></BlogHeader>
    <BlogDescription blog={blog}></BlogDescription>
    <Blogs title="Tasty picks" slug={slug}></Blogs>
  </>)
}
