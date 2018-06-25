import React from 'react';
import {Modal, StyleSheet, Text, View,ScrollView,TouchableOpacity,TextInput } from 'react-native';

export default class Modalw extends React.Component {
      render() {
            return (
                  <View >
                  <Modal animationType="slide" transparent={false} visible={this.props.visible} onRequestClose={() => {alert('Modal has been closed.');}}>
                  <View style={{marginTop: 22}}>
                  <View>
                  <Text> {this.props.myText}</Text>

                  <TouchableOpacity onPress={this.props.hide}>DONE
                  </TouchableOpacity>
                  </View> 
                  </View>
                  </Modal>
                  </View>
                  );
      }
}


