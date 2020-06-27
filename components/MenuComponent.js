import React from "react";
import { View, FlatList } from "react-native";
import { ListItem } from "react-native-elements";

function Menu(props) {
  // Item is the data and index is the id
  const renderMenuItem = ({ item, index }) => {
    return (
      <ListItem
        key={index}
        title={item.name}
        subtitle={item.description}
        // This puts a right arrow by the list, we dont need it
        hideChevron={true}
        // Takes an image and renders the image by an item
        onPress={() => props.onPress(item.id)}
        leftAvatar={{ source: require("./images/uthappizza.png") }}
      />
    );
  };

  //   Flatlist and List items   is used to create a list of items a
  return (
    <FlatList
      // Takes the data, then the renderItem (How to render each item in the list) and keyExtracto as the id
      data={props.dishes}
      renderItem={renderMenuItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

export default Menu;
