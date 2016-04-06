# Buildit Hello World

The purpose of this application is to show how a github project can be built with buildit. 
There is not much to it. Pretty much any node.js application could be built with buildit. The main
points of reference here are the package json.

## package.json

* add an engines object

```
    "engines" : {
        "node": "x.x.x",
        "npm": "x.x.x"
    }
```

* add any scripts needed for your application. Tests will run in buildit as well.

```
"scripts": {
    "start": "node server.js",
    "postinstall": "mocha tests;"
  }
```


