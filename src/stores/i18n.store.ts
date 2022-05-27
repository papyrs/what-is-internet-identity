import {createStore} from '@stencil/store';
import {en} from '../i18n/en';
import {I18n, Languages} from '../types/i18n';

interface I18nStore extends I18n {
  custom?: Record<string, string>;
}

const {state, onChange} = createStore<I18nStore>(en);

const enI18n = (): I18n => en;

onChange('lang', async (lang: Languages) => {
  let bundle: I18n;

  switch (lang) {
    default:
      bundle = enI18n();
  }

  Object.assign(state, {
    custom: state.custom,
    ...bundle
  });
});

export default {state};
