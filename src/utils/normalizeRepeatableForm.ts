export const normalizeRepeatableFormGet = (array: string[], itemName: string): Array<Record<string, string>> => {
    return array.map((item) => ({ [itemName]: item }))
}

export const normalizeRepeatableFormPost = (array: Array<Record<string, string>>, itemName: string): string[] => {
    return array.map((item) => item[itemName]) ?? []
}
