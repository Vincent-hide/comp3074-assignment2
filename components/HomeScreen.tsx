import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import {Provider as PaperProvider} from 'react-native-paper';
import {Appbar, Avatar, Button, Card, Title, Paragraph} from 'react-native-paper'

import {CardUI} from './CardUI';

export const HomeScreen = ({navigation}: any) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(res => setData(res))
    .catch(err => console.log('something went wrong'))
  }, [])

  return (
    <PaperProvider>
      <Appbar>
        <Appbar.Action
          icon="archive"
          onPress={() => console.log('Pressed archive')}
        />
        <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail', data)} />
        <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
        <Appbar.Action icon="delete" onPress={() => console.log('Pressed delete')} />
      </Appbar>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate("Details", { item: item })}>
            <CardUI>{item}</CardUI>
          </TouchableOpacity>
        )}
      />
    </PaperProvider>
  );
}
