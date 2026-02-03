import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.gray[100],
        padding: 16,
        width: "100%",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 12
    },
    titleContainer: {
        flex: 1,
        gap: 8
    },
    title: {
        fontFamily: theme.fonts.family.bold,
        fontSize: theme.fonts.sizes.md,
        color: theme.colors.gray[700]
    },
    subtitle: {
        fontFamily: theme.fonts.family.regular,
        fontSize: theme.fonts.sizes.sm,
        color: theme.colors.gray[600]
    },
    priceContainer: {
        alignItems: "flex-end",
        justifyContent: "space-between"
    },
    price: {
        fontFamily: theme.fonts.family.bold,
        fontSize: theme.fonts.sizes.md,
        color: theme.colors.gray[700]
    }
})