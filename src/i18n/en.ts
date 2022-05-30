import {I18n} from '../types/i18n';

export const en: I18n = {
  lang: 'en',
  hero: {
    title: "What's the Internet Identity?",
    authentication:
      'Internet Identity is an auth provider that facilitates <strong>anonymous authentication</strong> on the Internet Computer.',
    password_less:
      "Say <strong>goodbye to passwords</strong>. Internet Identity can use your device's biometrics or a hardware authentication device to secure your account."
  },
  requirements: {
    title: 'Devices and Requirements',
    biometrics: 'If your device does not support biometric identification (Face ID, Windows Hello, etc) you can use a security key (YubiKey) or a Ledger to authenticate.',
    android: '<strong>Android</strong> - Works on Chrome with biometrics or other authentication hardware.',
    ios: '<strong>Apple</strong> - Works on any up-to-date device with Face/Touch ID.',
    windows: '<strong>Windows</strong> - Works on any up-to-date device supporting Windows Hello.'
  },
  anchor: {
    title: "Creating an Identity Anchor",
    go_to:
      "Go to <a aria-label='Link to Internet Identity dapp' rel='noopener noreferrer' href='https://identity.ic0.app/' target='_blank'>https://identity.ic0.app/</a>",
    create: 'Click "Create an Internet Identity Anchor".',
    follow: 'Follow the instruction.',
    reach_out: "Reach out if you're having any issues.",
    internet_identity: 'Internet Identity screenshot'
  }
};
