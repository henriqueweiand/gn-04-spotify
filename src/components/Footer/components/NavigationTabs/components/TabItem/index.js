/* Core */
import React from 'react';
import PropTypes from 'prop-types';

/* Persentational */
import Icon from 'react-native-vector-icons/EvilIcons';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const TabItem = ({ icon, title, active, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.tabItem}
    activeOpacity={0.6}
  >
    <Icon name={icon} size={32} style={active ? styles.activeIcon : styles.inactiveIcon} />
    <Text
      style={[
        styles.title,
        active ? styles.activeTitle : styles.inactiveTitle,
      ]}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

TabItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

TabItem.defaultProps = {
  active: false,
};

export default TabItem;
