import React, {useState} from "react"
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Pdf from "react-native-pdf";

const DATA = [
    {
    url: " 1",
    name: "Fake document 1"
    },
    {
    url: " 2",
    name: "Fake document 2"
    },
    {
    url: " 3",
    name: "Fake document 3"
    },
]

//Item "object"
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.name, textColor]}>{item.name}</Text>
  </TouchableOpacity>
);

function DocumentView({navigation}){
    //vars to keep track of pressed or not pressed
    const [selectedId, setSelectedId] = useState(null);

    //variable to put PDF url in
    const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };


    //Function to render the item(from item object)
    const renderItem = ({ item }) => {
        const backgroundColor = item.url === selectedId ? "#e85f76" : "#E85FBA";
        const color = item.url === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.url)}
                backgroundColor={{backgroundColor}}
                textColor={{color}}
            />
        );
    }
    return(
        <View style={styles.container}>
            <View style={styles.header_list}>
                {/*List component. Data prop gets passed the array of data. renderItem prop a function which renders items*/}
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.url}
                extraData={selectedId}
                horizontal={true}
              />
            </View>
            <View style={styles.my_canvas}>
                <Pdf source={source} />

            </View>

        </View>
    )
}

{/* Set of all stylesheets for this page */}
const styles = StyleSheet.create({
  container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
   },
    header_list: {
        flex: 1.5,
        backgroundColor: "#5FE88D",
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: '#e85f76',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: 160,
        height: 70
    },
    name: {
        fontSize: 14
    },
    my_canvas: {
      flex: 9,
      backgroundColor: "#ebebeb"

    }
});

export default DocumentView