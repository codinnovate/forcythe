import Button from "./Button";
import HeaderText from "./HeaderText";

export default function Call(){
    return(
        <section 
        className='flex items-center flex-col p-5'
        style={{background: 'linear-gradient(0deg, rgb(7, 22, 38) 20%, rgb(3, 5, 22) 69%)'
        }}>
            <HeaderText>
                <span className="text-blu-100">Ready to Scale ?</span> <br /> Join successful brands that chose us as their <span className="text-blu-100">growth accelerator</span>
            </HeaderText>
            <Button 
              title="Book a call"
            />
        </section>
    )
}