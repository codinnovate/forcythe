import Button from "./Button";

export default function Hero(){
    return (
        <section className="min-h-screen bg-[url('/images/header-bg.svg')] bg-no-repeat  px-3 bg-center">
        <div
        className="rounded-[3em] max-w-5xl mx-auto bg-transparent bg-white bg-opacity-10  flex flex-col gap-5 px-5 md:py-[3em] py-[2em]"
        >
        <h1 className="text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1em] mb-7">
            We build <span className="text-blu-100"> products </span> that shape a better future
        </h1>
        <h3 className="text-grey">
        We&apos;re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invokes sector-wide transformation.
        </h3>
        <Button
         title="Book a call"
          />
          </div>
        </section>
    )
}