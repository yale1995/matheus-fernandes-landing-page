export function CallToAction({ isCenter = false }) {


    function handleGoesToForm() {
        window.fbq('track', 'Lead')
        window.open('https://form.respondi.app/acHAZJfR', "_blank");
    }

    return (
        <button
            onClick={handleGoesToForm}
            className={`bg-highlight text-[20px] font-bold text-black ${isCenter ? 'w-[750px]' : 'w-full'}
            mobile:w-full block mx-auto mt-8 p-4 rounded-md mobile:text-sm mobile:p-2 mobile:mt-6 animate-bounce hover:opacity-80 transition-opacity`}>
            Quero ser selecionado para a Sessão Avaliativa Gratuita CMF
        </button>
    )
}