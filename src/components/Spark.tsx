import Button from "./Button";
import HeaderText from "./HeaderText";

export default function Spark(){
    return (
        <section className="flex flex-col">
            <HeaderText>
                From <span className="text-blue-100">Spark</span>
                to <span className="text-blue-100">Spotlight:</span>
            We take you every step of the way to success.
            </HeaderText>
            <div className="">
                {/* <Sportlightslide /> */}
                 <Button title="Book a call" />
            </div>
        </section>
    )
}