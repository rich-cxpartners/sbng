#### About this release:

**Version:** 1.1.0  
**Release date:** 01/04/2020

<br>

#### 1. How to install it

#### 2. Changes

##### New menu attribute

You can now put **[activeRouteSynchro]="true"** on your menu component.  
This will automatically synchronize your active item on the menu with the current route.  
For example, if on a page you've got a button that redirect to a page that is declared in the menu (via routerLink attribute), it will automatically expand the concerned item.

##### Floating banner width

The floating banner (the container that have been set to position fixed) had not the good width. Indeed, the width was set to 100%, but as the component is fixed, it was too large (100% of the window width).  
Now, the width is calculating depending on the state of the menu (open or not).

##### Banner features
New subcomponents for banner have been created.
- Banner workarea: give it a Map<string, string> and it will be displayed on the center of the banner
- Banner widget: to add some icons on the banner
- Banner info: to display information about the current user.

All of those features are ready for responsive design.  
To learn more about it, go on our showcase and look for banner component

<div style="max-width: 800px;">

![banner features](./assets/images/banner-features.gif)

</div>

#### 3. Breaking changes

None

#### 4. The commit on the starter kit

[LINK](https://innersource.soprasteria.com/sopra-banking-technical-architecture/sb-angular/sbng-starter-kit/commit/30022baedf262850e0997973e75e6b5f520f21f7)
