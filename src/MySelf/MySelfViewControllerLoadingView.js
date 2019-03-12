//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class MySelfViewContrllerLoadingView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>loading...</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#ffff',
    },
});

//make this component available to the app
export default MySelfViewContrllerLoadingView;
