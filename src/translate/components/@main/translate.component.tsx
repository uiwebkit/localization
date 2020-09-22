import { Component, ComponentInterface, Element, h, Prop, VNode } from '@stencil/core';

import { UniStoreType } from '@uni/udk';

import { uniTranslateInit } from '../../utils/translate.init';
import { UniTranslateTemplate } from '../../utils/translate.template';

@Component({ tag: 'uni-translate' })
export class UniTranslateComponent implements ComponentInterface {
  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) active: boolean = false;

  @Prop({ reflect: true, mutable: true }) refresh: boolean = false;

  @Prop({ reflect: true }) feature: string = 'uni.store';

  @Prop({ reflect: true }) separator: string = '.';

  @Prop({ reflect: true }) type: UniStoreType = 'memory';

  @Prop({ reflect: true }) path = 'app.loc.translate';

  @Prop({ reflect: true }) start: string = '{{';

  @Prop({ reflect: true }) end: string = '}}';

  componentDidLoad(): void {
    uniTranslateInit();
  }

  render(): VNode {
    const { active, refresh, feature, separator, type, path,  start, end } = this;
    const props = { active, refresh, feature, separator, type, path,  start, end };

    return UniTranslateTemplate({ props }, <slot/>);
  }
}
