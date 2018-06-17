@echo off
if [%1]==[] babel src/app.js --out-file=public/scripts/app.js --presets=env,react
if not [%1]==[] babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
#if not [%1]==[] babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch