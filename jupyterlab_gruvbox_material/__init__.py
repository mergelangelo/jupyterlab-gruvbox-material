try:
    from ._version import __version__
except ImportError:
    # Fallback when the package was not installed through the build backend
    import warnings

    warnings.warn("Importing 'jupyterlab_gruvbox_material' outside a proper installation.")
    __version__ = "dev"


def _jupyter_labextension_paths():
    return [{"src": "labextension", "dest": "jupyterlab_gruvbox_material"}]
