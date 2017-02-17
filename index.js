/* @flow */

import React, { Component } from 'react';
import { NativeModules } from 'react-native';

export default class KeepAwake extends Component {
  static activate() {
    NativeModules.KCKeepAwake.activate();
  }

  static deactivate() {
    NativeModules.KCKeepAwake.deactivate();
  }

  componentWillMount() {
    KeepAwake.activate();
  }

  componentWillUnmount() {
    KeepAwake.deactivate();
  }

  render() {
    return this.props.children || null;
  }
}
