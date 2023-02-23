import Image from "next/image";
import PatientOneBack from '../../../public/paciente-1-costas.jpeg'

export function Card() {
    return (
        <div className="w-[300px] h-[300px] m-2 rounded-lg shadow-lg">
            <Image width={300} height={300} className="object-cover rounded-lg" src={PatientOneBack} alt="img" />
        </div>
    );
}