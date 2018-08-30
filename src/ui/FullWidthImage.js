import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Image from 'react-native-image-progress';

class FullWidthImage extends Component {
  constructor(props) {
    super(props);

    this.state = props.size || {
      width: 0,
      height: 0
    };
  }

  _onLayout = event => {
    const containerWidth = event.nativeEvent.layout.width
    const { size, source } = this.props;

    if (size) {
      const { height, width } = this.props.size;
      this.setState({
        width: containerWidth,
        height: containerWidth * (height / width)
      })
    } else {
      Image.getSize(source.uri, (width, height) => {
        this.setState({
          width: containerWidth,
          height: containerWidth * height / width
        })
      })
    }
  }

  render() {
    const { style, source } = this.props;

    return (
      <View
        style={[style, styles.container]}
        onLayout={this._onLayout}
      >
        <Image
          source={source}
          style={{
            width: this.state.width,
            height: this.state.height
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch'
  }
});

export default FullWidthImage;
