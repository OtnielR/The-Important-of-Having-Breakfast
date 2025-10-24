import BlogDescriptionSection from "./blog-description-section"

export default function BlogDescription({ blog }) {
    return (<>
        <div className="flex flex-col gap-6 px-8 py-4">
            <BlogDescriptionSection title="Product Materials" content={blog.materials}></BlogDescriptionSection>
            <BlogDescriptionSection title="Product Steps" content={blog.steps}></BlogDescriptionSection>
        </div>

    </>)
}
