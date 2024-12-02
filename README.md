# Map Markers Task

This is a test task that includes a description as well as an interactive map.

### Main features

1. A list of tasks
2. An interactive map where you can:
    - Explore the map of Belgrade
    - Place points of interest
    - Get a list of saved interest points
    - Get information when clicking the interest point

### Main stack

App uses Vue 3 with Composition API and TypeScript. Styling is done via Vuetify 3, state management with cacheable queries in done via Vuex. Vue Router handles routing (well, obviously). Map uses the OpenLayers JavaScript library. Data is stored in the browser using localStorage.

### Folder structure

The app follows *Feature Sliced Design* principles and is divided into several parts:

- app: the top layer where `App.vue` and app-wide logic live
- widgets: complex layers and components
- features: smaller layers and components designed to implement a single business feature
- entities: domain layer lives here. every business entity is described here and has a separate API, separate types and components that represent the said entity
- shared 
    - lib: library and packages code that can be reused
    - api: reusable api for the backend
    - etc. icons, shared components

[Link to FSD Documentation](https://feature-sliced.design)

I tried documenting complex features with JsDoc, you can use and edit them as you wish.

### Starting a project

Install the dependencies with 
```
npm install
```

Since some of the dependencies might conflict with each other (especially the dev deps for Jest), if the installation fails, try:
```
npm install --legacy-peer-deps
```

To launch the project, use:
```
npm run dev
```

To run tests:

```
npm test
```

### About tests

Tests are located in the "src/tests" directiory. To test a component, use `@testing-library/vue` together with Jest and Jest-DOM