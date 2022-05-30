import {Component, ComponentInterface, h, Host} from '@stencil/core';
import {IconLock} from '../../icons/lock';
import {IconPerson} from '../../icons/person';
import i18n from '../../stores/i18n.store';

@Component({
  tag: 'what-is-ii-hero',
  styleUrl: 'hero.scss',
  shadow: false,
  scoped: true
})
export class Hero implements ComponentInterface {
  render() {
    return (
      <Host>
        <h2>{i18n.state.hero.title}</h2>

        <div>
          <IconPerson />
          <p innerHTML={i18n.state.hero.authentication}></p>
        </div>
        <div>
          <IconLock />
          <p innerHTML={i18n.state.hero.password_less}></p>
        </div>
      </Host>
    );
  }
}
