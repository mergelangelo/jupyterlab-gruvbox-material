import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Registers the Gruvbox Material theme.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_gruvbox_material',
  description: 'Gruvbox Material (dark) theme.',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    const style = 'jupyterlab_gruvbox_material/index.css';

    manager.register({
      name: 'Gruvbox Material',
      displayName: 'Gruvbox Material',
      isLight: false,
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
