import { experienceItems } from "@/constants";
import HeaderText from "./HeaderText";
import Card from "./Card";

export default function Solutions(){
    return (
      <div className="flex flex-col">
        <section
        style={{
          background: "linear-gradient(0deg, rgb(12, 38, 69) 20%, rgb(3, 5, 22) 70%)",
        }}>
          <div className="flex flex-col max-w-5xl mx-auto w-full p-4"
          >
            <HeaderText className='text-blue-200'>
                Your best call for B2B/B2c product innovation
            </HeaderText>
            <div className="flex flex-col justify-center items-center md:grid grid-cols-3 gap-8 ">
              {experienceItems.map((experienceItem, idx) => (
                <Card
                  key={idx}
                  title={experienceItem.title}
                  desc={experienceItem.desc}
                  />
                ))}
            </div>
          </div>
        </section>
        <section
        className="pt-[5em]"
          style={{background: "linear-gradient(rgb(12, 38, 69) 20%, rgb(3, 5, 22) 60%)",
            }}>
              <div
              className="max-w-[52rem] mx-auto bg-[url('/images/arc.svg')] lg:bg-[url('/images/arc-L.svg')] bg-cover md:bg-contain lg:bg-contain bg-top bg-no-repeat">
               <div className="pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 max-w-xl mx-auto text-center px-5">
                 <div className="mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto">
                  <HeaderText>
                  <h1 className="text-2xl">
                    We build solution that help <span className="text-blu-100">businesses</span> of all sizes <span className="text-blu-100">scale</span>
                  </h1>
                  </HeaderText>
                 </div>
               </div>
              </div>
        </section>
        </div>
    )
}