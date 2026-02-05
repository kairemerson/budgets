import { StyleSheet } from 'react-native'
import { theme } from '@/styles/theme'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.white,
        borderRadius: theme.radius.md,
        borderWidth: 1,
        borderColor: theme.colors.gray[200],
        overflow: "hidden"
    },

    header: {
        padding: theme.spacing.md,
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing.sm,
        borderBottomWidth: 1,
        borderColor: theme.colors.gray[200],
    },

    title: {
        fontSize: theme.fonts.sizes.xs,
        fontFamily: theme.fonts.family.bold,
        color: theme.colors.gray[500],
    },

    content: {
        padding: theme.spacing.md,
        gap: theme.spacing.sm,
    },
})
