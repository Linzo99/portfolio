import {useForm} from 'react-hook-form'

export default function ContactModal({ show, onClose}){
    const { register, formState: { errors }, handleSubmit } = useForm()
    if(!show) return null
    const onSubmit = (data)=>{
        const res = fetch('/api/contact', {method:'POST', body:JSON.stringify(data)})
    }
    return(
        <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 px-4 md:px-0">
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm max-h-sm min-w-sm relative flex ring-1 ring-secondary flex-col px-7 py-2 space-y-3 bg-primary-light items-center sm:w-1/2 h-3/5 rounded-lg z-50">
                <h1 className="text-gray-600 text-lg font-bold cursor-pointer hover:text-white"> Contact Me !</h1>
                <button onClick={onClose} className="absolute right-2 top-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary cursor-pointer hover:font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <input type="text" {...register("name", {required:true})} className="w-full p-1 placeholder-gray-500 text-white bg-transparent border-b-2 border-gray-500 focus:outline-none focus:text-white focus:font-bold" placeholder="Full Name"/>
                { errors.name && <p className="text-red-600 text-xs">ce champ est requis</p> }
                <input type="text" {...register("email", {pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})} className="w-full p-1 placeholder-gray-500 bg-transparent text-white border-b-2 border-gray-500 focus:outline-none focus:text-white focus:font-bold" placeholder="Your Email" />
                { errors.email && <p className="text-red-600 text-xs">entrez un mail correct</p> }
                <textarea {...register("message", {required:true})} className="w-full flex-1 bg-transparent p-2 placeholder-gray-500 border-2 border-gray-600 focus:ring-2 ring-gray-500" placeholder="Your message" />
                <input type="submit" value="Send" className="cursor-pointer bg-secondary text-white text-lg font-bold px-3 rounded-sm"/>
                { errors.name && <p className="text-red-600 text-xs">ce champ est requis</p> }
            </form>
        </div>
    )
}