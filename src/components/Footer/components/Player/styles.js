import { StyleSheet } from 'react-native';
import { metrics, colors, fonts } from 'styles';

const styles = StyleSheet.create({
  player: {
    alignSelf: 'stretch',
    borderTopWidth: 2,
    borderColor: colors.dark,
  },

  content: {
    height: 42,
    backgroundColor: colors.darker,
    borderColor: colors.background,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: metrics.baseMargin,
    justifyContent: 'space-between',
  },

  leftContent: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  thumbnail: {
    width: 26,
    height: 26,
  },

  current: {
    flexDirection: 'column',
    marginHorizontal: metrics.baseMargin,
  },

  title: {
    color: colors.white,
    fontSize: fonts.small,
  },

  description: {
    color: colors.regular,
    fontSize: fonts.tiny,
  },
});

export default styles;
