export function MethodologyCard({ thumb }) {
    return (
        <div
            className="bg-gradient-to-r from-background-2 to-inherit p-4 w-[750px] h-20
            flex items-center justify-center mx-auto rounded-lg border-2 border-gray-700
            transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 mobile:w-full">
            <h3 className="text-white text-xl text-center mobile:text-sm">
                {thumb}
            </h3>
        </div>
    )
}