import React from 'react';
import { Text, TextInput, View, Switch} from 'react-native';

export default class DataInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            north:0,
            south:0,
            east:0,
            west:0,
            div9:true,
            div48:true,
        }
    }
    Calculate=()=>{
        let Answer=((this.state.north+this.state.south)*(this.state.west+this.state.east))/4;
        if(this.state.div9)Answer/=9;
        if(this.state.div48)Answer/=48.4;
        return <Text>{Answer/100}</Text>;
    }
    render(){
        return(
            <View style={{ flex:1 , flexDirection: 'column', justifyContent: 'space-around'}} >
                <View style={{flex:1}}>
                    <Text>NORTH:</Text>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Enter North"
                        onChangeText={text => this.setState({north:text})}
                    />
                </View>
                <View style={{flex:1}}>
                    <Text>SOUTH:</Text>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Enter South"
                        onChangeText={text => this.setState({south:text})}
                    />
                </View>
                <View style={{flex:1}}>
                    <Text>EAST:</Text>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Enter East"
                        onChangeText={text => this.setState({east:text})}
                    />
                </View>
                <View style={{flex:1}}>
                    <Text>WEST:</Text>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Enter West"
                        onChangeText={text => this.setState({west:text})}
                    />
                </View>
                <View  style={{ flex:1 , flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View>
                        <Text>/9:</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={this.state.div9 ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={()=>this.setState({div9:!this.state.div9})}
                            value={this.state.div9}
                        />
                    </View>
                    <View>
                        <Text>/48.4:</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={this.state.div48 ? "#f5dd4b" : "#f4f3f4"}
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