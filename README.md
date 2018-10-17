# Alien-Reporter - Test 


## Scope
The scope was to create SPA (single page application) that invoke the (http://www.mocky.io/v2/59f7760a2f0000ab1d55864e)  JSON endpoint and display the form Id, last changed date and last changed by at the top of the page, then display the list of all the elements in the form array with drag and drop capability.

To achieve that I developed this application in Angular 5.2, create the service / interceptor to parse the data from provided endpoint and used the Reactive Form approach to create the form array . To get drag and drop capability I installed  the npm ng2-dnd-list package (https://www.npmjs.com/package/@fjsc/ng2-dnd-list) and applied the  dndDraggable / dndList directives 


## Installation

$ npm install
### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


### License
[MIT](https://choosealicense.com/licenses/mit/)
