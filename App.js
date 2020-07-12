import React, {Component} from 'react';
import {View,Text} from 'react-native';
import * as DeviceInfo from "react-native-device-info";

class App extends Component {
  constructor() {
    super();
    this.state={
      devicename:'',
        company:''
    }
  }
  componentDidMount(): void {
    let device=DeviceInfo.getDeviceId();
    DeviceInfo.getManufacturer().then(manufacturer => {
        // iOS: "Apple"
        // Android: "Google"
        // Windows: ?
        this.setState({company:manufacturer})
    });
    this.setState({devicename:device})

  }

  render() {
        return (
            <View style={{margin:20}}>
              <Text style={{fontSize:20,color:'red'}}>{this.state.devicename}</Text>
                <Text style={{fontSize:20,color:'red'}}>{this.state.company}</Text>

            </View>
        );
    }
}

export default App;
