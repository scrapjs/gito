gito
=======
### run common git commands slightly faster
[![Build Status](https://travis-ci.org/reqshark/gito.png?branch=master)](https://travis-ci.org/reqshark/gito)

Installation
------------

Install with `npm`:

``` bash
$ npm install -g gito
```

Example
-------

Normally a quick push means doing: 

```
git add .
git commit -m 'your commit message'
git push
```

Three steps executed separately at the command line get used to accomplish one thing more often than not.

Gito is a new command line tool so we can just do:

```
gito 'your commit message'
```

Changes get added to the index, messaged as a commit, and pushed up with a single quick step.

Be careful with compression commits and pushes, because it's all going to happen fast now in one fell swoop.

## ideas & notes about this software

Gito performs compression commits.

Visible output on the console doesn't display correctly. Would buffering stdout fix this?


License
-------

(The MIT License)

Copyright (c) 2014 Bent Cardan &lt;bent@shakelaw.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
