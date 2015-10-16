# Aten Gulp

## Versioning

We'll be using [NVM](https://github.com/creationix/nvm) to standardize on which version of Node.js our tooling supports. This version number is stored in the `.nvmrc` file. To install the appropriate version, use the command `nvm install` from within this directory.

In order to ensure everyone is using the same version of Node modules, when installing something new or updating the existing install use the `--save-exact` flag. This will ensure the `package.json` file will use that specific version, and not the default behavior of staying within the stored major release.
