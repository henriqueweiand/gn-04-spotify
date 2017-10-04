/* Core */
import React from 'react';

/* Presentational */
import { View, ScrollView } from 'react-native';
import Header from 'components/Header';
import SongList from 'components/SongList';

import styles from './styles';

const songs = [
  {
    'id': 0,
    'title': 'Campfire',
    'author': 'RetroVision',
    'thumbnail': 'https://i.ytimg.com/vi/B2p-jLTmFJ0/maxresdefault.jpg',
    'url': 'http://192.168.2.3/music1.mp3',
  },
  {
    'id': 1,
    'title': 'Your Stories (feat. Koit Toome)',
    'author': 'Cartoon',
    'thumbnail': 'https://i.ytimg.com/vi/8VDjPYcL-oU/maxresdefault.jpg',
    'url': 'http://192.168.2.3/eoq.mp3',
  },
  {
    'id': 2,
    'title': 'Popsicle',
    'author': 'LFZ',
    'thumbnail': 'https://i.ytimg.com/vi/EP625xQIGzs/maxresdefault.jpg',
    'url': 'http://192.168.2.3/music3.mp3',
  },
  {
    'id': 3,
    'title': 'Your Stories (feat. Koit Toome)',
    'author': 'Cartoon',
    'thumbnail': 'https://i.ytimg.com/vi/8VDjPYcL-oU/maxresdefault.jpg',
    'url': 'http://192.168.2.3/music2.mp3',
  },
  {
    'id': 4,
    'title': 'Campfire',
    'author': 'RetroVision',
    'thumbnail': 'https://i.ytimg.com/vi/B2p-jLTmFJ0/maxresdefault.jpg',
    'url': 'http://192.168.2.3/eoq.mp3',
  },
];

const Trending = () => (
  <View style={styles.container}>
    <Header title="Início" />
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <SongList
        title="Músicas em alta"
        songs={songs}
      />
    </ScrollView>
  </View>
);

export default Trending;
