export function useMobile() {
    const screenWidth = window.innerWidth
    let device

    if (screenWidth <= 767) return {device: true}

    return {device: false}
}