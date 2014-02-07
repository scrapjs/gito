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

I repeat these three steps frequently enough.

Now with gito's global installed as a command line tool, you can just do:

```
gito 'your commit message'
```

Be careful with those commits and pushes, because it's all going to happen fast now in one fell swoop.

## ideas & notes about this software

right now the output on the console doesn't display correctly. might add some buffers to fix this


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