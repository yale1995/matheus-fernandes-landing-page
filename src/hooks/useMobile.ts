export function useMobile() {
    const screenWidth = window.innerWidth

    if (screenWidth <= 767) return {device: true}

    return {device: false}
}