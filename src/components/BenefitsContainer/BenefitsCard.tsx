export function BenefitsCard({ thumb }) {
    return (
        <div
            className="bg-gradient-to-r from-gray-50 to-gray-200 p-4 w-[750px] h-20
            flex items-center justify-center mx-auto rounded-lg transition ease-in-out delay-150
            hover:-translate-y-1 hover:scale-110 mobile:w-full border-2 border-gray-100">
            <h3 className="text-gray-600 text-xl text-center mobile:text-sm">
                {thumb}
            </h3>
        </div>
    )
}