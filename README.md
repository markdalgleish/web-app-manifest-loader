# web app manifest loader for webpack

Load images referenced in the `icons` and `splash_screens` fields in your [Web App Manifest](http://www.w3.org/TR/appmanifest/).

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
