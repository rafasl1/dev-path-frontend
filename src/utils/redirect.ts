export function redirect(path: string): void {
    let location = window.location.href
    const baseLocation = location.split("/")[0]

    if(location.includes(path)) {
        window.location.assign(location)
        return
    } 

    window.location.assign(baseLocation + path)
}