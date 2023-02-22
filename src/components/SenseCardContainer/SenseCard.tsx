import Image from 'next/image'

export function SenseCard({image, alternativeText, thumb}) {
    return (
        <div className='w-80 h-44 rounded-xl relative border-2 border-gray-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
            <h3 className='text-white absolute font-bold text-xl max-w-sm text-center top-12 z-10'>{thumb}</h3>
            <Image src={image} alt={alternativeText} className='w-full h-full object-cover opacity-30 rounded-xl' priority/>
        </div>
    )
}