import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        gap: 20,
        paddingBottom: theme.spacing.md
    }, 
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        paddingBottom: 20,
    },
    textHeader: {
        color: theme.colors.gray[700],
        fontFamily: theme.fonts.family.bold
    },
    buttonActions: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        gap: 12,
        marginTop: 30,
        marginBottom: 14
    }
})