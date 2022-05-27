import {Component, h, Host} from '@stencil/core';
import {IconDevices} from '../../icons/devices';
import {IconSmartphone} from '../../icons/smartphone';
import i18n from '../../stores/i18n.store';

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
          <IconDevices />
          <p>{i18n.state.requirements.biometrics}</p>
          <p>{i18n.state.requirements.key}</p>
        </div>
        <div>
          <IconSmartphone />
          <p>{i18n.state.requirements.android}</p>
          <p>{i18n.state.requirements.ios}</p>
        </div>
      </Host>
    );
  }
}
