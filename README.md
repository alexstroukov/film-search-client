Hello! This project is a solution to the [movie listing challenge](https://zone.github.io/frontend/movie-listing).

It is bootstrapped with `create-react-app` and built with `react`, `redux`, `react-router`, `reselect`, `recompose`, and `material-ui` as its core libraries.

Async data loading is handled with a custom [middleware](https://github.com/alexstroukov/slex-redux-loader) i published

The code is split out into the following core sections:

- `components` - are React components which work by getting any input exclusively via props
- `containers` - are React components which work by getting input from store
- `pages` - are routes - these are also a type of container
- `store` - this is the immutable source of truth for app state
- `services` - an abstraction for loading data or performing isolated/async tasks
- `selectors` are used extensively to provide lazy access to mapped and memoized data from the store
- `recompose` is used extensively with selectors to provide functionality to pure containers without causing unwarranted re-renders
- `lodash` is used extensively to to manipulate data
- `UI` - Material UI is used for components, theming and overall layout of the app. To improve the UX on mobile I extracted the filters into a modal which can be toggled by a single fixed button. And on desktop I would expose filters by default. To achieve this I used material ui's [Hidden](https://material-ui.com/layout/hidden/) component and [theme breakpoints](https://material-ui.com/layout/breakpoints/).

## Geting started

```
$ npm i
$ npm start
```
## TODO
- `testing` - In a front end project I would typically the the most valuable/least volatile areas of code. This would include store reducers, middleware, and selectors. But would usually exclude component testing.

## Testing

```
$ npm run test
```
## Building a release

```
$ npm run build
```
