import { CallToAction } from "./CallToAction";
import { Carousel } from "./Carousel";
import { CommentsContainer } from "./CommentsContainer";

export function PatientReviewsSection() {
    return (
        <section className="py-16 mobile:py-4 bg-background-2">
            <div className='max-w-7xl w-full mt-10 mx-auto mobile:max-w-xs mobile:mt-4'>
                <CommentsContainer />
                <Carousel />
                <CallToAction isCenter />
            </div>
        </section>
    )
}