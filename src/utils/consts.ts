export const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'})
}

export const isPhoneScreen = (): boolean => {
    return window.screen.width < 700
}