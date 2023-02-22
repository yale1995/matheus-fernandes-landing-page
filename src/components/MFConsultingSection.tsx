import Image from "next/image"

import MosaicoImage from '../../public/mosaico.png'

export function MFConsultingSection() {
    return (
        <section className="relative">
            <h1 className="text-highlight font-bold text-heading-2 absolute  inset-x-0  inset-y-4 text-center z-10">
                CONSULTORIA MATHEUS FERNANDES
            </h1>
            <div className="absolute font-bold z-10 text-white inset-x-0 inset-y-0 items-center justify-center flex gap-16">
                <div className="">
                    <h3 className="text-[130px]">+500</h3>
                    <span className="block text-right">PACIENTES</span>
                </div>
                <div>
                    <h3 className="text-[130px]">+7</h3>
                    <span>PAÍSES ATENDIDOS</span>
                </div>
            </div>
            <div>
                <Image
                    src={MosaicoImage} alt='Moisaco com fotos de pacientes de Matheus Fernandes Nutricionista'
                    className='w-full h-full object-cover opacity-30'
                    priority />
            </div>
        </section>
    )
}