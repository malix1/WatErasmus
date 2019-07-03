import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> MainPage </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        s: state
    }
}

export default connect(mapStateToProps,null)(MainPage);