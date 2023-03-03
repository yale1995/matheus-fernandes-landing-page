import { CallToAction } from "./CallToAction";
import { CardContainer } from "./SenseCardContainer";

export function SensesSection() {
    return (
        <section className="py-16 mobile:py-4 mobile:pb-8 bg-background">
            <h1 className="text-white text-center text-heading-2 font-bold max-w-2xl mx-auto mobile:text-xl mobile:max-w-[350px] mobile:text-left">
                Eu sei exatamente como você se sente!
            </h1>
            <div className='max-w-7xl w-full mt-10 mx-auto mobile:max-w-[350px] mobile:mt-4'>
                <p className="text-xl max-w-5xl mx-auto text-white text-center mb-8 mobile:text-sm mobile:text-left">
                    Pode acreditar, eu já estive dos dois lados e sei o quanto é ruim quando nós não nos colocamos como prioridade em nossas vidas.
                    <span className="text-highlight block mt-4">Deixa eu te contar como eu me sentia antes de começar a cuidar da minha alimentação e buscar evoluir o meu físico:</span>
                </p>
                <CardContainer />
                <span className="text-highlight block text-center mt-8">Se você está sentindo isso também, a CMF é feita para você!</span>
                <CallToAction isCenter />
            </div>
        </section>
    )
}