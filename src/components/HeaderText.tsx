export default function HeaderText({children, className}:{children:React.ReactNode, className?:string}){
    return (
        <h1 className={`${className} text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] 
        lg:text-[2.6rem] lg:leading-[3.5rem] mb-12 max-w-4xl mx-auto text-center`}>
         {children}
        </h1>

    )
}