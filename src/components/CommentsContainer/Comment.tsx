import Image from "next/image"
import ClaraImage from '../../../public/clara.jpg'
import BrendaImage from '../../../public/brenda.jpg'

export function Comment({ content, author, image }) {
    return (
        <div className="max-w-xl">
            <p className="text-white text-sm text-center mobile:text-xs">
                {content}
            </p>
            <div className="flex items-center gap-4 justify-center mt-8 mobile:mt-4">
                <Image 
                src={image == 'clara' ? ClaraImage : BrendaImage} 
                alt='Imagem de Clara Marinho' 
                className="rounded-full object-cover w-20 h-20 mobile:w-12 mobile:h-12" />
                <h2 className="text-white text-md mobile:text-sm">{author}</h2>
            </div>
        </div>
    )
}