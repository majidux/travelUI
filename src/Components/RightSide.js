import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class RightSide extends Component {
    
    
    // constructor(props){
    //     super(props);
    //     this.state={
    //         filteredData:[],
    //         lastData:[],
    //         page:0,
    //         loading:false
    //     }
    // }
    //
    // componentDidMount() {
    //     this.fetchData();
    // }
    //
    // fetchData = () => {
    //     let lastData = this.state.lastData;
    //     fetch('https://randomuser.me/api/?results=15')
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState(
    //                 {lastData:[...lastData,data.results],loading:true},
    //                 ()=>this.setState({filteredData:this.state.lastData}));})
    //         .catch(error => alert('Server Not found'));
    // };
    
    
    
    
    
    render() {
        return (
            <View style={styles.rightSide}>
                {/*{*/}
                    {/*this.state.lastData.map(({item,i})=>*/}
                        {/*<View key={i} style={{justifyContent:'center',alignItems:'center'}}><Text style={{color:'black',fontSize: 20}}>{item.gender}</Text></View>*/}
                    {/*)*/}
                {/*}*/}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    rightSide: {
        flex: 1,
        backgroundColor:'lightgreen'
    }
});