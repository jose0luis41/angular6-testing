// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:{
     apiKey: "AIzaSyC1Naf5abvQ5_svztMmVom--1NLoOoNWQ4",
    authDomain: "angular-testing-crud.firebaseapp.com",
    databaseURL: "https://angular-testing-crud.firebaseio.com",
    projectId: "angular-testing-crud",
    storageBucket: "angular-testing-crud.appspot.com",
    messagingSenderId: "527323456747"
  }

};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
