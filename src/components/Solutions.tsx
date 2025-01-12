import HeaderText from "./HeaderText";

export default function Solutions(){
    return (
        <section>
            <HeaderText className='text-blue-200'>
                Your best call for B2B/B2c product innovation
            </HeaderText>


            <div className="border-blue-100 rounded-full flex  flex-col">
              <h1>
                We build solution that help <span>businesses</span> of all sizes 
                <span className="text-blue-200">scale</span>
              </h1>
            </div>

        </section>
    )
}