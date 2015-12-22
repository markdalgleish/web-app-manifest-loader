[![Build Status](https://img.shields.io/travis/markdalgleish/web-app-manifest-loader/master.svg?style=flat-square)](http://travis-ci.org/markdalgleish/web-app-manifest-loader) [![Coverage Status](https://img.shields.io/coveralls/markdalgleish/web-app-manifest-loader/master.svg?style=flat-square)](https://coveralls.io/r/markdalgleish/web-app-manifest-loader) [![npm](https://img.shields.io/npm/v/web-app-manifest-loader.svg?style=flat-square)](https://www.npmjs.com/package/web-app-manifest-loader)

# web-app-manifest-loader

Load images referenced in the `icons` and `splash_screens` fields in your [Web App Manifest](http://www.w3.org/TR/appmanifest/) using [webpack](https://github.com/webpack/webpack).

```bash
$ npm install --save-dev web-app-manifest-loader
```

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

In your webpack config:

```js
module: {
  loaders: [
    {
      test: /manifest.json$/,
      loader: 'file-loader?name=manifest.json!web-app-manifest-loader'
    }
  ]
}
```

Note that this example also uses [file-loader](https://github.com/webpack/file-loader).

Then, require the manifest in your application code:

```js
require('./manifest.json');
```

This allows you to provide image paths in the standard webpack format inside your manifest:

```js
{
  "name": "Hello World",
  ...
  "splash_screens": [
    {
      "src": "./images/splash-hi.png",
      "sizes": "2560x1440",
      "type": "image/png"
    },
    ...
  ],
  "icons": [
    {
      "src": "./images/icon-hi.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    ...
  ]
}
```

## License

[MIT License](http://markdalgleish.mit-license.org/)
