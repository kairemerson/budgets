import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        backgroundColor: theme.colors.gray[100],
        borderWidth: 1,
        gap: 8,
        borderColor: theme.colors.gray[300],
        borderRadius: 30,
        paddingHorizontal: 12,
        marginRight: 8,
        height: 48,
        
    },
     fullWidth: {
        flex: undefined, // Remove flex quando fullWidth
        width: '100%',
    },
    input: {
        flex: 1,
        fontSize: 16,
        height: "100%",

    },
})