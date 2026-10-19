# woxi (Vibeclones mirror)

Hosted copies of older browser (WebAssembly) builds of [Woxi](https://github.com/ad-si/Woxi), a Wolfram Language interpreter in Rust by Adrian Sieber. The author's own site, [woxi.ad-si.com](https://woxi.ad-si.com/), serves only the newest version; this repo keeps older versions open-able so the timeline can be explored in a browser. The code is theirs.

- Latest: `/woxi/latest/`
- Specific version: `/woxi/v<version>/`
- Version list: `/woxi/versions.json`

Each version is built from the upstream release tag with its own `wasm-pack` release build, served the way the author's site serves it. The only change is that links to the project's docs, notebook and full playground point at woxi.ad-si.com. Upstream license: AGPL-3.0; the source for each build is the tag named in its `SOURCE.txt`. A scheduled workflow builds new releases.
