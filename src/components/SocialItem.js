export default function SocialItem({ social }){
    return(
        <a href={social.url} className="cursor-pointer hover:bg-secondary group transform hover:scale-103 flex bg-primary py-5 justify-around items-center rounded-md">
            <p className="text-lg font-bold text-gray-600 group-hover:text-white">{ social.name }</p>
        </a>
    )
}