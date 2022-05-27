import {createStore} from '@stencil/store';

interface ConfigStore {
  assetsDir: string;
}

export const DEFAULT_ASSETS_DIR = 'images';

const {state} = createStore<ConfigStore>({
  assetsDir: DEFAULT_ASSETS_DIR
});

export default {state};
