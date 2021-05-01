import Image from 'next/image'

export default function ProjectItem(){
    return(
        <div className="bg-primary-light w-project rounded-sm flex-shrink-0">
            <Image src="/images/project.png" width={336} height={250}/>
            <div className="flex space-y-3 px-3 py-2 flex-col ">

                <h2 className="font-bold md:text-secondary text-xs">e-commerce, website</h2>
                <h2 className="font-bold"> Developpement d'un site de ecommerce</h2>
                <p className="text-xs flex">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
                <button className="text-xs hover:bg-secondary hover:text-white font-bold text-secondary border-2 border-secondary mr-auto rounded-sm px-3 py-1">LEARN MORE</button>

            </div>
        </div>
    )
}