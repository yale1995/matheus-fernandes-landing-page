import { BenefitsCardContainer } from "./BenefitsContainer";

export function AttentionSection() {
    return (
        <section className="py-16 mobile:py-4 bg-gradient-to-b from-gray-100 to-gray-500">
            <h1 className="text-red-500 text-center text-heading-2 font-bold max-w-2xl mx-auto mobile:text-xl mobile:max-w-xs">
                Atenção
            </h1>
            <div className='max-w-7xl w-full mt-10 mx-auto mobile:max-w-xs mobile:mt-4'>
                <p className="text-xl max-w-5xl mx-auto text-gray-900 text-center mb-8 mobile:text-sm mobile:text-left mobile:mb-4">
                    Você está prestes a acessar uma metodologia totalmente individualizada e
                    personalizada para acelerar o ganho de massa muscular e perda de gordura.
                </p>
                <p className="text-xl max-w-5xl font-bold mx-auto text-gray-700\ text-center mb-8 mobile:text-sm mobile:text-left mobile:mb-4">
                    Estou falando de alcançar resultados de 01 ano em 06 meses.
                </p>
                <BenefitsCardContainer/>
            </div>
        </section>
    )
}