The framework is providing somme css classes to make your life easier when you develop your application.

##### align-right

Put this class on a container to make it's content align to right.  
For example it's perfect for action button.

```html
<div class="align-right">
    <button mat-raised-button color="primary">
        ADD CLIENT
    </button>
</div>
```

<div class="img-doc">

![align right example](assets/images/align-right.JPG)

</div>

##### align-center

Put this class on a container to make it's content align to center.  

```html
<div class="align-center">
    <button mat-raised-button color="primary">
        <mat-icon color="primary">add</mat-icon>
        NEW CLIENT
    </button>
</div>
```
<div class="img-doc">

![align center example](assets/images/align-center.JPG)

</div>

##### absolute-top-right

Put this on an element to make it appear on the top right corner of it's most close relative parent.  
For example it's perfect for a close icon on a card component.

```html
<mat-card>
    <mat-card-header>
        <mat-card-title>Client creation</mat-card-title>
        <button mat-icon-button color="primary"
            aria-label="close client creation" class="absolute-top-right" (click)="closeCreationPanel()">
            <mat-icon>close</mat-icon>
        </button>
    </mat-card-header>
    <mat-card-content>
        ...
    </mat-card-content>
</mat-card>
```
<div class="img-doc">

![absolute top right example](assets/images/absolute-top-right.JPG)

</div>
