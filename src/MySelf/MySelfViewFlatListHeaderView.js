//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

// create a component
export class MySelfViewFlatListHeaderView extends Component {
    ///声明属性（组件创建成功后，属性变化就不会起作用了）
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
        backgroundColor: 'red',
        height: 80,
    },
});
