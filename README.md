# 🐶 dog-me

> This package returns some ASCII dogs. You know, for spicing up your command line. With dogs.

[![NPM](https://nodei.co/npm/dog-me.png)](https://nodei.co/npm/dog-me/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

---

### EXAMPLE

```javascript
var dogMe = require('dog-me')

dogMe() // => returns a random dog
  /^ ^\
 / 0 0 \
 V\ Y /V
  / - \
 |    \
 || (__V

dogMe('playful') // => returns a playful dog
 /\     /\
{  `---'  }
{  O   O  }
~~>  V  <~~
 \  \|/  /
  `-----'____
  /     \    \_
 {       }\  )_\_   _
 |  \_/  |/ /  \_\_/ )
  \__/  /(_/     \__/
    (__/
CLI
npm install -g dog-me

dog-me
print a random ASCII dog to your console

Options:
  -l, --list     get list of dog moods
  -m, --mood    show dog of specific mood (e.g. dog-me --mood grumpy)
  -h, --help     Show help                                                [boolean]

Examples:
  dog-me
  dog-me --mood playful
  dog-me -l
This package is for fun and adds a bit of canine joy to your terminal.

LICENSE
MIT

---
