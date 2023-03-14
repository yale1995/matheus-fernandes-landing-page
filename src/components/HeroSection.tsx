import { CallToAction } from './CallToAction'

import Image from 'next/image'
import HeroImage from '../../public/hero-matheus-fernandes.png'
import Logo from '../../public/mf-logo.png'

export function HeroSection() {
    return (
        <main className="relative border-gray-900 py-16 mobile:py-4 bg-[url('../../public/background.png')] bg-cover mobile:bg-none">
            <div className='w-[400px] mx-auto mobile:w-64'>
                <Image src={Logo} alt='Logo Matheus Fernandes Nutri' width={400} height={400} />
            </div>

            <div className='max-w-7xl w-full flex items-center justify-between mx-auto mt-4 mobile:max-w-[350px] mobile:flex-col' >
                <div className='w-[700px] mobile:w-96'>
                    <Image
                        src={HeroImage}
                        width={700} height={700}
                        alt='Nutricionista Matheus Fernandes cruzando os braços'
                    />
                </div>

                <div className='max-w-xl w-full'>
                    <h1 className='text-primary text-heading font-bold mobile:text-heading-2 mobile:text-center'>
                        Sessão Avaliativa CMF
                    </h1>
                    <p
                        className='text-white font-semibold text-[22px] mobile:text-sm mobile:text-center mobile:mt-2'>
                        Em 40 minutos, eu e você identificaremos o que está te impedindo de evoluir e traçaremos um plano para alcançar resultados até 3x mais rápido.
                    </p>
                    <p
                        className='text-white text-[16px] font-light mt-4 mobile:text-xs mobile:font-extralight mobile:text-center mobile:mt-4 mobile:mb-10'>
                        Se você deseja saber como acelerar seus resultados através de uma alimentação efetiva, aplique para uma vaga.
                    </p>
                    <CallToAction />
                </div>
            </div>
        </main>
    )
}