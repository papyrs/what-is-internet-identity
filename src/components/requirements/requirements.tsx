import {Component, h, Host} from '@stencil/core';
import {IconDevices} from '../../icons/devices';
import i18n from '../../stores/i18n.store';
import {IconFingerPrint} from '../../icons/fingerprint';

@Component({
  tag: 'what-is-ii-requirements',
  styleUrl: 'requirements.scss',
  shadow: false,
  scoped: true
})
export class Requirements {
  render() {
    return (
      <Host>
        <h2>{i18n.state.requirements.title}</h2>

        <div>
          <IconFingerPrint />
          <p>{i18n.state.requirements.biometrics}</p>
        </div>
        <div>
          <IconDevices />
          <p innerHTML={i18n.state.requirements.android}></p>
          <p innerHTML={i18n.state.requirements.ios}></p>
          <p innerHTML={i18n.state.requirements.windows}></p>
        </div>
      </Host>
    );
  }
}
