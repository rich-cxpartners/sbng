#### About this release:

**Version:** 1.0.0  
**Release date:** 31/01/2020

<br>

#### 1. How to install it

```bash
npm install @sb/components@1.0.0
```

#### 2. Changes

##### Red theme
With this version of the component we have added the possibility to switch your application to a more reddish theme closer to the old jsf theme.
We have done that for application that need to be integrated in Workstation with other applications (with the jsf red theme)

![red-themes](./assets/images/red-theme.jpg)

To use this theme, this is quite simple. You will have to add the following reddish palette to you `_variables.scss` file:


```css
$md-sb-red-primary: (
    50 : #f9e1e5,
    100 : #efb3bf,
    200 : #e48195,
    300 : #d94e6a,
    400 : #d1284a,
    500 : #c9022a,
    600 : #c30225,
    700 : #bc011f,
    800 : #b50119,
    900 : #a9010f,
    A100 : #ffd3d4,
    A200 : #ffa0a3,
    A400 : #ff6d72,
    A700 : #ff535a,
    contrast: (
        50 : #000000,
        100 : #000000,
        200 : #000000,
        300 : #ffffff,
        400 : #ffffff,
        500 : #ffffff,
        600 : #ffffff,
        700 : #ffffff,
        800 : #ffffff,
        900 : #ffffff,
        A100 : #000000,
        A200 : #000000,
        A400 : #000000,
        A700 : #000000,
    )
);
```

Then you have to use it to generate the material theme.
Change your `_mat-theme.scss` accordingly:

```css
...

// Define palettes for sbng theme
$sb-theme-primary: mat-palette($md-sb-primary);
$sb-theme-red-primary: mat-palette($md-sb-red-primary);

...

// Define a variable for generated sbng theme
$sb-theme: mat-light-theme($sb-theme-red-primary, $sb-theme-red-primary);

```


#### 3. Breaking changes

NOTHING

#### 4. The commit on the starter kit

[LINK](https://innersource.soprasteria.com/sopra-banking-technical-architecture/sb-angular/sbng-starter-kit/commit/0ec6f533d806c7ae86ed6713204a7bd2cd680908)

