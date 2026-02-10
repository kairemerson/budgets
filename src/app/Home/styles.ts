import { theme } from '@/styles/theme'
import { StyleSheet, Text, View } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        alignContent: "center",
        justifyContent: "center",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        position: "relative",

    },
    title: {
        fontSize: theme.fonts.sizes.lg,
        color: theme.colors.primary[600],
        fontFamily: theme.fonts.family.bold
    },
    subtitle: {
        fontSize: theme.fonts.sizes.sm,
        color: theme.colors.gray[500],
        fontFamily: theme.fonts.family.regular
    },
    inputContainer: {
        flexDirection: "row",
        marginTop: 24
    },
    emptyText: {
        color: theme.colors.gray[500],
        fontFamily: theme.fonts.family.regular,
        fontSize: theme.fonts.sizes.sm,
        textAlign: "center",
        marginTop: 30,
        maxWidth: "60%",
        marginHorizontal: "auto"
    }
})