/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { UniButtonMode, UniLangItem, UniStoreType } from "./lang-menu/models";
import { UniStoreType as UniStoreType1 } from "./lang-menu";
export namespace Components {
    interface UniLangButtonIcon {
        "name": string;
        "round": boolean;
    }
    interface UniLangDefault {
        "activePath": string;
        "feature": string;
        "frame": boolean;
        "indexMode": 'init' | 'set' | 'merge';
        "isShadow": boolean;
        "selectedIndex": number;
        "shadow": boolean;
        "top": boolean;
        "type": UniStoreType;
        "value": Array<UniLangItem>;
    }
    interface UniLangListButton {
        "activate": boolean;
        "flag": string;
        "mini": boolean;
        "mode": UniButtonMode;
        "name": string;
        "round": boolean;
    }
    interface UniLangListItem {
        "activate": boolean;
        "flag": string;
        "name": string;
        "round": boolean;
    }
    interface UniLangMenu {
        "activePath": string;
        "feature": string;
        "frame": boolean;
        "linear": boolean;
        "mini": boolean;
        "mode": UniButtonMode;
        "only": boolean;
        "round": boolean;
        "separator": string;
        "shadow": boolean;
        "top": boolean;
        "translatePath": string;
        "type": UniStoreType;
        "value": string | Array<UniLangItem>;
    }
    interface UniLangMenuShadow {
        "activePath": string;
        "feature": string;
        "frame": boolean;
        "linear": boolean;
        "mini": boolean;
        "mode": UniButtonMode;
        "round": boolean;
        "separator": string;
        "shadow": boolean;
        "top": boolean;
        "translatePath": string;
        "type": UniStoreType;
        "value": string | Array<UniLangItem>;
    }
    interface UniTranslate {
        "activate": boolean;
        "bindend": string;
        "bindstart": string;
        "feature": string;
        "inactive": boolean;
        "path": string;
        "rendered": boolean;
        "separator": string;
        "top": boolean;
        "type": UniStoreType;
    }
    interface UniTranslateLoad {
        "activePath": string;
        "feature": string;
        "frame": boolean;
        "separator": string;
        "shadow": boolean;
        "top": boolean;
        "translatePath": string;
        "type": UniStoreType;
    }
    interface UniTranslateShadow {
        "activate": boolean;
        "bindend": string;
        "bindstart": string;
        "feature": string;
        "inactive": boolean;
        "path": string;
        "rendered": boolean;
        "separator": string;
        "top": boolean;
        "type": UniStoreType;
    }
}
declare global {
    interface HTMLUniLangButtonIconElement extends Components.UniLangButtonIcon, HTMLStencilElement {
    }
    var HTMLUniLangButtonIconElement: {
        prototype: HTMLUniLangButtonIconElement;
        new (): HTMLUniLangButtonIconElement;
    };
    interface HTMLUniLangDefaultElement extends Components.UniLangDefault, HTMLStencilElement {
    }
    var HTMLUniLangDefaultElement: {
        prototype: HTMLUniLangDefaultElement;
        new (): HTMLUniLangDefaultElement;
    };
    interface HTMLUniLangListButtonElement extends Components.UniLangListButton, HTMLStencilElement {
    }
    var HTMLUniLangListButtonElement: {
        prototype: HTMLUniLangListButtonElement;
        new (): HTMLUniLangListButtonElement;
    };
    interface HTMLUniLangListItemElement extends Components.UniLangListItem, HTMLStencilElement {
    }
    var HTMLUniLangListItemElement: {
        prototype: HTMLUniLangListItemElement;
        new (): HTMLUniLangListItemElement;
    };
    interface HTMLUniLangMenuElement extends Components.UniLangMenu, HTMLStencilElement {
    }
    var HTMLUniLangMenuElement: {
        prototype: HTMLUniLangMenuElement;
        new (): HTMLUniLangMenuElement;
    };
    interface HTMLUniLangMenuShadowElement extends Components.UniLangMenuShadow, HTMLStencilElement {
    }
    var HTMLUniLangMenuShadowElement: {
        prototype: HTMLUniLangMenuShadowElement;
        new (): HTMLUniLangMenuShadowElement;
    };
    interface HTMLUniTranslateElement extends Components.UniTranslate, HTMLStencilElement {
    }
    var HTMLUniTranslateElement: {
        prototype: HTMLUniTranslateElement;
        new (): HTMLUniTranslateElement;
    };
    interface HTMLUniTranslateLoadElement extends Components.UniTranslateLoad, HTMLStencilElement {
    }
    var HTMLUniTranslateLoadElement: {
        prototype: HTMLUniTranslateLoadElement;
        new (): HTMLUniTranslateLoadElement;
    };
    interface HTMLUniTranslateShadowElement extends Components.UniTranslateShadow, HTMLStencilElement {
    }
    var HTMLUniTranslateShadowElement: {
        prototype: HTMLUniTranslateShadowElement;
        new (): HTMLUniTranslateShadowElement;
    };
    interface HTMLElementTagNameMap {
        "uni-lang-button-icon": HTMLUniLangButtonIconElement;
        "uni-lang-default": HTMLUniLangDefaultElement;
        "uni-lang-list-button": HTMLUniLangListButtonElement;
        "uni-lang-list-item": HTMLUniLangListItemElement;
        "uni-lang-menu": HTMLUniLangMenuElement;
        "uni-lang-menu-shadow": HTMLUniLangMenuShadowElement;
        "uni-translate": HTMLUniTranslateElement;
        "uni-translate-load": HTMLUniTranslateLoadElement;
        "uni-translate-shadow": HTMLUniTranslateShadowElement;
    }
}
declare namespace LocalJSX {
    interface UniLangButtonIcon {
        "name"?: string;
        "round"?: boolean;
    }
    interface UniLangDefault {
        "activePath"?: string;
        "feature"?: string;
        "frame"?: boolean;
        "indexMode"?: 'init' | 'set' | 'merge';
        "isShadow"?: boolean;
        "selectedIndex"?: number;
        "shadow"?: boolean;
        "top"?: boolean;
        "type"?: UniStoreType;
        "value"?: Array<UniLangItem>;
    }
    interface UniLangListButton {
        "activate"?: boolean;
        "flag"?: string;
        "mini"?: boolean;
        "mode"?: UniButtonMode;
        "name"?: string;
        "round"?: boolean;
    }
    interface UniLangListItem {
        "activate"?: boolean;
        "flag"?: string;
        "name"?: string;
        "round"?: boolean;
    }
    interface UniLangMenu {
        "activePath"?: string;
        "feature"?: string;
        "frame"?: boolean;
        "linear"?: boolean;
        "mini"?: boolean;
        "mode"?: UniButtonMode;
        "only"?: boolean;
        "round"?: boolean;
        "separator"?: string;
        "shadow"?: boolean;
        "top"?: boolean;
        "translatePath"?: string;
        "type"?: UniStoreType;
        "value"?: string | Array<UniLangItem>;
    }
    interface UniLangMenuShadow {
        "activePath"?: string;
        "feature"?: string;
        "frame"?: boolean;
        "linear"?: boolean;
        "mini"?: boolean;
        "mode"?: UniButtonMode;
        "round"?: boolean;
        "separator"?: string;
        "shadow"?: boolean;
        "top"?: boolean;
        "translatePath"?: string;
        "type"?: UniStoreType;
        "value"?: string | Array<UniLangItem>;
    }
    interface UniTranslate {
        "activate"?: boolean;
        "bindend"?: string;
        "bindstart"?: string;
        "feature"?: string;
        "inactive"?: boolean;
        "path"?: string;
        "rendered"?: boolean;
        "separator"?: string;
        "top"?: boolean;
        "type"?: UniStoreType;
    }
    interface UniTranslateLoad {
        "activePath"?: string;
        "feature"?: string;
        "frame"?: boolean;
        "separator"?: string;
        "shadow"?: boolean;
        "top"?: boolean;
        "translatePath"?: string;
        "type"?: UniStoreType;
    }
    interface UniTranslateShadow {
        "activate"?: boolean;
        "bindend"?: string;
        "bindstart"?: string;
        "feature"?: string;
        "inactive"?: boolean;
        "path"?: string;
        "rendered"?: boolean;
        "separator"?: string;
        "top"?: boolean;
        "type"?: UniStoreType;
    }
    interface IntrinsicElements {
        "uni-lang-button-icon": UniLangButtonIcon;
        "uni-lang-default": UniLangDefault;
        "uni-lang-list-button": UniLangListButton;
        "uni-lang-list-item": UniLangListItem;
        "uni-lang-menu": UniLangMenu;
        "uni-lang-menu-shadow": UniLangMenuShadow;
        "uni-translate": UniTranslate;
        "uni-translate-load": UniTranslateLoad;
        "uni-translate-shadow": UniTranslateShadow;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "uni-lang-button-icon": LocalJSX.UniLangButtonIcon & JSXBase.HTMLAttributes<HTMLUniLangButtonIconElement>;
            "uni-lang-default": LocalJSX.UniLangDefault & JSXBase.HTMLAttributes<HTMLUniLangDefaultElement>;
            "uni-lang-list-button": LocalJSX.UniLangListButton & JSXBase.HTMLAttributes<HTMLUniLangListButtonElement>;
            "uni-lang-list-item": LocalJSX.UniLangListItem & JSXBase.HTMLAttributes<HTMLUniLangListItemElement>;
            "uni-lang-menu": LocalJSX.UniLangMenu & JSXBase.HTMLAttributes<HTMLUniLangMenuElement>;
            "uni-lang-menu-shadow": LocalJSX.UniLangMenuShadow & JSXBase.HTMLAttributes<HTMLUniLangMenuShadowElement>;
            "uni-translate": LocalJSX.UniTranslate & JSXBase.HTMLAttributes<HTMLUniTranslateElement>;
            "uni-translate-load": LocalJSX.UniTranslateLoad & JSXBase.HTMLAttributes<HTMLUniTranslateLoadElement>;
            "uni-translate-shadow": LocalJSX.UniTranslateShadow & JSXBase.HTMLAttributes<HTMLUniTranslateShadowElement>;
        }
    }
}
