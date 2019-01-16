import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight} from 'react-native';
import LeftSide from "../Components/LeftSide";
import RightSide from "../Components/RightSide";
import Bottom from "../Components/Bottom";

export default class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            theme: false
        }
    }
    
    changeTheme = () => this.setState({theme: !this.state.theme});
    
    render() {
        return (
            <View style={
                this.state.theme ?
                    styles.darkHome :
                    styles._home}>
                <View style={styles.upperWrapper}>
                    <LeftSide theme={this.state.theme}/>
                    <View style={styles._button}>
    
                        
                        <TouchableOpacity onPress={this.changeTheme}>
                            {this.state.theme ?
                                <View style={[styles._buttons,{backgroundColor:'#fff'}]}>
                                    <Text style={{color:'#405089',fontSize:12}}>Light Mode</Text>
                                </View>
                                :
                                <View style={[styles._buttons,{backgroundColor:'#405089'}]}>
                                    <Text style={{color:'#fff',fontSize:12}}>Dark Mode</Text>
                                </View>
                            }
                        </TouchableOpacity>
                        
                        
                        
                    </View>
                    <RightSide theme={this.state.theme}/>
                </View>
                <View style={styles.downWrapper}>
                    <Bottom theme={this.state.theme}/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    _home: {
        flex: 1,
        backgroundColor: '#fff'
    },
    darkHome: {
        flex:1,
        backgroundColor: '#2b3844'
    },
    upperWrapper: {
        flex: 3,
        flexDirection: 'row'
    },
    downWrapper: {
        flex: 1,
    },
    _buttons: {
        borderRadius: 20,
        elevation: 2,
        marginLeft: 1,
        marginTop: 20,
        paddingVertical: 10,
        alignItems: 'center'
    },
    _button:{
        height: 50,
        width: 80,
        justifyContent: 'center',
    }
});