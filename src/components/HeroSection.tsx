import Image from 'next/image'

import HeroImage from '../../public/hero-matheus-fernandes.png'
import Logo from '../../public/mf-logo.png'

export function HeroSection() {
    return (
        <main className="border-b-2 border-gray-900 py-16 mobile:py-4">
            <div className='w-[400px] mx-auto mobile:w-64'>
                <Image src={Logo} alt='Logo Matheus Fernandes Nutri' />
            </div>

            <div className='max-w-7xl w-full flex items-center justify-between mx-auto mt-4 mobile:max-w-xs mobile:flex-col' >
                <div className='w-[700px] mobile:w-64'>
                    <Image
                        src={HeroImage}
                        alt='Nutricionista Matheus Fernandes cruzando os braços'
                    />
                </div>

                <div className='max-w-xl w-full'>
                    <h1 className='text-white text-heading font-bold mobile:text-heading-2 mobile:text-center'>
                        <span className='text-primary'>Consultoria Online </span>
                        de Nutrição Esportiva.
                    </h1>
                    <p
                        className='text-white text-xl mt-4 mobile:text-sm mobile:text-center mobile:mt-4'>
                        Se você deseja alcançar resultados de verdade, aplique para uma vaga.
                    </p>
                    <button
                        className='bg-highlight text-md font-bold text-black w-full mt-8 p-4 rounded-md
                         mobile:text-sm mobile:p-2 mobile:mt-6 animate-bounce hover:bg-gradient-to-r from-cyan-500 to-blue-500'>
                        Quero ser selecionado para a Sessão Estratégica
                    </button>
                </div>
            </div>
        </main>
    )
}