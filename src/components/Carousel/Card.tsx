import Image from "next/image";
export function Card({ image }) {
    return (
        <div className="w-[300px] h-[300px] m-2 rounded-lg shadow-lg">
            <Image className="object-cover rounded-lg" width={300} height={300} src={image} alt="Foto do antes e depois da Consultoria Matheus Fernandes." />
        </div>
    );
}