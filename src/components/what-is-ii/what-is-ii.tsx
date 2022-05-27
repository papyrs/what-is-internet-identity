import {Component, ComponentInterface, h, Host, Prop, Watch} from '@stencil/core';
import {Languages} from '../../types/i18n';

import configStore, {DEFAULT_ASSETS_DIR} from '../../stores/config.store';
import i18n from '../../stores/i18n.store';

@Component({
  tag: 'what-is-ii',
  styleUrl: 'what-is-ii.scss',
  shadow: false
})
export class WhatIsII implements ComponentInterface {
  /**
   * In which language should the summary be displayed.
   */
  @Prop()
  language: Languages = 'en';

  /**
   * In which folder are the assets - is the internet identity screenshot hosted?
   */
  @Prop()
  assetsDir: string | undefined;

  componentWillLoad() {
    this.updateConfig();
  }

  @Watch('language')
  onLangChange() {
    this.updateConfig();
  }

  @Watch('assetsDir')
  onAssetsDirChange() {
    this.updateConfig();
  }

  private updateConfig() {
    i18n.state.lang = this.language ?? 'en';
    configStore.state.assetsDir = this.assetsDir ?? DEFAULT_ASSETS_DIR;
  }

  render() {
    return (
      <Host>
        <what-is-ii-hero></what-is-ii-hero>
        <what-is-ii-requirements></what-is-ii-requirements>
        <what-is-ii-anchor></what-is-ii-anchor>
      </Host>
    );
  }
}
