import {I18n} from '../types/i18n';

export const en: I18n = {
  lang: 'en',
  hero: {
    title: "What's the Internet Identity?",
    authentication:
      'Internet Identity is the identity provider for the Internet Computer: A dapp facilitating <strong>anonymous authentication</strong> on the Internet Computer.',
    password_less:
      "Say <strong>goodbye to password</strong>. Internet Identity uses device's biometrics or a hardware authentication device to secure your sign-in flow."
  },
  requirements: {
    title: 'Devices and Requirements:',
    biometrics:
      'Make sure your device has supported hardware with built-in biometrics (Face/Touch ID).',
    key: 'If your device does not support biometrics you can use a security key (YubiKey) or a Ledger to authenticate.',
    android: 'Android - Works on Chrome with biometrics or other authentication hardware.',
    ios: 'iOS - Works on any up-to-date device with Face/Touch ID.'
  },
  anchor: {
    title: "Don't have an Identity Anchor?",
    go_to:
      "Go to <a aria-label='Link to Internet Identity dapp' rel='noopener noreferrer' href='https://identity.ic0.app/' target='_blank'>https://identity.ic0.app/</a>",
    create: 'Click "Create an Internet Identity Anchor".',
    enter_name: "Enter a name for the device you're using to create your Internet Identity.",
    follow: 'Follow the prompts to register the device.',
    reach_out: "Reach out to us if you're having any sign up or log in issues.",
    internet_identity: 'Internet Identity screenshot'
  }
};
