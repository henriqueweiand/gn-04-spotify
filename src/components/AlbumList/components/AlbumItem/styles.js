import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    width: 150,
    overflow: 'hidden',
    justifyContent: 'flex-start',
  },

  image: {
    height: 150,
    resizeMode: 'cover',
    borderRadius: metrics.baseRadius,
  },

  title: {
    fontWeight: 'bold',
    color: colors.white,
    marginTop: metrics.smallMargin,
    alignSelf: 'center',
  },

  description: {
    fontSize: fonts.small,
    color: colors.regular,
    alignSelf: 'center',
  },
});

export default styles;
