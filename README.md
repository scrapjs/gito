gito
=======
## one fell swoop your changes
### gito runs a common set of git commands slightly faster
[![Build Status](https://travis-ci.org/reqshark/gito.png?branch=master)](https://travis-ci.org/reqshark/gito)

Installation
------------

Install with `npm`:

``` bash
$ npm install -g gito
```

Example
-------

Normally pushing up a quick change means doing:

``` bash
$ git add .
$ git commit -m 'your commit message'
$ git push
```

Three steps executed separately at the command line get used to accomplish one thing more often than not.

Gito is a new command line tool so we can just do:

``` bash
$ gito 'your commit message'
```

Changes get added to the index, with `commit -m` message. Changes are also pushed up to your remote in one step.

Be careful with compression commits and pushes, because it's all fast.

## ideas & notes about this software

Gito performs compression commits.

License
-------

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://www.wtfpl.net/>