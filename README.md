# houseblend
Utilities for Jenius 2 Micro-services, Modules, and Clients.

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

isObject({}); // true
isObject({}); // false
isObject(null); // false, although typeof null is 'object'
isObject(undefined); // false

```

To run your application use `npm start`.