export const currencyFormatter = (value: number) => {
    return value.toLocaleString('es-Pe', {
        style: 'currency',
        currency: 'PEN',
        minimumFractionDigits: 2,
    });
}