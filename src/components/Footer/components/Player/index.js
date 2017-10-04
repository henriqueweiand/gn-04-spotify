/* Core */
import React from 'react';

/* Persentational */
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import styles from './styles';

const Player = () => (
  <View style={styles.player}>
    <View style={styles.content}>
      <View style={styles.leftContent}>
        <Image
          style={styles.thumbnail}
          source={{ uri: 'https://ainhoaaristizabal.files.wordpress.com/2013/12/imagine-dragons-night-visions-album-cover-640x640.jpg' }}
        />

        <View style={styles.current}>
          <Text style={styles.title} numberOfLines={1}>On Top Of The World</Text>
          <Text style={styles.description}>Imagine Dragons</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => {}}>
        <Icon name="controller-play" size={20} color="#FFF" />
      </TouchableOpacity>
    </View>
  </View>
);

export default Player;
