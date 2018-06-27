import React from 'react';
import {Modal, StyleSheet, Text, View,ScrollView,TouchableOpacity,TextInput } from 'react-native';

export default class Modalw extends React.Component {
      render() {
            return (
                  <View  key={this.props.keyval} >
                  <Modal animationType="slide" transparent={false} visible={this.props.visible} onRequestClose={() => {alert('Modal has been closed.');}} > 

                  <View style={styles.modalView}>
                                    <Text style={styles.remindTextTitle}>YOU HAVE TO DO:</Text>

                  <Text style={styles.remindText}> {this.props.noteText}</Text>

                  <TouchableOpacity style={styles.btnOK} onPress={this.props.Hide}>
                  <Text style={styles.btnOKtext}>OK</Text>
                  </TouchableOpacity>
                  </View> 

                  </Modal>
                  </View>

                  );
      }
      }  
const styles = StyleSheet.create({
  modalView: {
   flex:1,
   flexDirection:'column',
   alignItems:'center',
   justifyContent:'center',
   backgroundColor: 'grey',

  },
  remindTextTitle: {
      fontSize:30,
      fontWeight:'bold'
  },
remindText: {
        fontSize:30,
      fontWeight:'bold',
      color: "#2CCCE4",
      marginTop:10,
},
btnOK: {
       zIndex:10,
    width:80,
    height:80,  
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:"#2CCCE4",
    borderRadius: 80/2,
    marginTop:20,


},
btnOKtext:{
      color:'white',
      fontSize:20,
}

});