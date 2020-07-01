import React from 'react';
import { Text, TextInput, View, Switch, StyleSheet} from 'react-native';

export default class DataInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            north:200,
            south:200,
            east:200,
            west:200,
            div9:true,
            div48:true,
        }
    }
    Calculate=()=>{
        let Answer=((this.state.north+this.state.south)/2)*((this.state.west+this.state.east)/2);
        if(this.state.div9)Answer=Answer/9;
        if(this.state.div48)Answer=Answer/48.4;
        return <Text>{Answer}</Text>;
    }
    render(){
        return(
            <View style={{ flex:1 , flexDirection: 'column', justifyContent: 'center'}} >
                <View style={{flex:1}}>
                    <Text>NORTH:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter North"
                        onChangeText={text => this.setState({north:text})}
                    />
                </View>
                <View style={{flex:1}}>
                    <Text>SOUTH:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter South"
                        onChangeText={text => this.setState({south:text})}
                    />
                </View>
                <View style={{flex:1}}>
                    <Text>EAST:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter East"
                        onChangeText={text => this.setState({east:text})}
                    />
                </View>
                <View style={{flex:1}}>
                    <Text>WEST:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter West"
                        onChangeText={text => this.setState({west:text})}
                    />
                </View>
                <View  style={{ flex:1 , flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View style={styles.bool}>
                        <Text>/9:</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "lightgreen" }}
                            thumbColor={this.state.div9 ? "blue" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={()=>this.setState({div9:!this.state.div9})}
                            value={this.state.div9}
                        />
                    </View>
                    <View style={styles.bool}>
                        <Text>/48.4:</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "lightgreen" }}
                            thumbColor={this.state.div48 ? "blue" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={()=>this.setState({div48:!this.state.div48})}
                            value={this.state.div48}
                        />
                    </View>
                </View>
                <View style={{flex:2}}>
                    <Text>THE AREA IS </Text>
                    <this.Calculate/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
      flexDirection:'row',
      color:'white',
      height:40,
      borderRadius:1000,
      backgroundColor:"blue",
      alignItems: "center",
      textAlign: 'center',
      justifyContent: "center"
    },
    bool: {
        flexDirection:'row',
        borderRadius:1000,
        backgroundColor:"#f2fa64",
        width:200,
        alignItems: "center",
        textAlign: 'center',
        justifyContent: "center"
    }
});