/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import AlbumItemComponent, { AlbumItem } from './components/AlbumItem';

import styles from './styles';

export default class AlbumList extends Component {
  static propTypes = {
    title: PropTypes.string,
    albums: PropTypes.arrayOf(
      AlbumItem.propTypes.album,
    ),
    loading: PropTypes.bool,
  };

  static defaultProps = {
    title: 'Álbums',
    albums: [],
    loading: false,
  };

  renderContent = () => (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      { this.props.albums.map((album, index) => (
        <AlbumItemComponent
          key={album.id}
          style={[
            styles.listItem,
            (index === 0) ? styles['listItem-first'] : {},
            (index === (this.props.albums.length - 1)) ? styles['listItem-last'] : {},
          ]}
          album={album}
        />
      )) }
    </ScrollView>
  );

  render() {
    return (
      <View style={[styles.section, styles.listSection]}>
        <Text style={styles.sectionTitle}>
          {this.props.title}
        </Text>

        { this.props.loading
          ? <ActivityIndicator size="small" color="#FFF" />
          : this.renderContent() }
      </View>
    );
  }
}
