import AnimatedImages from "./AnimatedImages";
import HeaderText from "./HeaderText";

export default function Success(){
    return  (
        <section className="flex flex-col">
            <HeaderText className="px-5">
                Success in <span className="text-blu-100">Motion -</span>
            Our Client journey
            </HeaderText>
            <AnimatedImages />
        </section>
    )
}