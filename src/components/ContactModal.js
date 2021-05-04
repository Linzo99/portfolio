export default function ContactModal({ show, onClose}){
    if(!show){
        return null
    }
    return(
        <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 px-4 md:px-0">
            <form method="post" className="max-w-sm max-h-sm min-w-sm relative flex ring-1 ring-secondary flex-col px-7 py-2 space-y-3 bg-primary-light items-center sm:w-1/2 h-3/5 rounded-lg z-50">
                <h1 class="text-gray-600 text-lg font-bold cursor-pointer hover:text-white"> Contact Me !</h1>
                <button onClick={onClose} className="absolute right-2 top-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary cursor-pointer hover:font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <input type="text" className="w-full p-1 placeholder-gray-500 text-white bg-transparent border-b-2 border-gray-500 focus:outline-none focus:text-white focus:font-bold" placeholder="Full Name" name="full_name"/>
                <input type="text" className="w-full p-1 placeholder-gray-500 bg-transparent text-white border-b-2 border-gray-500 focus:outline-none focus:text-white focus:font-bold" placeholder="Your Email" name="email" />
                <textarea name="message" className="w-full flex-1 bg-transparent p-2 placeholder-gray-500 border-1 border-gray-600 focus:ring-2 ring-gray-500" placeholder="Your message" />
                <input type="submit" value="Send" className="cursor-pointer bg-secondary text-white text-lg font-bold px-3 rounded-sm"/>
            </form>
        </div>
    )
}