import { StyleSheet } from 'react-native'
import { theme } from '@/styles/theme'

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
},

input: {
    backgroundColor: theme.colors.gray[100],
    width: 75,
    height: 32,
    borderWidth: 1,
    borderColor: theme.colors.gray[300],
    borderRadius: theme.radius.lg,
    paddingHorizontal: theme.spacing.sm,
    paddingRight: 36, // espaço pro %
    fontSize: theme.fonts.sizes.md,
    color: theme.colors.gray[800],
    textAlign: 'right',
    textAlignVertical: 'center',
    paddingTop: 0,
    paddingBottom: 0,
  },

  suffix: {
    position: 'absolute',
    right: theme.spacing.md,
    fontSize: theme.fonts.sizes.md,
    color: theme.colors.gray[600],
  },
})
