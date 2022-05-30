import { Component, ComponentInterface, getAssetPath, h, Host, State } from '@stencil/core';
import i18n from '../../stores/i18n.store';
import configStore from '../../stores/config.store';

@Component({
  tag: 'what-is-ii-anchor',
  styleUrl: 'anchor.scss',
  shadow: false,
  scoped: true,
  assetsDirs: ['images']
})
export class Anchor implements ComponentInterface {

  @State()
  private imageSrc: string | undefined;

  connectedCallback() {
    try {
      this.imageSrc = getAssetPath(`./${configStore.state.assetsDir}/internet-identity.webp`);
    } catch (_err) {
      this.imageSrc = `./${configStore.state.assetsDir}/internet-identity.webp`;
    }
  }

  render() {
    return (
      <Host>
        <h2>{i18n.state.anchor.title}</h2>

        {this.imageSrc && <img src={this.imageSrc} loading="lazy" alt={i18n.state.anchor.internet_identity} /> }

        <ol>
          <li innerHTML={i18n.state.anchor.go_to}></li>
          <li>{i18n.state.anchor.create}</li>
          <li>{i18n.state.anchor.follow}</li>
        </ol>

        <p>{i18n.state.anchor.reach_out}</p>
      </Host>
    );
  }
}
