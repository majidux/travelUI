import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,FlatList} from 'react-native';

export default class RightSide extends Component {
    
    
    constructor(props){
        super(props);
        this.state={
            filteredData:[],
            lastData:[],
            page:0,
            loading:false
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        let lastData = this.state.lastData;
        fetch('https://randomuser.me/api/?results=15')
            .then(response => response.json())
            .then(data => {
                this.setState(
                    {lastData:[...lastData,data.results],loading:true},
                    ()=>this.setState({filteredData:this.state.lastData}));})
            .catch(error => alert('Server Not found'));
    };
    
    
    
    
    
    render() {
        return (
            <View style={styles.rightSide}>
                <View style={styles.menuHeader}>
                    <Text>asxa</Text>
                    <Text>asxa</Text>
                </View>
                <View style={styles.titleHeader}>
                    <Text style={styles.fontSizeTitle}>Best Value Offers to Europe!</Text>
                </View>
                <View style={styles._flatList}><FlatList/></View>
                <View style={styles._footer}></View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    rightSide: {
        flex: 1,
        backgroundColor:'lightgreen',
        paddingLeft: 50,
        paddingTop: 20
    },
    menuHeader:{
        backgroundColor:'pink',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    titleHeader:{
        backgroundColor: 'wheat',
        flex: 1,
        justifyContent: 'center'
    },
    _flatList:{
        backgroundColor:'skyblue',
        flex:6
    },
    _footer:{
        backgroundColor:'orange',
        flex:1
    },
    fontSizeTitle:{
        fontSize:20,
        color:'#000'
    }
});