import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, FlatList, TouchableHighlight, ActivityIndicator} from 'react-native';

export default class RightSide extends Component {
    
    
    // States
    
    constructor(props) {
        super(props);
        this.state = {
            filteredData: [],
            lastData: [],
            page: 0,
            loading: false,
            selected: '',
            date:new Date(),
        }
    }
    
    
    // Lifecycles
    
    componentDidMount() {
        this.fetchData();
        this.timer();
    }
    
    
    // Fetching data from api
    
    fetchData = () => {
        let lastData = this.state.lastData;
        fetch('https://randomuser.me/api/?results=15')
            .then(response => response.json())
            .then(data => {
                this.setState(
                    {lastData: [...lastData, ...data.results], loading: true});
            })
            .catch(error => alert('Server Not found'));
    };
    
    
    // Functions
    
    pressButtonHide = () => this.setState({selected: !this.state.selected});
    pressButtonShow = () => this.setState({selected: !this.state.selected});
    header = () => !this.state.loading && <ActivityIndicator size={'large'} color={'#405089'}/>;
    handleEnd = () => this.setState(_reFresh=>({page:_reFresh.page + 1}),()=> this.fetchData());
    _handleCategorySelect = (index) => { this.setState({selected: item.email}); };
    timer = () => this.timer = setInterval( ()=>this._time(),1000);
    _time = () => this.setState({date:new Date()});
    render() {
        return (
            <View style={styles.rightSide}>
                <View style={styles.menuHeader}>
                    <View style={styles.menuItems}>
                        <Text style={[styles.fontSize10,styles.boldFont,styles.greyFont]}>Check-in</Text>
                    </View>
                    <View style={styles.menuItems}>
                        <Text style={[styles.fontSize10,styles.boldFont,styles.greyFont]}>Flight Status</Text>
                    </View>
                    <View style={styles.menuItems}>
                        <Text style={[styles.fontSize10,styles.boldFont,styles.mainColor]}>Menu</Text>
                    </View>
                    <View style={[styles.menuItems, styles.lineMenu]}>
                        <View style={{borderBottomWidth: 2,borderBottomColor:'#405089' , width: 15}}></View>
                        <View style={{borderTopWidth: 2,borderTopColor:'#405089' , width: 25}}></View>
                    </View>
                </View>
                <View style={styles.titleHeader}>
                    <Text style={[styles.fontSizeTitle,styles.mainColor]}>Best Value Offers to Europe!</Text>
                    <Text style={[styles.boldFont,styles.mainColor]}>{this.state.date.toLocaleTimeString()}</Text>
                </View>
                
                <View style={styles._flatList}>
                    
                    {/*FlatList starts here*/}
                    
                    <FlatList
                        data={this.state.lastData}
                        keyExtractor={(item) => item.email}
                        ListHeaderComponent={this.header}
                        onEndReached={()=>this.handleEnd}
                        onEndReachedThreshold={.5}
                        extraData={()=>this.state.selected}
                        renderItem={({item}) =>
                            
                            
                            <View style={styles.flatListInside}>
                                <View style={[styles.flexRow,styles.itemFlat]}>
                                    <View>
                                        <Text
                                            style={[styles.boldFont,styles.mainColor]}>{item.location.city.charAt(0).toUpperCase() + item.location.city.slice(1).toLowerCase()}</Text>
                                    </View>
                                    <View style={[styles.flexRow,{alignItems:'center'}]}>
                                        <Text style={styles.fontSize10}>From </Text>
                                        <Text style={[styles.boldFont,styles.mainColor]}>{item.dob.age}0 GEL</Text>
                                    </View>
                                </View>
                                <View style={[styles.flexRow,styles.itemFlat]}>
                                    
                                    <View style={{justifyContent:'center'}}>
                                        <Text style={[styles.mainColor,styles.boldFont]}>{item.registered.date.substring(6,10)} - {item.dob.date.substring(6,10)}</Text>
                                    </View>
                                    
                                    <TouchableHighlight
                                        underlayColor={'#e7e7e7'}
                                        style={this.state.selected ?
                                            styles._highlight : styles._highlightSelected}
                                        activeOpacity={.8}
                                        onPress={() => this._handleCategorySelect}
                                        onHideUnderlay={this.pressButtonHide.bind(this)}
                                        onShowUnderlay={this.pressButtonShow.bind(this)}
                                    >
                                        <View style={[styles.flexRow, {alignItems: 'center'}]}>
                                            <View style={styles.booking}>
                                                <Text style={[styles.fontSize12, styles.whiteFont]}>Book now</Text>
                                            </View>
            
                                            <View style={styles.booking}>
                                                <Image
                                                    source={require('../Assets/image/right-arrow.png')}
                                                />
                                            </View>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                            
                            
                            </View>
                            
                            
                        }
                    />
                    
                    {/*FlatList ends here*/}
                
                </View>
                
                <View style={styles._footer}>
                    <View>
                        <Text style={[styles.fontSize10,styles.greyFont]}>*Round-trip including all taxes,</Text>
                        <Text style={[styles.fontSize10,styles.greyFont]}>fees and carrier charges.</Text>
                    </View>
                    <View>
                        <Text style={[styles.mainColor,styles.boldFont]}>See all</Text>
                    </View>
                </View>
            
            </View>
        );
    }
}
const styles = StyleSheet.create({
    rightSide: {
        flex: 1,
        paddingLeft: 50,
        paddingTop: 20
    },
    menuHeader: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    titleHeader: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection:'row',
        alignItems:'center',
        paddingRight: 40
    },
    _flatList: {
        // backgroundColor: 'skyblue',
        flex: 6,
        paddingRight: 40
    },
    _footer: {
        // backgroundColor: 'orange',
        flex: 1,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        paddingRight: 80
    },
    fontSizeTitle: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold'
    },
    menuItems: {
        marginHorizontal: 15
    },
    lineMenu: {
        height: 15,
        justifyContent: 'space-between',
    },
    fontSize12: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    flatListInside: {
        // backgroundColor:'grey',
        height: 100,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#e7e8f3',
        justifyContent: 'space-between',
        alignItems: 'center'
        // paddingVertical: 10,
        // marginVertical: 10
    },
    boldFont: {
        fontWeight: 'bold'
    },
    flexRow: {
        flexDirection: 'row',
    },
    booking: {
        marginHorizontal: 10
    },
    _blue: {
        backgroundColor: 'blue',
        marginHorizontal: 10
    },
    _highlight: {
        backgroundColor: '#49bcf7',
        borderRadius: 30,
        padding: 9
    },
    whiteFont: {
        color: '#fff'
    },
    itemFlat:{
        justifyContent:'space-between',
        // backgroundColor:'green',
        width:250
    },
    fontSize10:{
        fontSize:10,
        color:'#9aa0ae'
    },
    mainColor:{
        color:'#454c75'
    },
    greyFont:{
        color:'#9aa0ae'
    },
    _highlightSelected:{
        backgroundColor: 'grey',
        borderRadius: 30,
        padding: 9
    }
});