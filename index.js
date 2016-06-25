/* @flow */

import React, { Component } from 'react';
import { NativeModules } from 'react-native';

// Track the number of calls to `activate` and `deactivate`. Only disable the wake lock if the calls
// to `deactivate` equal or exceed the calls to `activate`. This enables nesting.
let usageCount = 0;

export default class KeepAwake extends Component {
  static activate() {
    usageCount += 1;
    NativeModules.KCKeepAwake.activate();
  }

  static deactivate() {
    usageCount -= 1;
    if (usageCount <= 0) {
      NativeModules.KCKeepAwake.deactivate();
    }
  }

  componentWillMount() {
    KeepAwake.activate();
  }

  componentWillUnmount() {
    KeepAwake.deactivate();
  }

  render() {
    return null;
  }
}
