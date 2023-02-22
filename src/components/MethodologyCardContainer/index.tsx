import { MethodologyCard } from './MethodologyCard'

export function MethodologyCardContainer() {
    return (
        <section className='flex flex-col gap-4'>
            <MethodologyCard thumb='Como conseguir manter a adesão ao plano?'/>
            <MethodologyCard thumb='O que posso comer no final de semana?' />
            <MethodologyCard thumb='O que fazer quando eu estiver viajando?' />
        </section>
    )
}