export const toJson = (str: string, defaultValue: any) => {
    try {
        return JSON.parse(str)
    } catch (error) {
        return defaultValue
    }
}
