import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { UniStoreType } from '@uni/udk';

import { uniTranslateInit } from '../../utils/translate.init';
import { UniTranslateTemplate } from '../../utils/translate.template';

@Component({ tag: 'uni-translate' })
export class UniTranslateComponent implements ComponentInterface {

  // @Prop({ mutable: true }) activate: boolean = false;

  @Prop({ reflect: true }) inactive: boolean = false;

  @Prop({ reflect: true }) type: UniStoreType = 'memory';

  @Prop({ reflect: true }) feature: string = 'uni.store';

  @Prop({ reflect: true }) separator: string = '.';

  @Prop({ reflect: true }) path = 'app.loc.translate';

  @Prop({ reflect: true }) start: string = '{{';

  @Prop({ reflect: true }) end: string = '}}';

  render(): VNode {
    const { inactive, feature, separator, type, path, start, end } = this;
    const props = { inactive, feature, separator, type, path, start, end };

    // if (this.activate) {
    //   setTimeout(() => this.activate = false);
    // }

    return UniTranslateTemplate({ props }, <slot />);
  }

  componentDidLoad(): void {
    uniTranslateInit();
  }
}
