import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
  },

  image: {
    width: 50,
    resizeMode: 'cover',
    borderRadius: metrics.baseRadius,
  },

  songInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: metrics.smallMargin,
  },

  title: {
    color: colors.white,
  },

  description: {
    fontSize: fonts.small,
    color: colors.regular,
  },
});

export default styles;
