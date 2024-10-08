export const getFullName = (surname: string, name: string, patronymic: string | null): string => {
    return `${name} ${surname} ${patronymic ?? ''}`.trim()
}
