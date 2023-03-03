export function BenefitsCard({ thumb }) {
    return (
        <div
            className="bg-gradient-to-r from-[#1F1F1F] to-[#2F2F2F] p-4 w-[750px] h-20 mobile:h-16
            flex items-center justify-center mx-auto rounded-lg transition ease-in-out delay-150
            hover:-translate-y-1 hover:scale-110 mobile:w-full">
            <h3 className="text-gray-100 text-xl text-center mobile:text-sm">
                {thumb}
            </h3>
        </div>
    )
}