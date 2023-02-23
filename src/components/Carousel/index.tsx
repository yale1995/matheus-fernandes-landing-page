import { Card } from "./Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useEffect } from "react";
import { useMobile } from "@/hooks/useMobile";

export function Carousel() {

    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 400;
    }
    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 400;
    }

    function handleAutoScroll() {
        const currentDevice = localStorage.getItem('device')
        console.log(currentDevice)

        if (currentDevice == 'mobile') {
            console.log('mobile')
            document.getElementById("content").scrollLeft += 180;

            if (document.getElementById("content").scrollLeft >= 2000) {
                document.getElementById("content").scrollLeft = 0

                return
            }

            return
        }

        document.getElementById("content").scrollLeft += 180;

        if (document.getElementById("content").scrollLeft >= 1900) {
            document.getElementById("content").scrollLeft = 0

            return
        }

        return
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            var { device } = useMobile()
            localStorage.setItem('device', device ? 'mobile' : 'web')
        }

        setInterval(handleAutoScroll, 4000)
    }, [])

    return (
        <div className="relative mt-8">
            <div className="h-full w-36 bg-gradient-to-r from-background-2 to-transparent z-10 absolute left-36 mobile:hidden" />
            <div className="h-full w-36 bg-gradient-to-r from-transparent to-background-2 z-10 absolute right-36 mobile:hidden" />
            <div className="absolute right-0 -top-8 ">
                <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
                    <FiChevronLeft />
                </button>
                <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
                    <FiChevronRight />
                </button>
            </div>
            <div
                id="content"
                className="relative w-[950px] mobile:w-full mx-auto carousel p-4 flex items-center justify-center
                overflow-x-auto scroll-smooth scrollbar-hide">


                <div>
                    <Card image='paciente-1-lateral.jpeg' />
                </div>

                <div>
                    <Card image='paciente-1-costas.jpeg' />
                </div>

                <div>
                    <Card image='paciente-2-frente.png' />
                </div>

                <div>
                    <Card image='paciente-3-frente.png' />
                </div>

                <div>
                    <Card image='paciente-1-costas.jpeg' />
                </div>

                <div>
                    <Card image='paciente-3-esquerda.png' />
                </div>

                <div>
                    <Card image='paciente-5.png' />
                </div>

                <div>
                    <Card image='paciente-3-direita.png' />
                </div>

                <div>
                    <Card image='paciente-1-costas.jpeg' />
                </div>

                <div>
                    <Card image='paciente-2-frente.png' />
                </div>

                <div>
                    <Card image='paciente-1-lateral.jpeg' />
                </div>

                <div>
                    <Card image='paciente-5.png' />
                </div>

                <div>
                    <Card image='paciente-6-frente.png' />
                </div>

                <div>
                    <Card image='paciente-3-direita.png' />
                </div>

                <div>
                    <Card image='paciente-6-lateral.png' />
                </div>
            </div>
        </div>
    );
}