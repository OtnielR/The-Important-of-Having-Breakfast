import blogData from "../src/data/food-data.json"

export function getBlogs() {
  return blogData
}

export function getBlog(slug) {
  let blog = null

  blogData.forEach(data => {
    if (data.slug == slug) {
      blog = data
    }
  })

  return blog

}

export function getBlogsExcept(slug) {
  let blogs = getBlogs()
  const blog = getBlog(slug)

  if (blog == null) {
    return blogs
  } else {
    const filteredBlogs = blogs.filter(b => b.slug !== blog.slug)
    return filteredBlogs
  }
}
