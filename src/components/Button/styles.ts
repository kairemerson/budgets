import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 12,
       
    },
    text: {
        fontFamily: theme.fonts.family.bold,
    },
    primary: {
        backgroundColor: theme.colors.primary[600]
    },
    secondary: {
        backgroundColor: theme.colors.gray[100],
        borderColor: theme.colors.gray[300],
        borderWidth: 1
    },
    textPrimary: {
        color: theme.colors.white
    },
    textSecondary: {
        color: theme.colors.primary[600]
    }
})