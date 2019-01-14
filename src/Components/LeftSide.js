import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


export default class LeftSide extends Component {
    
    
    render() {
        return (
            <View style={styles.leftSide}>
                <View style={styles.logoArea}>
                    
                    <View style={styles.logo}>
                        <View style={styles.logoView}>
                            <Text style={styles.titleStyle}>Travel.</Text>
                            <Image
                                source={require('../Assets/image/logo.png')}
                            />
                        </View>
                    </View>
                    
                    <View style={styles.social}>
                        <View style={styles.instagram}>
                            <Text style={styles._text}>Instagram</Text>
                        </View>
                        
                        <View style={styles.facebook}>
                            <Text style={styles._text}>Facebook</Text>
                        </View>
                    </View>
                
                
                </View>
                <View style={styles.searchField}>
                    
                    <View style={[styles.flexRow, styles.firstCol]}>
                        <View style={styles._items}>
                            <Image
                                source={require('../Assets/image/plane.png')}
                            />
                            <Text style={[{fontSize: 13,marginLeft: 10},styles.whiteText]}>Flight</Text>
                        </View>
                        <View style={[styles._items,{backgroundColor:'#526199'}]}>
                            <Image
                                source={require('../Assets/image/house.png')}
                            />
                            <Text style={[{fontSize: 13,marginLeft: 10},styles.whiteText]}>Hotel</Text>
                        </View>
                        <View style={[styles._items,{backgroundColor:'#526199'}]}>
                            <Image
                                source={require('../Assets/image/car.png')}
                            />
                            <Text style={[{fontSize: 13,marginLeft: 10},styles.whiteText]}>Rental car</Text>
                        </View>
                    </View>
                    
                    <View style={[styles.flexRow, styles.secondCol]}>
                        <View style={styles._selected}>
                            <Text style={styles.whiteText}>Roundtrip</Text>
                        </View>
                        <View>
                            <Text style={styles.greyText}>One way</Text>
                        </View>
                        <View>
                            <Text style={styles.greyText}>Multi-City</Text>
                        </View>
                    </View>
                    
                    <View style={styles.thirdCol}><Text>Third</Text></View>
                    
                    <View style={[styles.flexRow, styles.fourthCol]}><Text>Forth</Text></View>
                    
                    <View style={[styles.flexRow, styles.fifthCol]}><Text>Fifth</Text></View>
                    
                    <View style={[styles.flexRow, styles.sixthCol]}><Text>sixth</Text></View>
                
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    leftSide: {
        flex: 1,
        flexDirection: 'row'
    },
    logoArea: {
        flex: 1,
        alignItems: 'center',
    },
    searchField: {
        backgroundColor: '#405089',
        flex: 3,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25
    },
    logo: {
        flex: 1,
        justifyContent: 'flex-start',
        
        
    },
    social: {
        justifyContent: 'space-evenly',
        flex: 1
    },
    instagram: {
        transform: [
            {rotate: '-90deg'},
        ],
    },
    facebook: {
        transform: [
            {rotate: '-90deg'},
        ],
    },
    logoView: {
        transform: [
            {rotate: '-90deg'},
        ],
        marginTop: 60,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 20,
        color: 'black',
    },
    _text: {
        color: 'black',
    },
    flexRow: {
        flexDirection: 'row',
    },
    firstCol: {
        // backgroundColor: '#ff00a3',
        flex: 2,
        // justifyContent: 'space-evenly',
        // alignItems: 'center'
    },
    secondCol: {
        backgroundColor: '#9f00ff',
        flex: 2,
        justifyContent:'space-around',
        alignItems:'center',
    },
    thirdCol: {
        backgroundColor: '#1100ff',
        flex: 2
    },
    fourthCol: {
        backgroundColor: '#00d6ff',
        flex: 1.5
    },
    fifthCol: {
        backgroundColor: '#00ff7d',
        flex: 3
    },
    sixthCol: {
        backgroundColor: '#fff000',
        flex: 2
    },
    _items: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        flexDirection:'row'
    },
    whiteText:{
        color:'white'
    },
    greyText:{
        color:'#a0a9cb'
    },
    _selected:{
        backgroundColor:'#49bcf7',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius:25
        
    }
});