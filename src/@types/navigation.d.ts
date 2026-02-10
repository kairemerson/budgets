export type RootStackParamList = {
    home: undefined
    budgetForm?: {
        id?: string
    }
    details: {
        id: string
    }
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}