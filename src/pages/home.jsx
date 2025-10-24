
import Header from "../components/header/header"
import Thesis from "../components/thesis/thesis"
import Conclusion from "../components/conclusion/conclusion"
import Blogs from "../components/blogs/blogs"
import Argumentasion from "../components/argumentasion/argumentasion"
import Footer from "../components/footer/footer"

export default function Home() {

  return (
    <>
      <Header></Header>
      <Thesis></Thesis>
      <Argumentasion></Argumentasion>
      <Conclusion></Conclusion>
      <Blogs title="Ideas for Breakfast" subtitle="Foods" slug=""></Blogs>
      <Footer></Footer>
    </>
  )
}

