import { LucideIcon } from "lucide-react"

export default function StatsCard(
    {icon:Icon,value,label}:{icon:LucideIcon, value:string, label:string}){
    
    return(
        <div>
           
            <div className="flex justify-center items-center gap-2">
               <Icon className="size-5 text-primary" />
               <p>{label}</p>
               <p>{value}</p>
             
            </div>
           

        </div>
    )
}