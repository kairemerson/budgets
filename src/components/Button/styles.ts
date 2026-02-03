import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        borderRadius: 30,
        padding: 12
    },
    text: {
        
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