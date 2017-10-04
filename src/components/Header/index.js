/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

/* Redux */
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import styles from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
    backEnabled: PropTypes.bool,
  };

  static defaultProps = {
    title: null,
    children: null,
    backEnabled: false,
  };

  navigateBack = () => {
    const { dispatch } = this.props;

    return dispatch(NavigationActions.back());
  };

  renderHeaderContent = () => (
    <View style={styles.container}>
      <View style={styles.leftButton}>
        { this.props.backEnabled &&
          <TouchableOpacity onPress={this.navigateBack}>
            <Icon name="angle-left" size={20} color="#FFF" />
          </TouchableOpacity> }
      </View>

      { this.props.title && <Text style={styles.title}>{this.props.title}</Text> }

      <View style={styles.rightButton} />
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

export default connect()(Header);
