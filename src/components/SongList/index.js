/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import SongItem from './components/SongItem';

import styles from './styles';

export default class SongList extends Component {
  static propTypes = {
    title: PropTypes.string,
    songs: PropTypes.arrayOf(
      SongItem.propTypes.song,
    ).isRequired,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    title: 'Músicas',
    loading: false,
  };

  renderFlatList = () => (
    <FlatList
      data={this.props.songs}
      renderItem={this.renderSong}
      keyExtractor={item => item.id}
    />
  );

  renderSong = ({ item, index }) => (
    <SongItem
      style={[
        styles.listItem,
        (Number.parseInt(index, 10) === 0) ? styles['listItem-first'] : {},
        (Number.parseInt(index, 10) === (this.props.songs.length)) ? styles['listItem-last'] : {},
      ]}
      onPress={() => {}}
      song={item}
    />
  );

  renderEmpty = () => (
    <Text style={styles.emptyList}>Nenhuma música encontrada</Text>
  );

  renderContent = () => (
    this.props.songs.length === 0
      ? this.renderEmpty()
      : this.renderFlatList()
  );

  render() {
    return (
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, styles.listSectionTitle]}>
          {this.props.title}
        </Text>

        { this.props.loading
          ? <ActivityIndicator size="small" color="#FFF" />
          : this.renderContent() }
      </View>
    );
  }
}
