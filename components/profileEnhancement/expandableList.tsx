import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

const ExpandableList = ({data}) => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleItem = itemId => {
    if (expandedItems.includes(itemId)) {
      setExpandedItems(expandedItems.filter(id => id !== itemId));
    } else {
      setExpandedItems([...expandedItems, itemId]);
    }
  };

  const renderItem = ({item}) => {
    const isExpanded = expandedItems.includes(item.id);

    return (
      <View style={{marginBottom: 10}}>
        <TouchableOpacity onPress={() => toggleItem(item.id)}>
          <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
        </TouchableOpacity>
        {isExpanded && (
          <View style={{marginLeft: 20}}>
            {item.options.map(option => (
              <Text key={option}>{option}</Text>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <FlatList
      data={data.all}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default ExpandableList;
