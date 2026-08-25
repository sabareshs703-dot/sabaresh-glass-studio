import { createFileRoute } from "@tanstack/react-router";
import { Aurora } from "@/components/portfolio/Aurora";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Work } from "@/components/portfolio/Work";
import { Journey } from "@/components/portfolio/Journey";
import { Contact } from "@/components/portfolio/Contact";

const title = "Sabaresh — UI/UX Designer & Web Developer";
const description =
  "Portfolio of Sabaresh, a creative UI/UX designer and web developer building modern, interactive websites with premium visual design.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Aurora />
      <Nav />
      <Hero />
      <About />
      <Services />
      <Work />
      <Journey />
      <Contact />
    </main>
  );
}
