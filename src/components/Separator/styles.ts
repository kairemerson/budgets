import { StyleSheet } from 'react-native'
import { theme } from '@/styles/theme'

export const styles = StyleSheet.create({
  base: {
    height: 1,
    backgroundColor: theme.colors.gray[200],
  },

  card: {
    width: '100%',
  },

  cardFull: {
    marginHorizontal: -theme.spacing.md,
  },

  full: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
})
