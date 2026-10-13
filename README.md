# jupyterlab_gruvbox_material

Gruvbox Material (dark, medium) theme for JupyterLab 3.

A softer, lower-contrast take on gruvbox: warm beige text instead of bright cream,
muted accents and a calmer background, in the Gruvbox Material palette.

![Gruvbox Material theme in JupyterLab](docs/screenshot.png)

## Requirements

- JupyterLab 3.x (tested on 3.4.4)

## Install

```bash
pip install jupyterlab-gruvbox-material
```

Restart JupyterLab, then choose **Settings → Theme → Gruvbox Material**.

Each [release](https://github.com/mergelangelo/jupyterlab-gruvbox-material/releases) also has the wheel attached,
so you can install a specific version straight from GitHub:

```bash
pip install https://github.com/mergelangelo/jupyterlab-gruvbox-material/releases/download/v1.0.0/jupyterlab_gruvbox_material-1.0.0-py3-none-any.whl
```

## Uninstall

```bash
pip uninstall jupyterlab_gruvbox_material
```

## Customizing colors

All colors live in [`style/material.css`](style/material.css). Change the values there
and rebuild (see below).

## Building from source

Requires Node.js and Python 3.8–3.11.

```bash
pip install "jupyterlab==3.4.*" "jupyter_packaging~=0.7.9" build
jlpm install
python -m build --wheel --no-isolation
```

The wheel is written to `dist/`.

## License

BSD-3-Clause, see [LICENSE](LICENSE).
