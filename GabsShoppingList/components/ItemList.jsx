import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ItemList({ item }) {
  return (
    <View style={styles.itemList}>
      <View style={{ flex: 1 }}>
        <Text style={styles.itemName}>{item.name}</Text>
      </View>
    </View>

    {!item?.bought ? (
      <TouchableOpacity style={styles.actionIcon} onPress={() => {}}>
        <Ionicons name='bag-remove-outline' size={24} color='#fff' />   // Copiar do Gallo!!!!!
      </TouchableOpacity>
    ) : (
      
    )}
  )
}

const styles = StyleSheet.create({
    itemList: {
        padding: 15,
        elevation: 12,
        borderRadius: 7,
        backgroundColor: '#000000c0',
        birderWidth: 2,
        borderColor: 'withe',
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemName: {
        color: 'fff',
        fontSize: 24,
    }
})