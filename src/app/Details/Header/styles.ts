import { StyleSheet } from 'react-native'
import { theme } from '@/styles/theme'

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: theme.colors.white,
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    paddingHorizontal: theme.spacing.md,
    height: 48,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 20
  },
  title: {
    textAlign: 'center',
    fontSize: theme.fonts.sizes.md,
    fontFamily: theme.fonts.family.bold,
    color: theme.colors.gray[800],
  },

  /* 🔹 badge */
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: theme.colors.primary.,
    paddingHorizontal: theme.spacing.sm,
    height: 28,
    borderRadius: theme.radius.pill,
    gap: 6,
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.primary[500],
  },

  statusText: {
    fontSize: theme.fonts.sizes.xs,
    color: theme.colors.primary[600],
    fontFamily: theme.fonts.family.regular,
  },

  /* 🔹 mantém título centralizado */
  rightPlaceholder: {
    width: 64,
  },
})
