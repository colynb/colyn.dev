---
title: gulp-swig
name: gulp-swig
excerpt: Render swig templates with Gulp
---

[![Build Status](https://travis-ci.org/colynb/gulp-swig.png?branch=master)](https://travis-ci.org/colynb/gulp-swig)
[![Dependencies](https://david-dm.org/colynb/gulp-swig.png)](https://david-dm.org/colynb/gulp-swig)

[![NPM](https://nodei.co/npm/gulp-swig.png?stars&downloads)](https://npmjs.org/package/gulp-swig)

## Install with NPM

```bash
$ npm install --save-dev gulp-swig
```

## Usage

Compile to HTML

```javascript
var swig = require('gulp-swig')

gulp.task('templates', function() {
  gulp
    .src('./lib/*.html')
    .pipe(swig())
    .pipe(gulp.dest('./dist/'))
})
```

Avoid caching when watching/compiling html templates with BrowserSync, etc.

```javascript
.pipe(swig({defaults: { cache: false }}))
```

### ** NEW **

Inject data into your templates via the new [gulp-data](https://npmjs.org/package/gulp-data) plugin. It creates a `file.data` property with the data you need. This new method makes it much easier and less restrictive for getting data, than the methods below it. I'd recommend using this new method.

```javascript
/*
  Get data via JSON file, keyed on filename.
*/
var swig = require('gulp-swig')
var data = require('gulp-data')

var getJsonData = function(file) {
  return require('./examples/' + path.basename(file.path) + '.json')
}

gulp.task('json-test', function() {
  return gulp
    .src('./examples/test1.html')
    .pipe(data(getJsonData))
    .pipe(swig())
    .pipe(gulp.dest('build'))
})
```

### ** PRE version 0.7.0 (but still works) **

Inject variables from data object into templates

```javascript
var swig = require('gulp-swig')
var opts = {
  data: {
    headline: 'Welcome'
  }
}
gulp.task('templates', function() {
  gulp
    .src('./lib/*.html')
    .pipe(swig(opts))
    .pipe(gulp.dest('./dist/'))
})
```

Inject variables from JSON file into templates

If you've created a template called `homepage.html` you can create a JSON file called `homepage.json` to contain any variables you want injected into the template.

```javascript
var swig = require('gulp-swig')
var opts = {
  load_json: true
}
gulp.task('templates', function() {
  gulp
    .src('./lib/*.html')
    .pipe(swig(opts))
    .pipe(gulp.dest('./dist/'))
})
```

Inject variables from both a data object and JSON file into templates

```javascript
var swig = require('gulp-swig')
var opts = {
  load_json: true,
  data: {
    headline: 'Welcome'
  }
}
gulp.task('templates', function() {
  gulp
    .src('./lib/*.html')
    .pipe(swig(opts))
    .pipe(gulp.dest('./dist/'))
})
```

By default, gulp-swig will look for the json data file in the same location as the template. If you have your data in a different location, there's an option for that:

```javascript
var swig = require('gulp-swig')
var opts = {
  load_json: true,
  json_path: './data/',
  data: {
    headline: 'Welcome'
  }
}
gulp.task('templates', function() {
  gulp
    .src('./lib/*.html')
    .pipe(swig(opts))
    .pipe(gulp.dest('./dist/'))
})
```

Inject variables using the [Swig::setDefaults](http://paularmstrong.github.io/swig/docs/api/#setDefaults) method, and set other swig defaults.

```javascript
var swig = require('gulp-swig')
var opts = {
  defaults: { cache: false, locals: { site_name: 'My Blog' } },
  data: {
    headline: 'Welcome'
  }
}
gulp.task('templates', function() {
  gulp
    .src('./lib/*.html')
    .pipe(swig(opts))
    .pipe(gulp.dest('./dist/'))
})
```

Enable swig extensions using the setup option.

```javascript
var swig = require('gulp-swig')
var marked = require('swig-marked')
var opts = {
  setup: function(swig) {
    marked.useTag(swig, 'markdown')
  }
}
gulp.task('templates', function() {
  gulp
    .src('./lib/*.html') // containing markdown tag: {% markdown %}**hello**{% endmarkdown %}
    .pipe(swig(opts))
    .pipe(gulp.dest('./dist/'))
})
```
