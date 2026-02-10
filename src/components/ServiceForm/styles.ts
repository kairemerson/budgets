import { StyleSheet } from 'react-native'
import { theme } from '@/styles/theme'

export const styles = StyleSheet.create({
  container: {
    gap: theme.spacing.md,
  },

  input: {
    backgroundColor: theme.colors.gray[100],
    borderRadius: theme.radius.pill,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    fontSize: theme.fonts.sizes.sm,
    borderWidth: 1,
    borderColor: theme.colors.gray[300],
    color: theme.colors.gray[700],
    height: 48,
    flex: 1
  },

  textarea: {
    minHeight: 80,
    textAlignVertical: 'top',
    borderRadius: theme.radius.lg
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.md,
  },

  priceInput: {
    flex: 1,
  },

  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    backgroundColor: theme.colors.gray[100],
    borderRadius: theme.radius.pill,
    paddingHorizontal: theme.spacing.md,
    height: 48,
    borderWidth: 1,
    borderColor: theme.colors.gray[300],
  },

  quantityText: {
    fontSize: theme.fonts.sizes.md,
    fontFamily: theme.fonts.family.regular,
    color: theme.colors.gray[700],
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
    marginBottom: 34,
    gap: 12
  },

  deleteButton: {
    width: 48,
    height: 48,
    borderRadius: theme.radius.pill,
    backgroundColor: theme.colors.error.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
