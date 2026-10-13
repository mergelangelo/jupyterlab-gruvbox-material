import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab_gruvbox_material extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_gruvbox_material',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlab_gruvbox_material is activated!');
    const style = 'jupyterlab_gruvbox_material/index.css';

    manager.register({
      name: 'Gruvbox Material',
      isLight: false,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
