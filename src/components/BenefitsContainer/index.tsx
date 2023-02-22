import { BenefitsCard } from "./BenefitsCard"

export function BenefitsCardContainer() {
    return (
        <section className='flex flex-col gap-4'>
            <BenefitsCard thumb='Comendo o que gosta' />
            <BenefitsCard thumb='Com metodologia que funciona' />
            <BenefitsCard thumb='Sem precisar de dietas malucas ou restritivas' />
        </section>)
}