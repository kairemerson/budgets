import { StyleSheet } from 'react-native'
import { theme } from '@/styles/theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.gray[200],
    marginTop: 6
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.md,
  },

  iconBox: {
    width: 36,
    height: 36,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.primary[500],
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    flex: 1,
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.sizes.md,
    color: theme.colors.gray[800],
  },

  body: {
    gap: theme.spacing.sm,
  },

  label: {
    fontSize: theme.fonts.sizes.xs,
    color: theme.colors.gray[500],
  },

  value: {
    fontSize: theme.fonts.sizes.sm,
    color: theme.colors.gray[800],
  },

  dates: {
    marginTop: theme.spacing.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
