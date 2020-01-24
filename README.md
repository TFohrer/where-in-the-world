# countries-overview

Showcase/challenge project using [REST Countries API](https://restcountries.eu) to show a simple country list. Project build with vue.js and uses Gitlabs CI/CD.
Challenge idea from [Frontend Mentor](https://www.frontendmentor.io/)

- Vue.js
- webpack
- bootstrap (grid only)
- mobile-first
- BEM


## Initial requirements

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

## Build Setup

Project boilerplate setup with vue-cli.

Local setup without Docker: 

```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

Local setup with Docker (TODO):

``` # build docker container
docker build .```
Run docker container:

```docker run -it -p 8080:80 --rm --name countries-overview .
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
