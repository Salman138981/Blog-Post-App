import { Component } from "@angular/core";


@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent{
    enteredValue = '';
    newPost = 'old content';
    new2post ='';

    onAddPost(){
        this.newPost = this.enteredValue; 
    }

   
}