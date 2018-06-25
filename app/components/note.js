import React from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity,TextInput } from 'react-native';

 class Note extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      show:false


    };
  } 
	render() {
		return (
			<View key={this.props.keyval} style={styles.note}>
				<Text style={styles.noteText}>{this.props.val.date}</Text>
				<Text style={styles.noteText}>{this.props.val.note}</Text>
				<Text style={styles.noteTextDate}>{this.props.val.datee}</Text>
				<Text style={styles.noteTextDate}>{this.props.val.text}</Text>

				<TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
					<Text style={styles.noteDeleteText}>Delete</Text>
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
		paddingLeft: 20,
		},
		noteDelete: {
		backgroundColor:"red",
		position:'absolute',
		justifyContent:'center',
		alignItems:'center',
		top:10,
		bottom:10,
		right:10,
			},
		noteDeleteText: {
		color:'white',
		
		}
	});

	export default Note;