import { StyleSheet } from 'react-native'
import { theme } from '@/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.colors.gray[100],
    borderRadius: theme.radius.lg,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.gray[200],
    gap: theme.spacing.md,
  },

  iconBox: {
    width: 36,
    height: 36,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.primary[500],
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    flex: 1,
    gap: theme.spacing.sm,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  inline: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
  },

  label: {
    fontSize: theme.fonts.sizes.sm,
    color: theme.colors.gray[600],
  },

  value: {
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.sizes.xs,
    color: theme.colors.gray[700],
  },

  badge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 2,
    borderRadius: theme.radius.pill,
    backgroundColor: theme.colors.success.light,
  },

  badgeText: {
    fontSize: theme.fonts.sizes.xs,
    color: theme.colors.success.dark,
    fontFamily: theme.fonts.family.bold,
  },

  discountValue: {
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.sizes.xs,
    color: theme.colors.success.dark,
  },

  divider: {
    height: 1,
    backgroundColor: theme.colors.gray[200],
    marginVertical: theme.spacing.sm,
  },

  totalLabel: {
    fontSize: theme.fonts.sizes.sm,
    color: theme.colors.gray[700],
    fontFamily: theme.fonts.family.bold,
  },

  totalValue: {
    fontSize: theme.fonts.sizes.lg,
    color: theme.colors.gray[700],
    fontFamily: theme.fonts.family.bold,
  },
})
