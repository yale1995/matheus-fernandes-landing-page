/* eslint-disable @next/next/no-img-element */
export function Card({ image }) {
    return (
        <div className="w-[300px] h-[300px] m-2 rounded-lg shadow-lg">
            <img className="object-cover rounded-lg" src={image} alt="Foto do antes e depois da Consultoria Matheus Fernandes." />
        </div>
    );
}