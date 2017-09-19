SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "jspm-syncnorm-bug/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.25"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "jspm-syncnorm-bug": {
      "main": "jspm-syncnorm-bug.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    },
    "m": {
      "format": "cjs"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "body-parser": "npm:body-parser@1.16.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "debug": "npm:debug@2.6.8",
    "dgram": "npm:jspm-nodelibs-dgram@0.2.1",
    "dns": "npm:jspm-nodelibs-dns@0.2.1",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "express": "npm:express@4.15.4",
    "finalhandler": "npm:finalhandler@0.5.1",
    "follow-redirects": "npm:follow-redirects@1.0.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "get-uri": "npm:get-uri@1.1.0",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "http-proxy-agent": "npm:http-proxy-agent@1.0.0",
    "https": "npm:jspm-nodelibs-https@0.2.2",
    "https-proxy-agent": "npm:https-proxy-agent@1.0.0",
    "mailgun-js": "npm:mailgun-js@0.7.15",
    "mocha": "npm:mocha@3.2.0",
    "net": "npm:jspm-nodelibs-net@0.2.1",
    "os": "npm:jspm-nodelibs-os@0.2.2",
    "pac-proxy-agent": "npm:pac-proxy-agent@1.0.0",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "proxy-agent": "npm:proxy-agent@2.0.0",
    "querystring": "npm:jspm-nodelibs-querystring@0.2.2",
    "send": "npm:send@0.14.2",
    "source-map": "npm:source-map@0.5.7",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.1",
    "superagent": "npm:superagent@3.4.4",
    "tls": "npm:jspm-nodelibs-tls@0.2.1",
    "tty": "npm:jspm-nodelibs-tty@0.2.1",
    "url": "npm:jspm-nodelibs-url@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.3"
  },
  packages: {
    "npm:jspm-nodelibs-os@0.2.2": {
      "map": {
        "os-browserify": "npm:os-browserify@0.3.0"
      }
    },
    "npm:debug@2.6.8": {
      "map": {
        "ms": "npm:ms@2.0.0"
      }
    },
    "npm:express@4.15.4": {
      "map": {
        "accepts": "npm:accepts@1.3.4",
        "qs": "npm:qs@6.5.0",
        "array-flatten": "npm:array-flatten@1.1.1",
        "content-disposition": "npm:content-disposition@0.5.2",
        "cookie": "npm:cookie@0.3.1",
        "escape-html": "npm:escape-html@1.0.3",
        "debug": "npm:debug@2.6.8",
        "etag": "npm:etag@1.8.1",
        "fresh": "npm:fresh@0.5.0",
        "on-finished": "npm:on-finished@2.3.0",
        "proxy-addr": "npm:proxy-addr@1.1.5",
        "serve-static": "npm:serve-static@1.12.4",
        "content-type": "npm:content-type@1.0.4",
        "parseurl": "npm:parseurl@1.3.2",
        "merge-descriptors": "npm:merge-descriptors@1.0.1",
        "path-to-regexp": "npm:path-to-regexp@0.1.7",
        "setprototypeof": "npm:setprototypeof@1.0.3",
        "methods": "npm:methods@1.1.2",
        "type-is": "npm:type-is@1.6.15",
        "encodeurl": "npm:encodeurl@1.0.1",
        "finalhandler": "npm:finalhandler@1.0.5",
        "depd": "npm:depd@1.1.1",
        "utils-merge": "npm:utils-merge@1.0.0",
        "vary": "npm:vary@1.1.1",
        "cookie-signature": "npm:cookie-signature@1.0.6",
        "range-parser": "npm:range-parser@1.2.0",
        "send": "npm:send@0.15.4",
        "statuses": "npm:statuses@1.3.1"
      }
    },
    "npm:serve-static@1.12.4": {
      "map": {
        "escape-html": "npm:escape-html@1.0.3",
        "parseurl": "npm:parseurl@1.3.2",
        "encodeurl": "npm:encodeurl@1.0.1",
        "send": "npm:send@0.15.4"
      }
    },
    "npm:accepts@1.3.4": {
      "map": {
        "mime-types": "npm:mime-types@2.1.17",
        "negotiator": "npm:negotiator@0.6.1"
      }
    },
    "npm:type-is@1.6.15": {
      "map": {
        "mime-types": "npm:mime-types@2.1.17",
        "media-typer": "npm:media-typer@0.3.0"
      }
    },
    "npm:proxy-addr@1.1.5": {
      "map": {
        "ipaddr.js": "npm:ipaddr.js@1.4.0",
        "forwarded": "npm:forwarded@0.1.2"
      }
    },
    "npm:mime-types@2.1.17": {
      "map": {
        "mime-db": "npm:mime-db@1.30.0"
      }
    },
    "npm:finalhandler@1.0.5": {
      "map": {
        "debug": "npm:debug@2.6.8",
        "escape-html": "npm:escape-html@1.0.3",
        "on-finished": "npm:on-finished@2.3.0",
        "encodeurl": "npm:encodeurl@1.0.1",
        "parseurl": "npm:parseurl@1.3.2",
        "statuses": "npm:statuses@1.3.1",
        "unpipe": "npm:unpipe@1.0.0"
      }
    },
    "npm:on-finished@2.3.0": {
      "map": {
        "ee-first": "npm:ee-first@1.1.1"
      }
    },
    "npm:send@0.15.4": {
      "map": {
        "debug": "npm:debug@2.6.8",
        "encodeurl": "npm:encodeurl@1.0.1",
        "escape-html": "npm:escape-html@1.0.3",
        "etag": "npm:etag@1.8.1",
        "fresh": "npm:fresh@0.5.0",
        "ms": "npm:ms@2.0.0",
        "on-finished": "npm:on-finished@2.3.0",
        "depd": "npm:depd@1.1.1",
        "range-parser": "npm:range-parser@1.2.0",
        "statuses": "npm:statuses@1.3.1",
        "destroy": "npm:destroy@1.0.4",
        "mime": "npm:mime@1.3.4",
        "http-errors": "npm:http-errors@1.6.2"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.0.7"
      }
    },
    "npm:http-errors@1.6.2": {
      "map": {
        "setprototypeof": "npm:setprototypeof@1.0.3",
        "statuses": "npm:statuses@1.3.1",
        "depd": "npm:depd@1.1.1",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.1"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.7.2"
      }
    },
    "npm:buffer@5.0.7": {
      "map": {
        "base64-js": "npm:base64-js@1.2.1",
        "ieee754": "npm:ieee754@1.1.8"
      }
    },
    "npm:crypto-browserify@3.11.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "randombytes": "npm:randombytes@2.0.5",
        "create-hmac": "npm:create-hmac@1.1.6",
        "pbkdf2": "npm:pbkdf2@3.0.14",
        "create-hash": "npm:create-hash@1.1.3",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "public-encrypt": "npm:public-encrypt@4.0.0"
      }
    },
    "npm:stream-http@2.7.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "readable-stream": "npm:readable-stream@2.3.3",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:jspm-nodelibs-url@0.2.1": {
      "map": {
        "url": "npm:url@0.11.0"
      }
    },
    "npm:pbkdf2@3.0.14": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "bn.js": "npm:bn.js@4.11.8"
      }
    },
    "npm:create-hash@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.4",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:create-hmac@1.1.6": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "ripemd160": "npm:ripemd160@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.4",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "inherits": "npm:inherits@2.0.3",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "bn.js": "npm:bn.js@4.11.8",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:randombytes@2.0.5": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:readable-stream@2.3.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "core-util-is": "npm:core-util-is@1.0.2",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@1.0.3",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:ripemd160@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@2.0.2"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:cipher-base@1.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "bn.js": "npm:bn.js@4.11.8"
      }
    },
    "npm:parse-asn1@5.1.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "pbkdf2": "npm:pbkdf2@3.0.14",
        "browserify-aes": "npm:browserify-aes@1.0.8",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "asn1.js": "npm:asn1.js@4.9.1"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.8",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.3",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "randombytes": "npm:randombytes@2.0.5",
        "bn.js": "npm:bn.js@4.11.8"
      }
    },
    "npm:browserify-aes@1.0.8": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "create-hash": "npm:create-hash@1.1.3",
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:string_decoder@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:evp_bytestokey@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "md5.js": "npm:md5.js@1.3.4"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.3.3"
      }
    },
    "npm:hash-base@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.8",
        "brorand": "npm:brorand@1.1.0",
        "hash.js": "npm:hash.js@1.1.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.1": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:md5.js@1.3.4": {
      "map": {
        "hash-base": "npm:hash-base@3.0.4",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:hash-base@3.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "hash.js": "npm:hash.js@1.1.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:hash.js@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:proxy-agent@2.0.0": {
      "map": {
        "https-proxy-agent": "npm:https-proxy-agent@1.0.0",
        "extend": "npm:extend@3.0.1",
        "http-proxy-agent": "npm:http-proxy-agent@1.0.0",
        "socks-proxy-agent": "npm:socks-proxy-agent@2.1.1",
        "lru-cache": "npm:lru-cache@2.6.5",
        "agent-base": "npm:agent-base@2.1.1",
        "debug": "npm:debug@2.2.0",
        "pac-proxy-agent": "npm:pac-proxy-agent@1.0.0"
      }
    },
    "npm:socks-proxy-agent@2.1.1": {
      "map": {
        "agent-base": "npm:agent-base@2.1.1",
        "extend": "npm:extend@3.0.1",
        "socks": "npm:socks@1.1.10"
      }
    },
    "npm:http-proxy-agent@1.0.0": {
      "map": {
        "extend": "npm:extend@3.0.1",
        "agent-base": "npm:agent-base@2.1.1",
        "debug": "npm:debug@2.2.0"
      }
    },
    "npm:https-proxy-agent@1.0.0": {
      "map": {
        "agent-base": "npm:agent-base@2.1.1",
        "extend": "npm:extend@3.0.1",
        "debug": "npm:debug@2.2.0"
      }
    },
    "npm:agent-base@2.1.1": {
      "map": {
        "extend": "npm:extend@3.0.1",
        "semver": "npm:semver@5.0.3"
      }
    },
    "npm:socks@1.1.10": {
      "map": {
        "ip": "npm:ip@1.1.5",
        "smart-buffer": "npm:smart-buffer@1.1.15"
      }
    },
    "npm:ftp@0.3.10": {
      "map": {
        "readable-stream": "npm:readable-stream@1.1",
        "xregexp": "npm:xregexp@2.0.0"
      }
    },
    "npm:readable-stream@1.1": {
      "map": {
        "isarray": "npm:isarray@0.0.1",
        "core-util-is": "npm:core-util-is@1.0.2",
        "string_decoder": "npm:string_decoder@0.10.31",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.3": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:degenerator@1.0.4": {
      "map": {
        "escodegen": "npm:escodegen@1.9.0",
        "ast-types": "npm:ast-types@0.9.6",
        "esprima": "npm:esprima@3.1.3"
      }
    },
    "npm:escodegen@1.9.0": {
      "map": {
        "esprima": "npm:esprima@3.1.3",
        "esutils": "npm:esutils@2.0.2",
        "estraverse": "npm:estraverse@4.2.0",
        "optionator": "npm:optionator@0.8.2"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.3",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:optionator@0.8.2": {
      "map": {
        "type-check": "npm:type-check@0.3.2",
        "wordwrap": "npm:wordwrap@1.0.0",
        "deep-is": "npm:deep-is@0.1.3",
        "levn": "npm:levn@0.3.0",
        "fast-levenshtein": "npm:fast-levenshtein@2.0.6",
        "prelude-ls": "npm:prelude-ls@1.1.2"
      }
    },
    "npm:type-check@0.3.2": {
      "map": {
        "prelude-ls": "npm:prelude-ls@1.1.2"
      }
    },
    "npm:levn@0.3.0": {
      "map": {
        "prelude-ls": "npm:prelude-ls@1.1.2",
        "type-check": "npm:type-check@0.3.2"
      }
    },
    "npm:pac-proxy-agent@1.0.0": {
      "map": {
        "pac-resolver": "npm:pac-resolver@1.2.6",
        "get-uri": "npm:get-uri@1.1.0",
        "extend": "npm:extend@3.0.1",
        "agent-base": "npm:agent-base@2.1.1",
        "https-proxy-agent": "npm:https-proxy-agent@1.0.0",
        "socks-proxy-agent": "npm:socks-proxy-agent@2.1.1",
        "debug": "npm:debug@2.2.0",
        "http-proxy-agent": "npm:http-proxy-agent@1.0.0",
        "stream-to-buffer": "npm:stream-to-buffer@0.1.0"
      }
    },
    "npm:get-uri@1.1.0": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "extend": "npm:extend@3.0.1",
        "file-uri-to-path": "npm:file-uri-to-path@0.0.2",
        "data-uri-to-buffer": "npm:data-uri-to-buffer@0.0.4",
        "readable-stream": "npm:readable-stream@2.3.3",
        "ftp": "npm:ftp@0.3.10"
      }
    },
    "npm:pac-resolver@1.2.6": {
      "map": {
        "thunkify": "npm:thunkify@2.1.2",
        "co": "npm:co@3.0.6",
        "netmask": "npm:netmask@1.0.6",
        "degenerator": "npm:degenerator@1.0.4",
        "regenerator": "npm:regenerator@0.8.46"
      }
    },
    "npm:stream-to-buffer@0.1.0": {
      "map": {
        "stream-to": "npm:stream-to@0.2.2"
      }
    },
    "npm:regenerator@0.8.46": {
      "map": {
        "private": "npm:private@0.1.7",
        "defs": "npm:defs@1.1.1",
        "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
        "recast": "npm:recast@0.10.33",
        "regenerator-runtime": "npm:regenerator-runtime@0.9.6",
        "through": "npm:through@2.3.8",
        "commoner": "npm:commoner@0.10.8"
      }
    },
    "npm:defs@1.1.1": {
      "map": {
        "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
        "breakable": "npm:breakable@1.0.0",
        "stringset": "npm:stringset@0.2.1",
        "tryor": "npm:tryor@0.1.2",
        "alter": "npm:alter@0.2.0",
        "stringmap": "npm:stringmap@0.2.2",
        "simple-is": "npm:simple-is@0.2.0",
        "simple-fmt": "npm:simple-fmt@0.1.0",
        "ast-traverse": "npm:ast-traverse@0.1.1",
        "yargs": "npm:yargs@3.27.0"
      }
    },
    "npm:recast@0.10.33": {
      "map": {
        "ast-types": "npm:ast-types@0.8.12",
        "source-map": "npm:source-map@0.5.7",
        "private": "npm:private@0.1.7",
        "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb"
      }
    },
    "npm:commoner@0.10.8": {
      "map": {
        "recast": "npm:recast@0.11.23",
        "private": "npm:private@0.1.7",
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "mkdirp": "npm:mkdirp@0.5.1",
        "glob": "npm:glob@5.0.15",
        "q": "npm:q@1.4.1",
        "iconv-lite": "npm:iconv-lite@0.4.15",
        "detective": "npm:detective@4.5.0",
        "commander": "npm:commander@2.11.0"
      }
    },
    "npm:recast@0.11.23": {
      "map": {
        "ast-types": "npm:ast-types@0.9.6",
        "esprima": "npm:esprima@3.1.3",
        "private": "npm:private@0.1.7",
        "source-map": "npm:source-map@0.5.7"
      }
    },
    "npm:glob@5.0.15": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "once": "npm:once@1.4.0",
        "inflight": "npm:inflight@1.0.6",
        "minimatch": "npm:minimatch@3.0.4",
        "path-is-absolute": "npm:path-is-absolute@1.0.1"
      }
    },
    "npm:detective@4.5.0": {
      "map": {
        "defined": "npm:defined@1.0.0",
        "acorn": "npm:acorn@4.0.13"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:alter@0.2.0": {
      "map": {
        "stable": "npm:stable@0.1.6"
      }
    },
    "npm:inflight@1.0.6": {
      "map": {
        "once": "npm:once@1.4.0",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:minimatch@3.0.4": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.8"
      }
    },
    "npm:once@1.4.0": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:yargs@3.27.0": {
      "map": {
        "camelcase": "npm:camelcase@1.2.1",
        "os-locale": "npm:os-locale@1.4.0",
        "decamelize": "npm:decamelize@1.2.0",
        "y18n": "npm:y18n@3.2.1",
        "cliui": "npm:cliui@2.1.0",
        "window-size": "npm:window-size@0.1.4"
      }
    },
    "npm:brace-expansion@1.1.8": {
      "map": {
        "balanced-match": "npm:balanced-match@1.0.0",
        "concat-map": "npm:concat-map@0.0.1"
      }
    },
    "npm:cliui@2.1.0": {
      "map": {
        "wordwrap": "npm:wordwrap@0.0.2",
        "right-align": "npm:right-align@0.1.3",
        "center-align": "npm:center-align@0.1.3"
      }
    },
    "npm:os-locale@1.4.0": {
      "map": {
        "lcid": "npm:lcid@1.0.0"
      }
    },
    "npm:lcid@1.0.0": {
      "map": {
        "invert-kv": "npm:invert-kv@1.0.0"
      }
    },
    "npm:center-align@0.1.3": {
      "map": {
        "align-text": "npm:align-text@0.1.4",
        "lazy-cache": "npm:lazy-cache@1.0.4"
      }
    },
    "npm:right-align@0.1.3": {
      "map": {
        "align-text": "npm:align-text@0.1.4"
      }
    },
    "npm:align-text@0.1.4": {
      "map": {
        "kind-of": "npm:kind-of@3.2.2",
        "repeat-string": "npm:repeat-string@1.6.1",
        "longest": "npm:longest@1.0.1"
      }
    },
    "npm:kind-of@3.2.2": {
      "map": {
        "is-buffer": "npm:is-buffer@1.1.5"
      }
    },
    "npm:body-parser@1.16.1": {
      "map": {
        "http-errors": "npm:http-errors@1.5.1",
        "qs": "npm:qs@6.2.1",
        "depd": "npm:depd@1.1.1",
        "raw-body": "npm:raw-body@2.2.0",
        "bytes": "npm:bytes@2.4.0",
        "content-type": "npm:content-type@1.0.4",
        "on-finished": "npm:on-finished@2.3.0",
        "type-is": "npm:type-is@1.6.15",
        "debug": "npm:debug@2.6.1",
        "iconv-lite": "npm:iconv-lite@0.4.15"
      }
    },
    "npm:raw-body@2.2.0": {
      "map": {
        "bytes": "npm:bytes@2.4.0",
        "iconv-lite": "npm:iconv-lite@0.4.15",
        "unpipe": "npm:unpipe@1.0.0"
      }
    },
    "npm:http-errors@1.5.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "statuses": "npm:statuses@1.3.1",
        "setprototypeof": "npm:setprototypeof@1.0.2"
      }
    },
    "npm:debug@2.6.1": {
      "map": {
        "ms": "npm:ms@0.7.2"
      }
    },
    "npm:finalhandler@0.5.1": {
      "map": {
        "unpipe": "npm:unpipe@1.0.0",
        "debug": "npm:debug@2.2.0",
        "statuses": "npm:statuses@1.3.1",
        "escape-html": "npm:escape-html@1.0.3",
        "on-finished": "npm:on-finished@2.3.0"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:send@0.14.2": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "fresh": "npm:fresh@0.3.0",
        "depd": "npm:depd@1.1.1",
        "encodeurl": "npm:encodeurl@1.0.1",
        "etag": "npm:etag@1.7.0",
        "range-parser": "npm:range-parser@1.2.0",
        "http-errors": "npm:http-errors@1.5.1",
        "statuses": "npm:statuses@1.3.1",
        "escape-html": "npm:escape-html@1.0.3",
        "on-finished": "npm:on-finished@2.3.0",
        "ms": "npm:ms@0.7.2",
        "mime": "npm:mime@1.3.4",
        "destroy": "npm:destroy@1.0.4"
      }
    },
    "npm:mailgun-js@0.7.15": {
      "map": {
        "inflection": "npm:inflection@1.10.0",
        "is-stream": "npm:is-stream@1.1.0",
        "async": "npm:async@2.1.5",
        "form-data": "npm:form-data@2.1.4",
        "tsscmp": "npm:tsscmp@1.0.5",
        "proxy-agent": "npm:proxy-agent@2.0.0",
        "debug": "npm:debug@2.2.0",
        "q": "npm:q@1.4.1",
        "path-proxy": "npm:path-proxy@1.0.0"
      }
    },
    "npm:path-proxy@1.0.0": {
      "map": {
        "inflection": "npm:inflection@1.3.8"
      }
    },
    "npm:form-data@2.1.4": {
      "map": {
        "asynckit": "npm:asynckit@0.4.0",
        "mime-types": "npm:mime-types@2.1.17",
        "combined-stream": "npm:combined-stream@1.0.5"
      }
    },
    "npm:async@2.1.5": {
      "map": {
        "lodash": "npm:lodash@4.17.4"
      }
    },
    "npm:combined-stream@1.0.5": {
      "map": {
        "delayed-stream": "npm:delayed-stream@1.0.0"
      }
    },
    "npm:follow-redirects@1.0.0": {
      "map": {
        "debug": "npm:debug@2.6.8"
      }
    },
    "npm:superagent@3.4.4": {
      "map": {
        "cookiejar": "npm:cookiejar@2.1.1",
        "component-emitter": "npm:component-emitter@1.2.1",
        "formidable": "npm:formidable@1.1.1",
        "extend": "npm:extend@3.0.1",
        "readable-stream": "npm:readable-stream@2.3.3",
        "debug": "npm:debug@2.6.8",
        "qs": "npm:qs@6.5.0",
        "mime": "npm:mime@1.3.4",
        "methods": "npm:methods@1.1.2",
        "form-data": "npm:form-data@2.1.4"
      }
    },
    "npm:mocha@3.2.0": {
      "map": {
        "json3": "npm:json3@3.3.2",
        "debug": "npm:debug@2.6.8",
        "lodash.create": "npm:lodash.create@3.1.1",
        "css": "github:systemjs/plugin-css@0.1.36"
      }
    },
    "npm:lodash.create@3.1.1": {
      "map": {
        "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
        "lodash._baseassign": "npm:lodash._baseassign@3.2.0",
        "lodash._basecreate": "npm:lodash._basecreate@3.0.3"
      }
    },
    "npm:lodash._baseassign@3.2.0": {
      "map": {
        "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
        "lodash.keys": "npm:lodash.keys@3.1.2"
      }
    },
    "npm:lodash.keys@3.1.2": {
      "map": {
        "lodash._getnative": "npm:lodash._getnative@3.9.1",
        "lodash.isarguments": "npm:lodash.isarguments@3.1.0",
        "lodash.isarray": "npm:lodash.isarray@3.0.4"
      }
    }
  }
});
