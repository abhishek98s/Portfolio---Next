import Contact from "@/components/contact";
import Expertise from "@/components/expertise";
import Footer from "@/components/footer";
import Introduction from "@/components/introduction";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Expertise />
      <Projects />
      <Contact/>
      <Footer />
    </>
  );
}
