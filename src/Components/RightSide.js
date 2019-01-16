import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    TouchableHighlight,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';

export default class RightSide extends Component {
    
    
    // States
    
    constructor(props) {
        super(props);
        this.state = {
            filteredData: [],
            lastData: [],
            page: 0,
            loading: false,
            menu: false,
            selectedContact: null
        }
    }
    
    
    // Lifecycles
    
    componentDidMount() {
        this.fetchData();
    }
    
    
    // Fetching data from api
    
    fetchData = () => {
        let lastData = this.state.lastData;
        fetch('https://randomuser.me/api/?results=15')
            .then(response => response.json())
            .then(data => {
                this.setState(
                    {lastData: [...lastData, ...data.results], loading: true});
                          this.setState({filteredData:this.state.lastData})
            })
            .catch(error => alert('Server Not found'));
    };
    
    
    // Functions
    
    pressButtonHide = () => this.setState({selected: !this.state.selected});
    pressButtonShow = () => this.setState({selected: !this.state.selected});
    header = () => !this.state.loading && <ActivityIndicator size={'large'} color={'#405089'}/>;
    handleEnd = () => this.setState(_reFresh => ({page: _reFresh.page + 1}), () => this.fetchData());
    pressMenu = () => this.setState({menu: !this.state.menu});
    
    
    render() {
        return (
            <View style={styles.rightSide}>
                <View style={styles.menuHeader}>
                    <View style={styles.menuItems}>
                        
                        <Text style={[styles.fontSize10, styles.boldFont, styles.greyFont]}>Check-in</Text>
                    </View>
                    
                    <View style={styles.menuItems}>
                        <Text style={[styles.fontSize10, styles.boldFont, styles.greyFont]}>Flight Status</Text>
                        {this.state.menu &&
                        <View style={styles.hiddenMenu}>
                            <TouchableOpacity>
                                <Text style={[styles.mainColor, styles.boldFont]}>Home</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={[styles.mainColor, styles.boldFont]}>Menu</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={[styles.mainColor, styles.boldFont]}>About</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={[styles.mainColor, styles.boldFont]}>Contact</Text>
                            </TouchableOpacity>
                        </View>
                        }
                    </View>
                    <View style={styles.menuItems}>
                        <Text style={!this.props.theme ? [styles.fontSize10, styles.boldFont, styles.mainColor] : [styles.fontSize10, styles.boldFont, styles.darkFont] }
                              onPress={() => this.pressMenu()}>Menu</Text>
                    
                    
                    </View>
                    <View style={[styles.menuItems, styles.lineMenu]}>
                        <View style={!this.props.theme ? {borderBottomWidth: 2, borderBottomColor: '#405089', width: 15}:{borderBottomWidth: 2, borderBottomColor: '#fff', width: 15}}></View>
                        <View style={!this.props.theme ? {borderTopWidth: 2, borderTopColor: '#405089', width: 25}:{borderTopWidth: 2, borderTopColor: '#fff', width: 25}}></View>
                    </View>
                </View>
                <View style={styles.titleHeader}>
                    <Text style={!this.props.theme ? [styles.fontSizeTitle, styles.mainColor] : [styles.fontSizeTitle, styles.darkFont]}>Best Value Offers to Europe!</Text>
                </View>
                
                <View style={styles._flatList}>
                    
                    {/*FlatList starts here*/}
                    
                    <FlatList
                        data={this.state.lastData}
                        keyExtractor={(item) => item.email}
                        ListHeaderComponent={this.header}
                        onEndReached={() => this.handleEnd()}
                        onEndReachedThreshold={.5}
                        extraData={() => this.state.selected}
                        renderItem={({item}) =>
                            
                            
                            <View style={!this.props.theme ? styles.flatListInside : styles.flatListInsideDark}>
                                <View style={[styles.flexRow, styles.itemFlat]}>
                                    <View>
                                        <Text
                                            style={!this.props.theme ? [styles.boldFont, styles.mainColor]:[styles.boldFont, styles.darkFont]}>{item.location.city.charAt(0).toUpperCase() + item.location.city.slice(1).toLowerCase()}</Text>
                                    </View>
                                    <View style={[styles.flexRow, {alignItems: 'center'}]}>
                                        <Text style={styles.fontSize10}>From </Text>
                                        <Text style={!this.props.theme ? [styles.boldFont, styles.mainColor]:[styles.boldFont, styles.darkFont]}>{item.dob.age}0 GEL</Text>
                                    </View>
                                </View>
                                <View style={[styles.flexRow, styles.itemFlat]}>
                                    
                                    <View style={{justifyContent: 'center'}}>
                                        <Text
                                            style={!this.props.theme ? [styles.mainColor, styles.boldFont]:[styles.darkFont, styles.boldFont]}>{item.registered.date.substring(6, 10)} - {item.dob.date.substring(6, 10)}</Text>
                                    </View>
                                    
                                    <TouchableHighlight
                                        underlayColor={'#e7e7e7'}
                                        style={this.state.selectedContact !== item.email ?
                                            styles._highlight : styles._highlightSelected}
                                        activeOpacity={.8}
                                        onPress={() => this.setState({selectedContact: item.email})}
                                        onHideUnderlay={this.pressButtonHide.bind(this)}
                                        onShowUnderlay={this.pressButtonShow.bind(this)}
                                    >
                                        <View style={[styles.flexRow, {alignItems: 'center'}]}>
                                            <View style={styles.booking}>
                                                <Text style={
                                                    this.state.selectedContact !== item.email ?
                                                        styles.blackFont : styles.whiteFont
                                                }>Book now</Text>
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
                        <Text style={[styles.fontSize10, styles.greyFont]}>*Round-trip including all taxes,</Text>
                        <Text style={[styles.fontSize10, styles.greyFont]}>fees and carrier charges.</Text>
                    </View>
                    <View>
                        <Text style={!this.props.theme ? [styles.mainColor, styles.boldFont]:[styles.darkFont, styles.boldFont]}>See all</Text>
                    </View>
                </View>
            
            </View>
        );
    }
}
const styles = StyleSheet.create({
    rightSide: {
        flex: 1,
        paddingTop: 20,
    
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
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 40
    },
    _flatList: {
        flex: 6,
        paddingRight: 40
    },
    _footer: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
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
        height: 100,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#e7e8f3',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flatListInsideDark: {
        height: 100,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#405089',
        justifyContent: 'space-between',
        alignItems: 'center'
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
        // backgroundColor: '#49bcf7',
        borderRadius: 30,
        padding: 9
    },
    whiteFont: {
        color: '#fff'
    },
    itemFlat: {
        justifyContent: 'space-between',
        // backgroundColor:'green',
        width: 250
    },
    fontSize10: {
        fontSize: 10,
        color: '#9aa0ae'
    },
    mainColor: {
        color: '#454c75'
    },
    darkFont:{
        color:'#fff'
    },
    greyFont: {
        color: '#9aa0ae'
    },
    _highlightSelected: {
        backgroundColor: '#49bcf7',
        borderRadius: 30,
        padding: 9
    },
    hiddenMenu: {
        backgroundColor:'#fcfcfc',
        width: 140,
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        marginTop: 30,
        borderRadius: 1,
        elevation: 4
        // marginRight: 140,
        // zIndex: 999
    },
    blackFont: {
        color: '#9aa0ae',
        fontWeight: 'bold'
    }
});