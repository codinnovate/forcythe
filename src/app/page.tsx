import Blogs from "@/components/Blogs";
import Call from "@/components/Call";
import Discover from "@/components/Discover";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import Spark from "@/components/Spark";
import Success from "@/components/Success";

import Image from "next/image";

export default function Home() {
  return (
  <main className="flex flex-col gap-5">
    <Header />
    <Hero />
    <Success />
    <Discover />
    <Spark />
    <Solutions />
    <Blogs />
    <Call />
    <Footer />
  </main>
  );
}
