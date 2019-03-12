//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MySelfViewFlatListItem from './MySelfViewFlatListItem';
import { MySelfViewFlatListHeaderView } from './MySelfViewFlatListHeaderView';
import MySelfViewFlatListFooterView from './MySelfViewFlatListFooterView';
import PropTypes from 'prop-types';


// create a component
export class MySelfViewController extends Component {
    static propTypes = {
        data: PropTypes.array
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.data}
                    keyExtractor={(item, index) => {index.toString}}
                    renderItem={({item}) => <MySelfViewFlatListItem content={item.name}/>}
                    ListHeaderComponent = {<MySelfViewFlatListHeaderView title="haha"/>}
                    ListFooterComponent={<MySelfViewFlatListFooterView title="footer view"/>}
                    refreshing={false}
                    //refreshing = true , onRefresh 指向的方法就会一直执行
                    //onRefresh 赋值后就会在列表顶部有一个 类似下拉刷新的控件
                    onRefresh={() => {console.log('====================================');
                    console.log("on refresh haha");
                    console.log('====================================');}
                    }
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#2c3e50',
    },
    item: {
        padding: 10,
        fontSize: 16,
        height: 44,
    }
});

//make this component available to the app
export default MySelfViewController;
