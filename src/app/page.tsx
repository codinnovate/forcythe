import Blogs from "@/components/Blogs";
import Call from "@/components/Call";
import Discover from "@/components/Discover";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Spark from "@/components/Spark";
import Success from "@/components/Success";

export default function Home() {
  return (
  <main className="flex flex-col overflow-x-hidden w-full h-full">
    <Header />
    <Hero />
    <div className="max-w-6xl   mx-auto w-full p-2 flex flex-col gap-[5em]">
    <Success />
    <Discover />
    <Spark />
    </div>
    <Solutions />
    <div className="max-w-6xl mx-auto w-full p-4 flex flex-col gap-[5em]">
    <Blogs />
    </div>
    <Call />
    <Footer />
  </main>
  );
}
