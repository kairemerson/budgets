import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        backgroundColor: theme.colors.gray[100],
        borderWidth: 1,
        borderColor: theme.colors.gray[300],
        borderRadius: 30,
        paddingHorizontal: 12,
        marginRight: 8
    }
})