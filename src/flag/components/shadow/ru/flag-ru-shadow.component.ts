import { Component, ComponentInterface, Prop, VNode } from '@stencil/core';

import { uniWatermark } from '@uni/common';

import { uniFlagRuSvg } from '../../../utils/templates/ru';

@Component({
  tag: 'uni-flag-ru-shadow',
  styleUrl: '../../../styles/flag.css',
  shadow: true
})
export class UniFlagRuShadowComponent implements ComponentInterface {
  @Prop() rounded: boolean;

  componentDidLoad(): void {
    uniWatermark('uni-flag', 'window');
  }

  render(): VNode {
    const { rounded } = this;

    return uniFlagRuSvg({ 'uni-flag': true, rounded });
  }
}
