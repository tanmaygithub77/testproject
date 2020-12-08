

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
    selector:"ptab",
    templateUrl:'./ptab.component.html',
    styleUrls:['./ptab.component.css']

})
export class PtabComponent{
name:string="Tanmay";
sal=45000
parr=[
    {id:12,name:"Tanmay",desg:"ceo"},
    {id:13,name:"Suraj",desg:"manager"},
    {id:14,name:"Abhi",desg:"senior adviser"},
    {id:15,name:"Rahul",desg:"programer "}

];
flag1=false;
p={id:12,name:"Tanmay",desg:"ceo"}
flag=false; 
changeflag(){
this.flag=!this.flag;

}
}