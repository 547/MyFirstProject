import React, { PureComponent } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
/**
 * suibianxiede buxiangxiele zhenshi wuliao sile da pianzi haowuliao a
 * bu xiangzai zuozaizheliele shenmegui gongsi buxiangzaixiezhexiele 
 * biantai zhenxiangma renle zuoshenme guidongxi 
 * 
 * @export
 * @class MySelfViewFlatListItem
 * @extends {PureComponent}
 */
export default class MySelfViewFlatListItem extends PureComponent {
  static propTypes = {
    content: PropTypes.string
  }
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => console.log("touched")
      }>
          <Text>{this.props.content}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: '#F5FCFF',
        height: 44,
        padding: 10,
      },
})
