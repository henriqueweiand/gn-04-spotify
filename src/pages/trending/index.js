/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, ScrollView } from 'react-native';
import Header from 'components/Header';
import SongList from 'components/SongList';
import AlbumList from 'components/AlbumList';

/* Redux */
import { connect } from 'react-redux';
import TrendingSongsActions from 'store/ducks/trending-songs';

import styles from './styles';

const albums = [
  {
    'id': 0,
    'title': 'Villa Mix',
    'author': 'Alok',
    'thumbnail': 'https://i1.sndcdn.com/avatars-000238795694-w2wokh-t500x500.jpg',
    'songs': [
      {
        'id': 0,
        'title': 'Campfire',
        'author': 'RetroVision',
        'thumbnail': 'https://i.ytimg.com/vi/B2p-jLTmFJ0/maxresdefault.jpg',
        'url': 'http://192.168.2.3/music1.mp3'
      },
      {
        'id': 1,
        'title': 'Your Stories (feat. Koit Toome)',
        'author': 'Cartoon',
        'thumbnail': 'https://i.ytimg.com/vi/8VDjPYcL-oU/maxresdefault.jpg',
        'url': 'http://192.168.2.3/music2.mp3'
      },
      {
        'id': 2,
        'title': 'Popsicle',
        'author': 'LFZ',
        'thumbnail': 'https://i.ytimg.com/vi/EP625xQIGzs/maxresdefault.jpg',
        'url': 'http://192.168.2.3/music3.mp3'
      },
      {
        'id': 3,
        'title': 'Your Stories (feat. Koit Toome)',
        'author': 'Cartoon',
        'thumbnail': 'https://i.ytimg.com/vi/8VDjPYcL-oU/maxresdefault.jpg',
        'url': 'http://192.168.2.3/music2.mp3'
      },
      {
        'id': 4,
        'title': 'Campfire',
        'author': 'RetroVision',
        'thumbnail': 'https://i.ytimg.com/vi/B2p-jLTmFJ0/maxresdefault.jpg',
        'url': 'http://192.168.2.3/music1.mp3'
      },
    ],
  },
  {
    'id': 1,
    'title': 'Greatest Hits',
    'author': 'Foo Fighters',
    'thumbnail': 'https://upload.wikimedia.org/wikipedia/en/3/35/FooFightersGreatestHits.jpg',
    'songs': [
      {
        'id': 0,
        'title': 'Campfire',
        'author': 'RetroVision',
        'thumbnail': 'https://i.ytimg.com/vi/B2p-jLTmFJ0/maxresdefault.jpg',
        'url': 'http://192.168.2.3/music1.mp3'
      },
      {
        'id': 1,
        'title': 'Your Stories (feat. Koit Toome)',
        'author': 'Cartoon',
        'thumbnail': 'https://i.ytimg.com/vi/8VDjPYcL-oU/maxresdefault.jpg',
        'url': 'http://192.168.2.3/music2.mp3'
      },
      {
        'id': 2,
        'title': 'Popsicle',
        'author': 'LFZ',
        'thumbnail': 'https://i.ytimg.com/vi/EP625xQIGzs/maxresdefault.jpg',
        'url': 'http://192.168.2.3/music3.mp3'
      },
      {
        'id': 3,
        'title': 'Your Stories (feat. Koit Toome)',
        'author': 'Cartoon',
        'thumbnail': 'https://i.ytimg.com/vi/8VDjPYcL-oU/maxresdefault.jpg',
        'url': 'http://192.168.2.3/music2.mp3'
      },
      {
        'id': 4,
        'title': 'Campfire',
        'author': 'RetroVision',
        'thumbnail': 'https://i.ytimg.com/vi/B2p-jLTmFJ0/maxresdefault.jpg',
        'url': 'http://192.168.2.3/music1.mp3'
      },
    ],
  },
];

class Trending extends Component {
  static propTypes = {
    trendingRequest: PropTypes.func.isRequired,
    trendingSongs: PropTypes.shape({
      data: SongList.propTypes.songs,
      loading: PropTypes.bool,
      error: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    this.props.trendingRequest();
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Início" />
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <SongList
            title="Músicas em alta"
            loading={this.props.trendingSongs.loading}
            songs={this.props.trendingSongs.data}
          />

          <AlbumList
            title="Álbuns recomendados"
            albums={albums}
          />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  trendingSongs: state.trendingSongs,
});

const mapDispatchToProps = dispatch => ({
  trendingRequest: () => dispatch(TrendingSongsActions.trendingRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
