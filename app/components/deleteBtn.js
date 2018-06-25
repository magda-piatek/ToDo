import React from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity,TextInput } from 'react-native';

export default class DeleteBtn extends React.Component {
	render() {
		return (
			<View key={this.props.keyval} style={styles.note}>
						<TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
					<Text style={styles.noteDeleteText}>Delete</Text>
				</TouchableOpacity>
			</View>
			);
		}
	}
