//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

// create a component
class MySelfViewFlatListFooterView extends Component {
    static propTypes = {
        title: PropTypes.string
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.title}</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow',
        height: 120,
    },
});

//make this component available to the app
export default MySelfViewFlatListFooterView;
