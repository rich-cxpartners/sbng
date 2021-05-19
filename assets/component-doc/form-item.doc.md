`import { SbFormItemModule } from '@sb/components'` in your modules

The formItem is a container with a label. There is absolutely no link with angular form or anything like that.  
You could ask: "why do you have created this kind of component as we can already add a label on material inputs?  
We created it because we find that it is more adapted to the application that we are creating in Sopra Banking Software.  
This is not an obligation to use it (you can use directly the labels of the material input) but it's better do do so.  

The formItem has only 2 attributes for now: 
- `label` to indicate the label you wan next to your input
- `required` that you can set to true if you want to have the little start next to the label indicating that the input is required. It's only a visual thing, it will not affect the way you application is working.

You can put absolutely anything you want inside the formItem. The label will be displayed on the left and the content on the right. Its width will not exceed 600px. If you want it larger you can put a custom class on your formItem and add some css on your side.

This component is responsive and will display the label over the content if the screen is too small.

Do not forget to link your field with the formItem with `aria-labelledby` for accessibility purposes.
```html
<sb-form-item label="First Name" id="firstNameLabelId">
    <mat-form-field>
        <input matInput aria-labelledby="firstNameLabelId">
    </mat-form-field>
</sb-form-item>
```