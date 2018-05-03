// @flow

import React, { Component } from 'react';
import { NativeModules } from 'react-native';

let mounted = 0;

export default class KeepAwake extends Component<void, void> {
  static activate() {
    NativeModules.KCKeepAwake.activate();
  }

  static deactivate() {
    NativeModules.KCKeepAwake.deactivate();
  }

  componentWillMount() {
    mounted++;
    KeepAwake.activate();
  }

  componentWillUnmount() {
    mounted--;
    if (!mounted) {
      KeepAwake.deactivate();
    }
  }

  render() {
    return null;
  }
}
