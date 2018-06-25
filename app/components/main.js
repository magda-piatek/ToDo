import React from 'react';
import { Modal, AppRegistry, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Note from './note';
import DeleteBtn from './deleteBtn';
import { Vibration } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
const PATTERN = [1000, 2000, 3000]

 class Main extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      noteArray: [],
      noteText:'',
      isVisible:false,
      noteData: '',
      now:'',
      ModalVisibleStatus:false,
      myText:'',
      text: ''


    };
  } 

  ShowModalFunction = (visible,b) => {
    Vibration.vibrate(PATTERN);

    this.setState({
      ModalVisibleStatus: visible, 
      myText: b,
      show:true,
      text:'done'
    })
  }

  Hide = (visible) => {
    this.setState({
      ModalVisibleStatus: false
          });
  }
  run = (a,b) =>{

    this._interval = setInterval(() => {
      this.setState({
        now: moment().format()

      });

      console.log(this.state.now + "Das" + a);
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


  render() {

    let notes = this.state.noteArray.map((val,key) => {
      return <Note key={key} keyval={key} val={val} deleteMethod={() => this.deleteNote(key)} /> })

    return (

      <View style={styles.container}>
      <Modal animationType="slide" transparent={false} visible={this.state.ModalVisibleStatus} onRequestClose={() => {alert('Modal has been closed.');}}>
      <View style={{marginTop: 22}}>
      <View>
      <Text style={styles.text}> {this.state.myText}</Text>
     
         <TouchableOpacity onPress={() => this.Hide()} style={styles.noteDelete}>
      <Text style={styles.noteDeleteText}>Done</Text>
      </TouchableOpacity>
      </View> 
      </View>
      </Modal>
      <View style={styles.header}>
      <Text style={styles.textHeader}>sth</Text>
      </View>

      <ScrollView style={styles.scrollContainer}>
      {notes}
      </ScrollView>
      <View style={styles.footer}>
      <TextInput onChangeText={this.noteText}
      style={styles.textInput}
      placeholder="Write"
      placeholderTextColor="red" />

      </View>
      <Text style={styles.text}> {this.noteData} </Text>

      <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={this.showPicker}>
      <Text>Show DatePicker</Text>
      </TouchableOpacity>
      </View>
      <DateTimePicker
      isVisible={this.state.isVisible}
      onConfirm={this.handlePicker}
      onCancel={this.hidePicker}
      mode={'datetime'}
      />
      <TouchableOpacity style={styles.addButton} onPress={this.addNote}>
      <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      </View> 
      );
  } 
  addNote = () =>{

    var d = new Date;
    this.state.noteArray.push({
      'date' : d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds(), 
      'note':this.state.noteText,
      'datee': this.state.noteData,
      'text': this.state.text
    });
    this.setState({noteArray: this.state.noteArray});
    this.setState({noteText:''});
    this.setState({noteData:''});
    this.setState({text:''});
    this.run(this.state.noteData,this.state.noteText);
  }

  deleteNote(key){
    this.state.noteArray.splice(key,1);
    this.setState({noteArray:this.state.noteArray});
    console.log(this.state.noteArray)
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
    backgroundColor: 'blue',
    alignItems:'center',
    justifyContent: 'center',
    borderBottomWidth:2,
    borderBottomColor:'red',
  },
  textHeader: {
    color:'black',
    fontSize:18,
    paddingTop:40,
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
  },
  addButton:{
    position:'absolute',
    bottom:90,
    right:10,
    zIndex:10,
    width:50,
    height:50,
    backgroundColor:"red",
  },
  textInput:{
    color:'black',
    fontSize:20,
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
    height: 38,
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