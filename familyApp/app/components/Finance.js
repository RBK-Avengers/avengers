//import react from react
import React from 'react';
//import element from reacr-native 
import { StyleSheet, Text, View, TouchableOpacity, ListView, Alert } from 'react-native';
//import table from react native table component
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
//import axios to make router works
import axios from 'axios';    

const UserTypeGenderText={
  //female (Mother) / male (Father) / child (Children)
  female:'Mother',
  male:'Father',
  child:'Child',
}

//export Home from the react componant
export default class Finance extends React.Component{
  //the constructor
  constructor(){
    //super for ES6
    super();
    //all the data save before to can show in the bar
    this.state={
      //defult thing when change from data base change here 🙂 <3
      //female (Mother) / male (Father)/ child (Children)
      userType:'female',
      //from 100%
      userProgress:'100',
      //for how many child in family
      userRanking:'2',
      //the money still
      restMoney:'1500',
      //
      tableHead:  ['Name', 'Cost'],
      tableName: ['Water', 'Electricity', 'Shortage', 'Family Event'],
      tableCost:  [[12],     [20],            [40],         [50]    ],
      tableTotal:['Total',0]
    };
    //auto call function when render this scren
    this.calculateTotal();
  }
  calculateTotal(){
    var total=0;
    for (var i = 0; i < this.state.tableCost.length; i++) {
      total+=this.state.tableCost[i][0];
    }
    //cant use set state so we use this .state
    this.state.tableTotal[1]=total;
    //this.setState({tableTotal : ['Total',total]});
    //alert('you cal total: '+this.state.tableTotal[1]);
  }
  fectch1(){
    //return axios.get('http://192.168.1.82:3000')
    return fetch('http://192.168.1.82:3000')
      .then((response) => response.json())
        .then((responseJson) => {
          console.log("server done:",JSON.stringify(responseJson) )
           alert(JSON.stringify(responseJson));
        })
      .catch(function (error) {
       console.log(error);
      });  
  }
  addToFinance(){
    alert('add To Finance');
  };
  editFromFinance(){
    Alert.alert(
      'Edit From Finance',
      'Choose which you want to edit',
      [
        {text: 'Cancel', onPress: () => alert('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => alert('OK Pressed')},
      ],
      { cancelable: false }
    )  
  };
  removeFromFinance(){
    alert('Remove From Finance');
  };
  calculate(){
    this.calculateTotal();
    alert('calculate');
  };
  see(){
    alert(this.state.tableTotal[1]);
  };
  render() {
    //what return   
    return (
      <View style={styles.allPage}>
        <View style={styles.tableView}>
          <Table style={styles.table}>
            <Row data={this.state.tableHead} style={styles.head} textStyle={styles.textHead}/>
            <TableWrapper style={styles.wrapper}>
              <Col data={this.state.tableName} style={styles.name} textStyle={styles.textName}/>
              <Rows data={this.state.tableCost} style={styles.cost} textStyle={styles.textCost} flexArr={[1]}/>
            </TableWrapper>
            <Row data={this.state.tableTotal} style={styles.total} textStyle={styles.textTotal}/>
          </Table>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.btnAdd} onPress={this.addToFinance.bind(this)}>
            <Text style={styles.textBtnAdd}>Add</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnEdit} onPress={this.editFromFinance.bind(this)}>
            <Text style={styles.textBtnEdit}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnRemove} onPress={this.removeFromFinance.bind(this)}>
            <Text style={styles.textBtnRemove}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }    
}

const styles = StyleSheet.create({
  allPage: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    marginBottom:35,
  },
  tableView: {
    flexDirection: 'column',
    backgroundColor: 'white',
    // backgroundColor: '#0bf5fb',
  },
  table: {
    backgroundColor: '#6239BD',
    marginRight:10,
    marginLeft:10,
    marginTop:10,
    marginBottom:10,
  },
  wrapper: { 
    flexDirection: 'row',
  },
  head: {  
    height: 50,  
    backgroundColor: '#123456',
  },
  textHead:{
    fontWeight: 'bold',
    textAlign: 'center', 
    fontSize: 40,
    color:'#3cff00',
  },
  name: {  
     // backgroundColor: '#6239BD' 
  },
  textName:{
    fontWeight: 'bold',
    textAlign: 'center', 
    fontSize: 25,
    color:'white',
  },
  cost: {  
    // backgroundColor: '#6239BD',
  },
  textCost:{
    fontWeight: 'bold',
    textAlign: 'center', 
    fontSize: 25,
    color:'white', 
  },
  total:{
    height: 40,  
    backgroundColor: '#123456', 
  },
  textTotal:{
    fontWeight: 'bold',
    textAlign: 'center', 
    fontSize: 30,
    color:'red', 
  },
  btnView: {
    backgroundColor: 'white',
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center',
  },
  btnAdd:{
    backgroundColor: '#3cff00',
    marginTop:10,
    padding:10,
  },
  textBtnAdd:{
    fontWeight: 'bold',
    textAlign: 'center', 
    fontSize: 30,
    color:'black', 
  },
  btnEdit:{
    backgroundColor: '#6239BD',
    marginTop:10,
    padding:10,
    marginLeft:10,
  },
  textBtnEdit:{
    fontWeight: 'bold',
    textAlign: 'center', 
    fontSize: 30,
    color:'black', 
  },
  btnRemove:{
    backgroundColor: 'red',
    marginTop:10,
    padding:10,
    marginLeft:10,
  },
  textBtnRemove:{
    fontWeight: 'bold',
    textAlign: 'center', 
    fontSize: 30,
    color:'black', 
  },
});


/*


         tableHead: ['Name', 'Cost'],
      tableTitle: ['water', 'electriciti', 'shortige', 'event'],
      tableData: [
        ['12'],
        ['20'],
        ['40'],
        ['50']
      ],

      container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' }

*/