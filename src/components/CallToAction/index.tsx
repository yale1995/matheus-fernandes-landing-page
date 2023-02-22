export function CallToAction({ isCenter = false }) {
    return (
        <button
            className={`bg-highlight text-md font-bold text-black ${isCenter ? 'w-[750px]' : 'w-full'} block mx-auto mt-8 p-4 rounded-md mobile:text-sm mobile:p-2 mobile:mt-6 animate-bounce`}>
            Quero ser selecionado para a Sessão Estratégica
        </button>
    )
}