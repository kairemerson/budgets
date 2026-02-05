import { StyleSheet } from 'react-native'
import { theme } from '@/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing.md,
  },

  left: {
    flex: 1,
  },

  title: {
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.sizes.sm,
    color: theme.colors.gray[700],
  },

  description: {
    marginTop: 4,
    fontSize: theme.fonts.sizes.xs,
    color: theme.colors.gray[500],
    
  },

  right: {
    alignItems: 'flex-end',
    marginRight: theme.spacing.sm,
  },

  price: {
    fontFamily: theme.fonts.family.bold,
    fontSize: theme.fonts.sizes.md,
    color: theme.colors.gray[700],
},

quantity: {
    fontFamily: theme.fonts.family.regular,
    fontSize: theme.fonts.sizes.xs,
    color: theme.colors.gray[600],
  },

  editButton: {
    padding: theme.spacing.xs,
  },
})
