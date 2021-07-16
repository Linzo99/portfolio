export default function Skills(){
    return(
        <div className="w-full flex flex-col space-y-3">
            <ul className="inline-flex justify-between w-full md:pl-5">
                <li>0
                    
                </li>
                <li className="relative">40
                    <span className="absolute -right-5 h-80 w-0.5 bg-gray-500"></span>
                </li>
                <li className="relative">60
                    <span className="absolute -right-5 h-80 w-0.5 bg-gray-500"></span>
                </li>
                <li className="relative">80
                    <span className="absolute -right-5 h-80 w-0.5 bg-gray-500"></span>
                </li>
                <li className="relative">100
                    <span className="absolute -right-0 h-80 w-0.5 bg-gray-500"></span>
                </li>
            </ul>
            <ul className="space-y-7 w-full">
                { ['Nextjs', 'React', 'Python', 'Django', 'Node'].map((v,k)=>(
                    <li key={k} className="relative flex items-center group hover:text-secondary cursor-pointer">
                        <p className="text-lg font-bold">{v}</p>
                        <div className="-bottom-5 absolute w-full scale-x-100 md:scale-x-0 origin-left transform group-hover:scale-x-100 duration-500 h-4 bg-gradient-to-r from-red-600 via-red-400 to-green-800 rounded-sm"></div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
