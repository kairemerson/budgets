import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        gap: 12
    }, 
    title: {
        fontFamily: theme.fonts.family.regular,
        fontSize: theme.fonts.sizes.xs,
        color: theme.colors.gray[500],
        marginBottom: theme.spacing.md
    },
    statusContainer: {
        gap: 12
    },
    orderContainer: {
        gap: 12
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 12,
        marginTop: 50
    }
})