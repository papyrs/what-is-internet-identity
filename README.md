# What's Internet Identity?

A custom element that explains briefly what is [Internet Identity].

It can be integrated in any modern web applications with or without frameworks.

<img src="https://github.com/papyrs/what-is-internet-identity/raw/main/docs/screenshot.png" alt="A screenshot of the element used in Papyrs" role="presentation" />

## Table of contents
- [Installation](#installation)
- [Assets](#assets)
- [Usage](#usage)
- [Contribution](#contribution)
- [Credits](#credits)
- [License](#license)

## Installation

You can use the component via CDN or by installing it locally.

### CDN

Add the following code to your page to load the editor.

```html
<script type="module" src="https://unpkg.com/@papyrs/what-is-internet-identity@latest/dist/what-is-internet-identity/what-is-internet-identity.esm.js"></script>
```

That's it, it is imported and loaded.

### Local Installation

Install the custom element in your project from [npm](https://www.npmjs.com/package/@papyrs/what-is-internet-identity):

```bash
npm install @papyrs/what-is-internet-identity
```

Afterwards you will need to load - i.e. import - the component in your application. Use one of the following methods, the one that fits the best your needs or framework.

#### Loader

Lazy load the components with the help of a loader.

```js
import {defineCustomElements} from '@papyrs/what-is-internet-identity/dist/loader';
defineCustomElements();
```

#### Import

Import the library.

```js
import '@papyrs/what-is-internet-identity';
```

#### Custom Elements

It is also possible to dynamically import the custom element.

```js
const {defineCustomElement} = await import('@papyrs/what-is-internet-identity/dist/components/what-is-ii');
defineCustomElement();
```

## Assets

The component uses an image to render a screenshot of [Internet Identity] in the UI. It should be integrated in your application's assets.

You can either copy it manually or automate the process. The image finds place in your `node_modules/@papyrs/what-is-internet-identity/dist/what-is-internet-identity/images/internet-identity.webp`.

Another option is also to download the file from [GitHub](https://github.com/papyrs/what-is-internet-identity/raw/main/src/components/anchor/images/internet-identity.webp).

e.g. in [Papyrs](https://github.com/papyrs/papyrs) - a SvelteKit application - I copied the file into my application `static` folder that is automatically copied to my output folder at build time.

## Usage

To integrate the component into your application, use the following tag:

```
<what-is-ii></what-is-ii>
```

Assuming the component would ever be translated, you can set another `language` through the dedicated property:

```
<what-is-ii language="en"></what-is-ii>
```

Finally, to specify the relative path to the folder in which you have copied the image, you can use the `assetsDir` property.

```
<what-is-ii assets-dir="assets"></what-is-ii>
```

The default value is `images`. e.g. in [Papyrs](https://papy.rs) the file is hosted at the address `https://app.papy.rs/images/internet-identity.webp`.

## Contribution

Obviously open for contribution! Go for PR 🚀.

In addition to code, translations are also welcomed:

- in [i18n](https://github.com/papyrs/what-is-internet-identity/tree/main/src/i18n) copy `en.ts` to the new language you are looking to add
- translate all the keys of the file
- provide a PR

Afterwards it will need a small piece of code to load the new translations, I'll take care of this before releasing a new version of the library.

## Credits

I noticed the original idea and design on [Distrikt](https://distrikt.app) - a decentralized social media network that empowers users.

## License

MIT © [David Dal Busco](mailto:david.dalbusco@outlook.com) and [Nicolas Mattia](mailto:nicolas@nmattia.com)

[Internet Identity]: https://identity.ic0.app/