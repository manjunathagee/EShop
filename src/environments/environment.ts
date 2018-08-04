// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyATguifXhMGqvsthEau5RXGYeD2lFRzN5w',
    authDomain: 'ecommerce-9e153.firebaseapp.com',
    databaseURL: 'https://ecommerce-9e153.firebaseio.com',
    projectId: 'ecommerce-9e153',
    storageBucket: 'ecommerce-9e153.appspot.com',
    messagingSenderId: '926528889588'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
