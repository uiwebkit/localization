import { Component, ComponentInterface, Prop, VNode } from '@stencil/core';

import { UniButtonMode, UniLangItem, UniStoreType } from '../models';
import { UniLangMenuTemplate } from '../utils/lang-menu.template';
import { UniLangListTemplate } from '../utils/lang-list.template';
import { parseValue } from '../utils/helpers';

@Component({
  tag: 'uni-lang-menu-shadow',
  styleUrl: '../styles/lang-menu.css',
  shadow: true,
})
export class UniLangMenuShadowComponent implements ComponentInterface {

  @Prop({ reflect: true }) value: string | Array<UniLangItem> = [];

  @Prop({ reflect: true }) linear: boolean = false;

  @Prop({ reflect: true }) mini: boolean = false;

  @Prop({ reflect: true }) round: boolean = false;

  @Prop({ reflect: true }) mode: UniButtonMode;

  @Prop({ reflect: true }) top: boolean = false;

  @Prop({ reflect: true }) shadow: boolean = false;

  @Prop({ reflect: true }) frame: boolean = false;

  @Prop({ reflect: true }) type: UniStoreType = 'memory';

  @Prop({ reflect: true }) feature: string = 'uni.store';

  @Prop({ reflect: true }) separator: string = '.';

  @Prop({ reflect: true }) activePath: string = 'loc.active';

  @Prop({ reflect: true }) translatePath: string = 'loc.translate';

  render(): VNode {
    const {
      linear, mini, round, mode, top, shadow, frame, type, feature, separator, activePath, translatePath
    } = this;
    const value = parseValue(this.value);
    const data = { value, linear, mini, round, mode, activePath, translatePath, isShadow: true };
    const storeData = { top, shadow, frame, type, feature, separator };

    return this.linear ? UniLangListTemplate(data, storeData) : UniLangMenuTemplate(data, storeData);
  }
}
