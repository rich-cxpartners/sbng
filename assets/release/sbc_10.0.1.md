#### About this release:

**Version:** 10.0.1  
**Release date:** Not yet released

<br>

#### 1. How to install it

```bash
npm install @sb/components@10.0.1
```

#### 2. Changes

##### Fix extended menu item
There was a problem were if you put an item as expanded in the menu and activate synchronization to the rooting, the item was not expanded.
Now, if itt is the first time you display the menu, the item will be expended.

#### 3. Breaking changes

##### Logo update
We have change the css settings to make it optimized for the new branding logo of Sopra Banking Software
You can change it by replacing your 2 files in asset by the following one:

[company-logo.svg](https://innersource.soprasteria.com/sopra-banking-technical-architecture/sb-angular/sopra-banking-angular/-/blob/master/sbng/src/assets/icons/company-logo.svg),
[company-logo-mini.svg](https://innersource.soprasteria.com/sopra-banking-technical-architecture/sb-angular/sopra-banking-angular/-/blob/master/sbng/src/assets/icons/company-logo-mini.svg)
