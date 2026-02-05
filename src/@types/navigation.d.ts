export type RootStackParamList = {
    home: undefined
    create: undefined
    details: undefined
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}