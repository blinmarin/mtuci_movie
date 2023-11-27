export function getLocalStorage(key: string){
    const data = window.localStorage.getItem(key)
    return data
}

export function setLocalStorage(key: string, value: string){
    if (window === undefined){return}
    window.localStorage.setItem(key, value)
}