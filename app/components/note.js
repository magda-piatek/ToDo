import React from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity,TextInput } from 'react-native';

class Note extends React.Component {
 
	render() {

		return (
			<View key={this.props.keyval} style={styles.note}>
			<Text style={styles.noteText}>Task: {this.props.val.note}</Text>
			<Text style={styles.noteText}>Task added on: {this.props.val.date}</Text>
			<Text style={styles.noteTextDate}>Remind me on: {this.props.val.datee}</Text>
			<Text style={styles.noteTextDate}>{this.props.val.text}</Text>
			<Text style={styles.noteText}>{this.props.visibleDone}</Text>
			<TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
			<Text style={styles.noteDeleteText}>-</Text>
			</TouchableOpacity>
			</View>
			);
	}
}
const styles = StyleSheet.create({
	note: {
		position:'relative',
		padding: 20, 
		paddingRight:100,
		borderBottomWidth:2,
		borderBottomColor:'black',
	},
	noteText: {
		fontSize:16,
		fontWeight: 'bold',
	},
	noteTextDate:{
fontSize:16,
		fontWeight: 'bold',
	},
	noteDelete: {
		backgroundColor:"red",
		position:'absolute',
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		bottom:'50%',
		right:30,
		width:40,
		height:40,
		borderRadius:40/2,

	},
	noteDeleteText: {
		color:'white',
		fontSize:30,
		fontWeight: 'bold',

	}
});

export default Note;