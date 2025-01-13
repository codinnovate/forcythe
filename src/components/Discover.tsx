
import AnimatedText from "./AnimatedText";
import CompanyTab from "./CompanyTab";
import HeaderText from "./HeaderText";

export default function Discover(){
        
    return (
        <section>
            
             <HeaderText>
                <AnimatedText>
            Discover the <span className="text-blu-100">transformative Stories</span> of startups that scaled new heights with us
                </AnimatedText>
            </HeaderText>
            <CompanyTab />
        </section>
    )
}