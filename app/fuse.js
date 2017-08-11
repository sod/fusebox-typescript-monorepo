let path = require('path');
let express = require('express');
let {FuseBox} = require('fuse-box');

let fuse = FuseBox.init({
    homeDir: './',
    output: 'dist/$name.js',
});

fuse.bundle('app')
    .instructions(' > src/index.ts');

fuse.run();

fuse.dev({ root: false }, server => {
    const root = path.resolve('./');
    const app = server.httpServer.app;
    app.use("/dist/", express.static(path.join(root, 'dist')));
    app.get("*", function(req, res) {
        res.sendFile(path.join(root, "index.html"));
    });
});
