import { StyleSheet } from "react-native";
import { spacing, fontSizes } from "../theme/tokens";
import { Theme } from "../theme/theme.types";

export const createCommonStyles = (theme: Theme) =>
  StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: theme.background,
    },

    title: {
      fontSize: fontSizes.xl,
      fontWeight: "bold",
      color: theme.textPrimary,
      marginBottom: spacing.sm,
    },

    description: {
      fontSize: fontSizes.sm,
      color: theme.textSecondary,
      marginBottom: spacing.lg,
    },

    button: {
      width: "100%",
      padding: spacing.md,
      borderRadius: 8,
      backgroundColor: theme.primary,
      alignItems: "center",
      marginBottom: spacing.sm,
    },

    buttonPrimary: {
      backgroundColor: theme.primary,
    },

    buttonText: {
      fontSize: fontSizes.md,
      fontWeight: "700",
      color: "#fff",
    },
    textCenter: {
      textAlign: "center",
    },

    navLink: {
      color: theme.textPrimary,
      fontSize: fontSizes.md,
      fontWeight: "700",
      padding: spacing.md,
    },

    secondaryText: {
      fontSize: 14,
      marginBottom: 28,
      color: theme.textSecondary,
    },

    primaryText: {
      fontSize: 14,
      marginBottom: 28,
      color: theme.primary,
    },

    formControl: {
      paddingHorizontal: spacing.sm,
      paddingVertical: spacing.md,
      borderWidth: 1,
      borderColor: theme.border,
      marginBottom: spacing.lg,
      borderRadius: 8,
      color: theme.textPrimary,
    },
  });
