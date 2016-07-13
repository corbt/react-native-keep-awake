/* @flow */

import React, { Component } from 'react';
import { NativeModules } from 'react-native';

export default class KeepAwake extends Component {

  static isActive = false;

  static activate() {
      if (!KeepAwake.isActive) {
          NativeModules.KCKeepAwake.activate();
          KeepAwake.isActive = true;
      }
  }

  static deactivate() {
      if (KeepAwake.isActive) {
          NativeModules.KCKeepAwake.deactivate();
          KeepAwake.isActive = false;      
      }
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
