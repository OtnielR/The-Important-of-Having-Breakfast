export default function BlogDescriptionSection({ title, content }) {
    return (<>
        <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-3xl text-[#002922]">{title}</h1>
            <p className="text-lg md:text-xl" style={{ whiteSpace: "pre-line" }}>{content}</p>
        </div>
    </>)
}
