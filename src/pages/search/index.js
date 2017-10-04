/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View, ScrollView, TextInput } from 'react-native';
import Header from 'components/Header';
import SongList from 'components/SongList';

import styles from './styles';

export default class Search extends Component {
  state = {
    searchText: '',
  };

  inputChangedText = (searchText) => {
    this.setState({ searchText });
  };

  render() {
    return (
      <View style={styles.container}>
        <Header>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscas músicas"
            placeholderTextColor="#999"
            onChangeText={this.inputChangedText}
            underlineColorAndroid="transparent"
          />
        </Header>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <SongList
            showTitle={false}
            songs={[]}
          />
        </ScrollView>
      </View>
    );
  }
}
