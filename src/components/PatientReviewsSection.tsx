import { CallToAction } from "./CallToAction";
import { CommentsContainer } from "./CommentsContainer";

export function PatientReviewsSection() {
    return (
        <section className="py-16 mobile:py-4 bg-background-2">
            <div className='max-w-7xl w-full mt-10 mx-auto mobile:max-w-xs mobile:mt-4'>
                <CommentsContainer />
                <span className="text-highlight block text-center mt-8">Se você está sentindo isso também, a CMF é feita para você!</span>
                <CallToAction isCenter/>
            </div>
        </section>
    )
}