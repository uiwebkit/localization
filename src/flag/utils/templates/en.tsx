import { h, VNode } from '@stencil/core';

import { UniObject, UniTemplate } from '@uni/common';

export function uniFlagEnSvg(classes: UniObject<boolean>): VNode {
  return UniTemplate(
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" class={classes}>
      <path fill="#012169" d="M0 0h512v512H0z"/>
      <path fill="#FFF" d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"/>
      <path fill="#C8102E" d="M184 324l11 34L42 512H0v-3l184-185zm124-12l54 8 150 147v45L308 312zM512 0L320 196l-4-44L466 0h46zM0 1l193 189-59-8L0 49V1z"/>
      <path fill="#FFF" d="M176 0v512h160V0H176zM0 176v160h512V176H0z"/>
      <path fill="#C8102E" d="M0 208v96h512v-96H0zM208 0v512h96V0h-96z"/>
    </svg>
  );
}
