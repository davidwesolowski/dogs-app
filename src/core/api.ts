export const api = async <T>(url: string): Promise<T> => {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`Error while requesting ${url}`)
    }

    return await response.json()
} 