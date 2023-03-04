import { CallToAction } from "./CallToAction";
import { Carousel } from "./Carousel";
import { CommentsContainer } from "./CommentsContainer";

export function PatientReviewsSection() {
    return (
        <section className="py-16 mobile:py-4 bg-background">
            <div className='max-w-7xl w-full mt-4 mx-auto mobile:max-w-[350px] mobile:mt-4'>
                <h1 className="text-white text-center mb-8 text-heading-2 font-bold max-w-2xl mx-auto mobile:text-xl mobile:max-w-[350px]">O que dizem meus pacientes:</h1>
                <CommentsContainer />
                <h2 className="text-white text-center mt-10 text-heading-2 font-normal max-w-2xl mx-auto mobile:text-xl mobile:max-w-[350px]">Resultados incríveis da Consultoria:</h2>
                <Carousel />
                <CallToAction isCenter />
            </div>
        </section>
    )
}