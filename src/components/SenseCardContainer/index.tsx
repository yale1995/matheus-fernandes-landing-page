import { SenseCard } from './SenseCard'

import SadWoman from '../../../public/sad-woman.jpg'
import MirrorWoman from '../../../public/dont-look-mirror.png'
import BuyingClothes from '../../../public/clothes.jpg'
import PointerFinger from '../../../public/finger.png'
import Working from '../../../public/work.jpg'
import Loser from '../../../public/loser.jpg'


export function CardContainer() {
    return (
        <div className='flex justify-evenly flex-wrap gap-4'>
            <SenseCard
                image={SadWoman}
                alternativeText='Mulher insatisfeita com seu corpo'
                thumb='Auto estima baixa diariamente'
            />

            <SenseCard
                image={MirrorWoman}
                alternativeText='Mulher se olhando no espelho'
                thumb='Medo de me olhar no espelho'
            />

            <SenseCard
                image={BuyingClothes}
                alternativeText='Mulher comprando roupas'
                thumb='Não gostava de comprar roupas'
            />

            <SenseCard
                image={PointerFinger}
                alternativeText='Dedo indicador sendo apontado'
                thumb='Medo do que os outros pensam sobre mim'
            />

            <SenseCard
                image={Working}
                alternativeText='Pessoa fazendo anotações em caderno'
                thumb='Baixa produtividade durante o dias'
            />

            <SenseCard
                image={Loser}
                alternativeText='Palavra Loser que significa perdedor em inglês'
                thumb='Me sentia inferir aos outros'
            />

        </div>
    )
}