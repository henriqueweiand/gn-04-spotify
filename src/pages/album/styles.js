import { StyleSheet } from 'react-native';
import { colors, fonts, general } from 'styles';

const styles = StyleSheet.create({
  ...general,

  background: {
    width: '100%',
    height: 150,
  },

  contentContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkTransparent,
  },

  title: {
    backgroundColor: colors.transparent,
    fontWeight: 'bold',
    fontSize: fonts.big,
    color: colors.white,
  },

  author: {
    fontSize: fonts.small,
    color: colors.regular,
    marginTop: 5,
  },
});

export default styles;
