---
id: browser-support
title: Browser support
---

Sethealth SDK only supports modern browsers:

- Latest 2 versions of Chrome
- Latest 2 versions of Firefox
- Latest Firefox ESR release
- Latest 2 versions of Edge (Chrome)
- Latest 2 versions of Brave (Chrome)


Any older version might still work, but it's not officially supported in with the **Basic License** of Sethealth.

All version of Internet Explorer are not supported, and Sethealth SDK will not ever work.


## Best support

While Sethealth should work correctly in all the browsers mentioned above, user of `Chrome` and Chrome-based browsers, such as `Edge` and `Brave` will enjoy a better experience, including faster startup, faster processing of medical data and lower memory usage.

The reasons for Chrome being a prefered browser are:

- Support of WebGL2
- Support of Native Filesystem APIs
- Support of Stream APIs
- Support of Compression Stream API
- Faster Javascript engine (V8)


## Safari support

Safari does not support volumetric rendering of medical data, this is due the lack of proper `WebGL2` support.



## Why only modern browsers?

Sethealth relies on the latest Web APIs to keep data secure, render incredible 3D models in realtime, access the filesystem, take advantage of the CPU with Web Assembly and Web Workers, all while keeping your application fast and responsible. Unfortunately, this is not possible in old browsers, only modern browsers  
