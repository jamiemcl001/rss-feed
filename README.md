# A New RSS Reader...

A new RSS Reader that is both elegant and functional:

![RSS Reader](https://image.ibb.co/jLeHg7/Screen_Shot_2018_05_05_at_16_33_23.png)

# Table of Contents
* [Current Features](#current-features)
* [Roadmap](#roadmap)
    * [v1](#v1)
* [Development Notes](#development-notes)
    * [Build Tools](#build-tools)
* [Compatibility Testing](#compatibility-testing)

# Current Features

* Users can add or delete their favourite RSS feeds and have them displayed in a visually beautiful layout.
* Users can easily search through their feeds.
* Articles are stored in date order - with the most recent being visible at the top of the page - for convenience.
* Each card prodvides the user with the opportunity to go to the original articles link.
* Feeds are stored in local storage, along with the latest 10 articles from the feed - for convenience.
* Lazy load articles by scrolling to the bottom of the page - the next 10 articles from each feed will be automatically fetched and shown.

# Roadmap

## v1
* Implement a responsive and mobile-first design.
* Implement a service worker so that the user can lose connection and still access their latest fetched feeds.

# Development Notes

* This tool is written using [Vue.js](https://github.com/vuejs/vue).
* State is handled using [Vuex](https://github.com/vuejs/vuex).
* The dynamic card layout is achieved using [vue-masonry](https://github.com/shershen08/vue-masonry), which is in-turn built on top of the [Masonry](https://masonry.desandro.com/) project. This beautiful design technique will be familiar to any users of Pinterest.
* A number of other helper tools and addons were used in the development of this tool - and is not limited to:
    * [lodash.orderBy](https://www.npmjs.com/package/lodash.orderby) - for the visual ordering of articles.
    * [date-fns](https://date-fns.org/) - for the formatting of dates and times.
    * [md5](https://www.npmjs.com/package/md5) - for generating unique ids to be used within state.
    * [string-format](https://www.npmjs.com/package/string-format) - a convenience function, mimicking Python's `str.format()` function.
    * [striptags](https://www.npmjs.com/package/striptags) - a convenience function to strip out HTML tags, as some feeds return content wrapped in HTML tags.
    * [vue-images-loaded](https://www.npmjs.com/package/vue-images-loaded) - a helper Vue directive that will fire an even when images have been downloaded - to trigger a reformatting of `vue-masonry`.
    * [vue-truncate-filter](https://www.npmjs.com/package/vue-truncate-filter) - a helper Vue filter which will truncate content to a specific number of characters.
    
## Build Tools

The main build tools that are used within this project are listed below:
* [Webpack](https://webpack.js.org/) - to bundle the app for release to Github Pages.
* [Babel](https://babeljs.io/) - allows us to write ES6 and have it transpiled back down to ES5 for maximum support.
* [ESLint](https://eslint.org/) - to assist with cleaner code in development - this is a must. This project uses the [google](https://github.com/google/eslint-config-google) ruleset, with a few modifications that can be found in .eslintrc
* [PostCSS](http://postcss.org/) - used to automatically prefix CSS, to ensure maximum compatibility when switching between browsers.

# Compatibility Testing

This app has been tested in the following browsers:

```
+-----------------+---------+
|     Browser     | Tested? |
+-----------------+---------+
| Google Chrome   |    x    |
| Mozilla Firefox |    x    |
| Safari          |    x    |
+-----------------+---------+
```