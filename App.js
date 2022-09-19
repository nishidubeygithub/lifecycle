import React, {Component} from "react"
import {View, Text, StyleSheet, Button} from "react-native"
class App extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = { 
      data:""
    }
    console.log('constructor')
  }
  componentDidMount() //mainly uesd to fetch API
  {
    console.log('componentDidMount')
  }
  componentDidUpdate()
  {
    console.log('componentDidUpdate')
  }
  shouldComponentUpdate(nextProps, nextState)
  {
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }

  
  //componentWillUpdate(nextProps, nextState)
//   {
//     console.log("componentWillUpdate", nextProps, nextState)
//  }
  render()
  {
    console.log('render')
    return(
    <View>
      <Text style = {styles.text}>Life Cycle</Text>
      <Button title = "Update Me" onPress={() => {this.setState({data: "update"})}}/>
      </View>
      )
  }
}
const styles = StyleSheet.create({
  text:{
    padding:20,
    fontSize:15,
    margin:20
  }
})
export default App;