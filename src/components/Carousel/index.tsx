import { Card } from "./Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useEffect } from "react";

export function Carousel() {

    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 400;
    }
    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 400;
    }

    useEffect(() => {
        setInterval(() => {
            document.getElementById("content").scrollLeft += 400;
        }, 10000)
    })


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
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Card />
                </div>
            </div>
        </div>
    );
}