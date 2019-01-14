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
                            <Text style={[styles.marginLeft10, styles.fontSize12, styles.whiteText]}>Flight</Text>
                        </View>
                        <View style={[styles._items, {backgroundColor: '#526199', paddingLeft: 50}]}>
                            <Image
                                source={require('../Assets/image/house.png')}
                            />
                            <Text style={[styles.marginLeft10, styles.fontSize12, styles.whiteText]}>Hotel</Text>
                        </View>
                        <View style={[styles._items, {backgroundColor: '#526199'}]}>
                            <Image
                                source={require('../Assets/image/car.png')}
                            />
                            <Text style={[styles.marginLeft10, styles.fontSize12, styles.whiteText]}>Rental car</Text>
                        </View>
                    </View>
                    
                    <View style={[styles.flexRow, styles.secondCol]}>
                        <View style={styles._selected}>
                            <Text style={[styles.whiteText, styles.marginLeft10]}>Roundtrip</Text>
                        </View>
                        <View style={styles.marginLeft50}>
                            <Text style={[styles.greyText, styles.marginLeft10]}>One way</Text>
                        </View>
                        <View style={styles.marginLeft50}>
                            <Text style={[styles.greyText, styles.marginLeft10]}>Multi-City</Text>
                        </View>
                    </View>
                    
                    <View style={styles.thirdCol}>
                        <View style={[styles.flexRow, styles.locationText]}>
                            <Image
                                source={require('../Assets/image/location.png')}
                            />
                            <Text style={[styles.whiteText, styles.marginLeft10]}>Tbilisi</Text>
                        </View>
                        <View style={[styles.flexRow, styles.locationText]}>
                            <Image
                                source={require('../Assets/image/location.png')}
                            />
                            <Text style={[styles.greyText, styles.marginLeft10]}>To</Text>
                        </View>
                    </View>
                    
                    <View style={[styles.flexRow, styles.fourthCol]}>
                        <View style={[styles.cities]}>
                            <Text style={[styles.whiteText, styles.fontSize12]}>Munich</Text>
                        </View>
                        <View style={[styles.cities, styles.marginLeft10]}>
                            <Text style={[styles.whiteText, styles.fontSize12]}>Amsterdam</Text>
                        </View>
                    </View>
                    
                    <View style={[styles.flexRow, styles.fifthCol]}>
                        <View style={[styles.flexRow, styles._filters]}>
                            <Image
                                source={require('../Assets/image/calendar.png')}
                            />
                            <Text style={[styles.greyText, styles.fontSize12, styles.marginLeft10]}>Departing</Text>
                        </View>
                        <View style={[styles.flexRow, styles._filters]}>
                            <Image
                                source={require('../Assets/image/calendar.png')}
                            />
                            <Text style={[styles.greyText, styles.fontSize12, styles.marginLeft10]}>returning</Text>
                        </View>
                        <View style={[styles.flexRow, styles._filters]}>
                            <Image
                                source={require('../Assets/image/users.png')}
                            />
                            <Text style={[styles.greyText, styles.fontSize12, styles.marginLeft10]}>Adults</Text>
                        </View>
                        <View style={[styles.flexRow, styles._filters]}>
                            <Image
                                source={require('../Assets/image/add.png')}
                            />
                            <Text style={[styles.greyText, styles.fontSize12, styles.marginLeft10]}>Economy</Text>
                        </View>
                    </View>
                    
                    <View style={[styles.flexRow, styles.sixthCol]}>
                        
                        <View style={[styles.flexRow, styles.leftSix]}>
                            
                            <View>
                                <View style={styles.square}></View>
                            </View>
                            
                            <View>
                                <Text style={[styles.marginLeft10, styles.greyText]}>Add a Hotel</Text>
                            </View>
                        </View>
                        
                        <View style={styles.rightSix}>
                            <View>
                                <Text style={[styles.fontSize12, styles.whiteText]}>Search Flights</Text>
                            </View>
                        </View>
                    
                    </View>
                
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
        borderBottomLeftRadius: 25,
        paddingLeft: 40,
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
        // backgroundColor: '#9f00ff',
        flex: 2,
        alignItems: 'center',
        
    },
    thirdCol: {
        // backgroundColor: '#1100ff',
        flex: 2,
        justifyContent: 'space-around'
        
    },
    fourthCol: {
        // backgroundColor: '#00d6ff',
        flex: 1.5,
        alignItems: 'center'
    },
    fifthCol: {
        // backgroundColor: '#00ff7d',
        flex: 3,
        flexWrap: 'wrap',
    },
    sixthCol: {
        // backgroundColor: '#fff000',
        flex: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 30
    },
    _items: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    whiteText: {
        color: 'white'
    },
    greyText: {
        color: '#a0a9cb'
    },
    _selected: {
        backgroundColor: '#49bcf7',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25
        
    },
    marginLeft10: {
        marginLeft: 10,
        fontSize: 12,
        fontWeight: 'bold'
    },
    marginLeft50: {
        marginLeft: 50
    },
    locationText: {
        alignItems: 'center',
        borderBottomColor: '#5369b4',
        borderBottomWidth: 1,
        marginRight: 30,
        paddingVertical: 5
    },
    cities: {
        backgroundColor: '#526199',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 25
    },
    fontSize12: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    _filters: {
        width: 190,
        height: 60,
        marginRight: 30,
        alignItems: 'center',
        borderBottomColor: '#5369b4',
        borderBottomWidth: 1,
    },
    square: {
        width: 15,
        height: 15,
        borderRadius:3,
        backgroundColor: '#fff'
    },
    leftSix: {
        width: 190,
        height: 60,
        // backgroundColor: 'lightgreen',
        alignItems: 'center'
    },
    rightSix: {
        width: 190,
        height: 45,
        backgroundColor: '#ff7555',
        marginLeft: 20,
        alignItems: 'center',
        justifyContent:'center',
        borderRadius:25
    }
});