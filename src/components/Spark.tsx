import HeaderText from "./HeaderText";
import Sportlightslide from "./Sportlightslide";

export default function Spark(){
    return (
        <section className="flex flex-col w-full justify-center items-center">
            <HeaderText>
                From <span className="text-blu-100">Spark</span> to <span className="text-blu-100">Spotlight:</span> We take you every step of the way to success.
            </HeaderText>
            <div className="w-full p-2">
                <Sportlightslide />
            </div>
        </section>
    )
}