# Google Maps Demo Angular

## How to run the App
1) run `yarn run install`
2) create environment files:
   a) src/app/environment.dev.ts and set your Google Map API key as a value of property 'googleMapsApiKey'
   (use src/app/environment.dev.template.ts as an example)
   b) src/app/environment.prod.ts and set your Google Map API key as a value of property 'googleMapsApiKey'
   (use src/app/environment.prod.template.ts as an example)
3) **WARNING:** Don't commit the env-files
5) run `yarn run serve`