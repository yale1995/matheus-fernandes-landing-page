import { CallToAction } from './CallToAction'

import Image from 'next/image'
import WomanImage from '../../public/starting-diet-image.png'


export function SectionTwo() {
    return (
        <section className='py-32 mobile:py-4'>
            <div className="max-w-7xl mx-auto flex items-center justify-between mobile:max-w-[350px] mobile:flex-col">
                <div className='max-w-xl w-full'>
                    <h1
                        className='text-white text-heading-2 font-bold mobile:text-xl'>
                        Quantas vezes você já iniciou uma dieta, com a esperança de finalmente
                        <span className='text-primary'> conquistar o shape dos sonhos?</span>
                    </h1>
                    <div className='bg-gradient-to-r from-gray-500 to-background text-center text-xl p-2 rounded-md mt-4 text-white mobile:text-sm'>
                        Calma, a culpa não é totalmente sua!
                    </div>
                    <p className='text-white text-md mt-4 mobile:text-xs'>
                        Você até vai bem nas primeiras semanas, e depois começa a se desviar, se distanciando cada vez mais do seu objetivo.
                    </p>
                    <p className='text-white text-md mt-4 mobile:text-xs'>
                        Para que você alcance um resultado de verdade, é preciso que tenha um <span className='text-primary'>DIRECIONAMENTO</span> e <span className='text-primary'>ACOMPANHAMENTO</span> adequado, aliado à um suporte eficiente.
                    </p>
                    <CallToAction />
                </div>
                <div className='w-[500px] mobile:w-[250px] mobile:mt-4'>
                    <Image src={WomanImage} width={500} height={500} alt='Mulher insatisfeita com seu corpo' />
                </div>
            </div>
        </section>
    )
}