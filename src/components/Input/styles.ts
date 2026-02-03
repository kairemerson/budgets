import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.gray[100],
        borderWidth: 1,
        borderColor: theme.colors.gray[300],
        borderRadius: 30
    }
})