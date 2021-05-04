import Image from 'next/image'

export default function ProjectItem({ project }){
    return(
        <div className="bg-primary-light w-tinny md:w-project rounded-sm flex-shrink-0 overflow-hidden">
            <Image className="object-cover" src="/images/project.png" width={336} height={250}/>
            <div className="flex space-y-3 px-3 py-2 flex-col ">

                <h2 className="font-bold text-secondary text-xs">{project.category}</h2>
                <h2 className="font-bold">{project.title}</h2>
                <p className="text-xs flex line-clamp-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
                <a href={project.url} className="text-xs hover:bg-secondary hover:text-white font-bold text-secondary border-2 border-secondary mr-auto rounded-sm px-3 py-1">LEARN MORE</a>

            </div>
        </div>
    )
}