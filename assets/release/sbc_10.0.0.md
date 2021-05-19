#### About this release:

**Version:** 10.0.0  
**Release date:** 19/01/2021

<br>

#### 1. How to install it

```bash
npm install @sb/components@10.0.0
```

#### 2. Changes

##### Angular 10
This library has been updated to Angular 10

##### Accessibility
Some SBNG components were not compliant with the `Web Content Accessibility Guidelines` (WCAG 2.1).
- Page component has been updated: h1 is surrounding the title instead of div
- Menu component has been updated: Selected item has now an explicit title (`... active`), We adapted the collapsible items to the `disclosure model`

##### Refresh menu feature
We have added a new feature to refresh more easily the menu, for example if you have a dynamic value in your menu model. 
Please refer to the page of the menu component in the showcase to know more about it.

#### Bootstrap configuration
Before we were importing all bootstrap css classes instead of taking aonly the needed ones. So today you must have in your **styles.scss** this import that brings the full bootstrap:

```json
// Import bootstrap css
@import '~bootstrap/scss/bootstrap.scss';
```

So you can modify it with these 2 imports:
```json
// Import bootstrap css
@import '~bootstrap/scss/bootstrap-grid.scss';
@import '~bootstrap/scss/bootstrap-reboot.scss';
```

First import brings all classes to manage your layouts and second one brings compatibility accross browsers. More information here:  
https://getbootstrap.com/docs/4.1/getting-started/contents/#css-files


#### 3. Breaking changes

##### At least Angular 9
You must update your application to angular 9 or higher

##### Angular 10 / Material 10 / PrimeNg 10
As this library has been updated to Angular 10, it involves also the migration of angular material and PrimeNg dependencies.

It is not mandatory to migrate to Angular 10 right now, as we make the components provided in the showcase compatible with Angular 9 components and PrimeNG 9, but it's HIGHTLY RECOMMENDED to do it at the same time, as we can't test all components and even more the migration is not complicated.

So here are the main steps to migrate your application:

- Angular 10 / Material 10
Follow the guideline provided by Angular team, and select angular material too:  
https://update.angular.io/?l=3&v=9.0-10.0  
Be careful when updating **@angular/core** and **@angular/cli**, specify that you want the version 10 otherwise the latest one will be installed (11 today).

- PrimeNg 10
Now follow the release note of PrimeNg 10 here:  
https://github.com/primefaces/primeng/wiki/Migration-Guide#1000

With these version, PrimeNg provides a new theme based on Material. It helps to have similar design with Material, so mixing components from both libraries is easier. So to switch your theme, open your file 'styles.css' and replace the primeNg import with:
```json
@import '~primeng/resources/themes/md-light-indigo/theme.css';

// Dark theme
// @import '~primeng/resources/themes/md-dark-indigo/theme.css';
```

#### 4. The commit on the starter kit

[Commit](https://innersource.soprasteria.com/sopra-banking-technical-architecture/sb-angular/sbng-starter-kit/-/commit/ff0c410f62f90725a340804a6a6e2a7e7ad5588d)