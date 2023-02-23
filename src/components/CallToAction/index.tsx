export function CallToAction({ isCenter = false }) {

    function handleGoesToForm() {
        window.location.href = 'https://form.respondi.app/968zaZgk'
    }

    return (
        <button
            onClick={handleGoesToForm}
            className={`bg-highlight text-md font-bold text-black ${isCenter ? 'w-[750px]' : 'w-full'}
            mobile:w-full block mx-auto mt-8 p-4 rounded-md mobile:text-sm mobile:p-2 mobile:mt-6 animate-bounce hover:bg-gradient-to-r from-orange-300 to-orange-500`}>
            Quero ser selecionado para a Sessão Estratégica
        </button>
    )
}