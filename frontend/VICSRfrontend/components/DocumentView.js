import React, {useState} from "react"
import {FlatList, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View} from "react-native";
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

//Float action button object
function FAB(props){
    return(
        <TouchableOpacity style={props.style} onPress={props.onPress}>
            <View style={{
                    backgroundColor: "blue",
                    width: 45,
                    height: 45,
                    borderRadius: 45
                }}>
                <Text style={{fontSize: 32, color: "white", textAlign: "center", justifyContent: "center"}}>+</Text>
            </View>
        </TouchableOpacity>
    );
}


function DocumentView({navigation}){
    //vars to keep track of pressed or not pressed
    const [selectedId, setSelectedId] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

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
            {/*Floating menu which appears when adding a new document*/}
            <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>

                    <TouchableOpacity>
                        <Text>Scan Document</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text>Upload Document</Text>
                    </TouchableOpacity>

                      <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <Text style={styles.textStyle}>Cancel</Text>
                    </Pressable>
                  </View>
                </View>
            </Modal>
            
            {/*Main View Starts Here*/}
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
            
            {/*Render PDF here*/}
            <View style={styles.my_canvas}>
                <Pdf source={source} />
            </View>
            
            {/*Button to add documents */}
            <FAB style={styles.fab} onPress={() => setModalVisible(true)}/>

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

    },
    fab: {
        position: "absolute",
        bottom: 8,
        right: 8
    },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default DocumentView