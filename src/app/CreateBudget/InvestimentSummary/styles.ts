import { StyleSheet } from 'react-native'
import { theme } from '@/styles/theme'

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  label: {
    fontSize: theme.fonts.sizes.sm,
    color: theme.colors.gray[700],
  },

  inline: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },

  muted: {
    fontSize: theme.fonts.sizes.xs,
    color: theme.colors.gray[600],
  },

  value: {
    fontSize: theme.fonts.sizes.sm,
    color: theme.colors.gray[800],
  },

  discountBadge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 4,
    borderRadius: theme.radius.pill,
    borderWidth: 1,
    borderColor: theme.colors.gray[300],
  },

  discountText: {
    fontSize: theme.fonts.sizes.sm,
    color: theme.colors.gray[700],
  },

  discountValue: {
    fontSize: theme.fonts.sizes.sm,
    color: theme.colors.error.main,
  },

  /* 🔥 Footer full width */
  footer: {
    backgroundColor: theme.colors.gray[100],
    marginTop: theme.spacing.xs,
    marginBottom: -theme.spacing.md,
    marginHorizontal: -theme.spacing.md, // 👈 quebra o padding do Card
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray[200],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 75
  },

  totalLabel: {
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.sizes.sm,
    color: theme.colors.gray[700],
  },

  totalValue: {
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.sizes.lg,
    color: theme.colors.gray[800],
  },
})
