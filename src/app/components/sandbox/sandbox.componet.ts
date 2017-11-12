import { Component } from '@angular/core';

@Component({
    selector:'sandbox',
    template:`
    <!--
       <div><img src={{imageUrl}}></div>
       <div><img [src]="imageUrl"></div>
       <div><img bind-src="imageUrl"></div>
    -->
    
    <h2>Create Post</h2>
    <p [hidden]="isUnchanged">Post nr 1</p>
    <button [disabled]="isUnchanged">Save</button>
       `
})

export class SandboxComponent{
    imageUrl = 'http://lorempixel.com/400/200';
    isUnchanged:boolean = false;
}