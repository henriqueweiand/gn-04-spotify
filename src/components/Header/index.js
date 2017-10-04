/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text } from 'react-native';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
  };

  static defaultProps = {
    title: null,
    children: null,
  }

  renderHeaderContent = () => (
    <View style={styles.container}>
      { this.props.title && <Text style={styles.title}>{this.props.title}</Text> }
    </View>
  );

  render() {
    if (!this.props.children) {
      return this.renderHeaderContent();
    }

    return (
      <View style={styles.container}>
        { this.props.children }
      </View>
    );
  }
}

export default Header;
