import Image from "next/image"
import MFNutri from '../../public/who.png'

export function AboutMe() {
    return (
        <section className="bg-primary mobile:pt-4">
            <div className='max-w-7xl w-full flex items-center justify-between mx-auto mobile:max-w-[350px] mobile:flex-col-reverse' >
                <div className='w-[700px] -mt-32 mobile:w-96 mobile:-mt-8'>
                    <Image
                        src={MFNutri}
                        width={700}
                        height={700}
                        alt='Nutricionista Matheus Fernandes cruzando os braços'
                    />
                </div>

                <div className='max-w-xl w-full pb-4'>
                    <h1 className='text-gray-200 text-heading font-bold mobile:text-heading-2'>
                        Quem é
                        <span className='text-gray-900 block'> Matheus Fernandes?</span>
                    </h1>
                    <p
                        className='text-white text-md mt-4 mobile:text-sm mobile:mt-4'>
                        Sou Nutricionista pós-graduado em Nutrição, Metabolismo e Fisiologia no Exercício.
                    </p>
                    <p
                        className='text-white text-md mt-4 mobile:text-sm mobile:mt-4'>
                        Atualmente tenho centenas de pacientes ativos na minha Consultoria Online e muitas
                        vidas já transformadas através da nutrição, que alcançaram melhora na estética, saúde, mentalidade e
                        qualidade de vida.
                    </p>
                    <p
                        className='text-white text-md mt-4 mobile:text-sm mobile:mt-4'>
                        Possuo vasta experiência na área de Emagrecimento e Hipertrofia.
                    </p>
                    <p
                        className='text-white text-md mt-4 mobile:text-sm mobile:mt-4'>
                        Meu objetivo é fazer com que todos os meus pacientes alcancem um nível de físico e saúde que sempre sonharam.
                    </p>
                    <p
                        className='text-white text-md mt-4 mobile:text-sm mobile:mt-4'>
                        Seu objetivo será o meu objetivo, e eu vou te mostrar o melhor caminho para conquistá-los.
                    </p>
                </div>
            </div>
        </section>
    )
}