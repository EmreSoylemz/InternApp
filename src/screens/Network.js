/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import data from '../data.json';
import Card from '../components/Card';

function Network() {
  const [list] = useState(data);
  const renderUser = ({item}) => <Card user={item} />;
  return (
    <View style={{flex: 1}}>
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderUser}
      />
    </View>
  );
}

export default Network;
