import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        gap: 6,
        flexDirection: "row",
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
    },
    text: {
        fontFamily: theme.fonts.family.bold,
        fontSize: theme.fonts.sizes.xs
    },
    bullet: {
        width: 8,
        height: 8,
        borderRadius: 8
    },
    draft: {
        backgroundColor: theme.colors.gray[200]

    },
    approved: {
        backgroundColor: theme.colors.success.light
        
    },
    sent: {
        backgroundColor: theme.colors.info.light
    },
    rejected: {
        backgroundColor: theme.colors.error.light

    },
    textDraft: {
        color: theme.colors.gray[500]
    },
    textApproved: {
        color: theme.colors.success.dark
        
    },
    textSent: {
        color: theme.colors.info.dark
        
    },
    textRejected: {
        color: theme.colors.error.dark

    },
    bulletDraft: {
        backgroundColor: theme.colors.gray[400]

    },
    bulletApproved: {
        
        backgroundColor: theme.colors.success.main
    },
    bulletSent: {
        backgroundColor: theme.colors.info.main
        
    },
    bulletRejected: {
        backgroundColor: theme.colors.error.main

    },
})