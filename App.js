/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MySelfViewController from './src/MySelf/MySelfViewController';
import MySelfViewContrllerLoadingView from './src/MySelf/MySelfViewControllerLoadingView';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props)
    this.state = {
      datas:[],
      isRefreshing: false
    }
  }
  componentWillMount() {
    this.refreshing()
    //延迟
    setTimeout(() => {
      this.getDatas()
    }, 2000);

    //定时器
    // setInterval(() => {
    //   this.getDatas()
    // }, 2000)
    
  }
  getDatas(){
    try {
      fetch("http://127.0.0.1:8080/datas")
      .then((response) => response.json())
      .then((responseJson) => {
        this.stopRefresh(responseJson.datas)
      })
    } catch (error) {
      console.log(error);
      this.stopRefresh()
    }
  }

  //更新 state， state一改变就会刷新界面就是再执行一次 render()方法
  stopRefresh(datas){
    this.setState({
      datas: this.state.datas.concat(datas),
      isRefreshing: false
    })
  }
  refreshing(){
    this.setState({
      isRefreshing: true
    })
  }

  render() {
    if (this.state.isRefreshing) {
      return(
        <MySelfViewContrllerLoadingView/>
      )
    }
    return (
      <MySelfViewController data={this.state.datas}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
