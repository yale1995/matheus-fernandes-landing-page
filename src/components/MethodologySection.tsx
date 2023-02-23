import { MethodologyCardContainer } from "./MethodologyCardContainer";

export function MetodologySection() {
    return (
        <section className="py-16 mobile:py-4 bg-gradient-to-b from-background to-background-2">
            <h1 className="text-white text-center text-heading-2 font-bold max-w-2xl mx-auto mobile:text-xl mobile:max-w-xs mobile:text-left">
                Conheça a Metedologia que já fez centenas de pessoas alcançarem o físico dos sonhos
            </h1>
            <div className='max-w-7xl w-full mt-10 mx-auto mobile:max-w-xs mobile:mt-4'>
                <p className="text-xl max-w-5xl mx-auto text-white text-center mb-8 mobile:text-sm mobile:text-left mobile:mb-4">
                    A CMF é baseada em 3 pilares importantíssimos para quem busca a evolução do físico:
                    <span className="text-primary"> Alimentação, Motivação e Aderência.</span>
                </p>
                <p className="text-xl max-w-5xl mx-auto text-white text-center mb-8 mobile:text-sm mobile:text-left mobile:mb-4">
                    Onde eu
                    <span className="text-primary"> te acompanho semana a semana </span>
                    para que se mantenha firme no caminho pela busca do físico que sempre sonhou!
                </p>
                <p className="text-xl max-w-5xl mx-auto text-highlight text-center mb-8 mobile:text-sm mobile:text-left mobile:mb-4">
                    Te mostro detalhadamente o melhor caminho para que você tenha resultados.
                </p>

                <MethodologyCardContainer />
            </div>
        </section>
    )
}