import React from 'react';
import { KeyboardAvoidingView , Modal, AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Note from './note';
import Modalw from './modal';
import DeleteBtn from './deleteBtn';
import { Vibration } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

import moment from 'moment';
const PATTERN = [1000, 2000, 3000]

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      noteArray: [],
      noteArray2: [],
      noteText:'',
      isVisible:false,
      noteData: '',
      now:'',
      visible:false,
      myText:'',
      text: '',
      index:'',
      count:0
    };
  } 

  ShowModalFunction = (visible,b) => {
    Vibration.vibrate(PATTERN);
    this.setState({
      visible: visible, 
      noteText: b
    
    })
  }

  run = (a,b) =>{
    var self = this;
    this._interval = setInterval(() => {
      this.setState({
        now: moment().format() 
      });
      if(this.state.now == a){
        this.ShowModalFunction(true,b);
      }
    }, 1000); 
  } 
  handlePicker = (datetime) => {
    this.setState({
      isVisible:false,
      noteData: moment(datetime).format() 
    })
  }

  hidePicker = () => {
    this.setState({
      isVisible:false
    })
  }

  showPicker = () => {
    this.setState({
      isVisible:true
    })
  }
  componentWillUnmount() {
    clearInterval(this._interval);
  }

  noteText = (typeText) => {
    this.setState({noteText:typeText});
  }
  
  addNote = () =>{
    var d = new Date;
    this.state.noteArray.push({
      'id':this.state.count,
      'date' : moment().format(), 
      'note':this.state.noteText,
      'datee': this.state.noteData,
      'text': this.state.text
    });
    this.state.noteArray2.push({
      'id':this.state.count,
      'note':this.state.noteText
    });
    this.setState({noteArray: this.state.noteArray});
    this.setState({noteArray2: this.state.noteArray2});
    this.run(this.state.noteData,this.state.noteText);
    this.state.count++;
  }

  deleteNote(key){
    this.state.noteArray.splice(key,1);
    this.setState({noteArray:this.state.noteArray});
  }

  Hide = () => {
    this.setState({  
      visible: false
    })
}

render() {
  var notes = this.state.noteArray.map((val,key) => {
    return (
      <Note  key={key} val={val} keyval={key} deleteMethod={() => this.deleteNote(key)} /> 
      )});  
    var notes2 = this.state.noteArray2.map((val,key) => {
    return (
      <Modalw key={key} val={val} keyval={key}  visible={this.state.visible} noteText = {this.state.noteText} Hide={() => this.Hide(key)} />
      )}
  );  
  return (
     <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.textHeader}>ToDo App</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {notes}
        {notes2}
      </ScrollView>
    <View style={styles.footer}>
      <TextInput onChangeText={this.noteText}
      style={styles.textInput}
      placeholder="Write"
      placeholderTextColor="black" />
      <TouchableOpacity style={styles.dateButton} onPress={this.showPicker}>
      <FontAwesome name="calendar" size={40} color="#2CCCE4" />
    </TouchableOpacity>

    <TouchableOpacity style={styles.addButton} onPress={this.addNote}>
      <Text style={styles.addButtonText}>+</Text>
    </TouchableOpacity>
    </View>
        <DateTimePicker
        isVisible={this.state.isVisible}
        onConfirm={this.handlePicker}
        onCancel={this.hidePicker}
        mode={'datetime'}
        />
     </View> 
     </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  btnSelected: {
    backgroundColor: 'white',

  },
  notSelected : {
    backgroundColor: 'red',

  },
  container: {
    flex: 1,

  },
  text: {
    color:'red',
  },
  header: {
    backgroundColor: 'grey',
    alignItems:'center',
    justifyContent: 'center',
    borderBottomWidth:2,
    borderBottomColor:'black',

  },
  textHeader: {
    color:'white',
    fontSize:24,
    paddingTop:30,
    paddingBottom:10,
  },
  scrollContainer:{
    flex:1,
    marginBottom:100,
  },
  footer:{
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
    zIndex:10,
    flex:1,
    flexDirection: 'row',
    paddingBottom:10,
  },
  addButton:{
    zIndex:10,
    width:40,
    height:40,  
    flex:1.2,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:"#2CCCE4",
    borderRadius: 40/2,
    marginLeft:10,
      marginRight:10,

  },

  addButtonText:{
    color:'white',
    fontSize:20,
    marginBottom:10,
  },
  textInput:{
    color:'black',
    fontSize:18,
    width:'75%',
 marginRight:10,
    paddingLeft:10,
  },
  datePickerBox:{
    marginTop: 9,
    borderColor: '#FF5722',
    borderWidth: 0.5,
    padding: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    height: 40,
    justifyContent:'center'
  },

  datePickerText: {
    fontSize: 14,
    marginLeft: 5,
    borderWidth: 0,
    color: '#000',

  }
});

export default Main;
