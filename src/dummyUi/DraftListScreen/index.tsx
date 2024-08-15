import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const DraftListScreen: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  // @ts-ignore
  const {drafts} = route.params;

  const renderDraftItem = ({item}: any) => (
    <TouchableOpacity
      // @ts-ignore
      onPress={() => navigation.navigate('DraftScreen', {formData: item})}
      style={styles.draftItem}>
      <Text style={styles.draftTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Drafts</Text>
      <FlatList
        data={drafts}
        renderItem={renderDraftItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  draftItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  draftTitle: {
    fontSize: 18,
  },
});

export default DraftListScreen;
