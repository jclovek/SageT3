import Navbar from "@/components/Navbar";
import Footnote from "@/pages/Footnote";
import Header from "@/components/Header";

export default function SageWikiLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section className="site-layout">
        <Navbar />
        <Header />
        {children}
        <Footnote />
      </section>
    )
  }