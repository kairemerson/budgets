
export function formatCurrency(value: number) {
    const formattedCurrency = value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 2
    })

    return formattedCurrency

}