export default function Button({title, className}:{title:string, className?:string}){
    return (
        <button 
        className={`action-button border-dotted border-white w-fit 
        py-[12px] px-5 flex gap-2 items-center justify-center 
        rounded-full bg-white text-black text-base relative 
        z-10 font-semibold group-hover:bg-[#064386] 
        group-hover:text-white text-center 
        whitespace-nowrap cursor-pointer hover:shadow-md ${className}`}>
            {title}
        </button>
    )
}