# houseblend
houseblend is a collection of useful conditionals and utils to help you jump start your projects.

## Table of Contents

- [Install](#install)
- [Migration](#migration)
- [Usage](#usage)
- [Structure](#structure)
- [Developer Guide](#developer-guide)

## Install

```bash
npm install @caffeinjunkie/houseblend
```

## Usage

### Conditionals

A collection of simple Conditionals, all of which merely return `true` / `false`.

```javascript
const { isNull } = require('@caffeinjunkie/houseblend');

isObject({ value: 'something'}); // false
isObject({}); // false
isObject(null); // true
isObject(undefined); // false

```

To run your application use `npm start`.