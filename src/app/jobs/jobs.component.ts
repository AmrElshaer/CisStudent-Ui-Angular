import { Component, OnInit } from '@angular/core';
import { Jobs } from '../Jobs';
import { ApplyJob } from '../ApplyJob';
import { ActivatedRoute } from '@angular/router';
import { JobsServeces } from '../JobsServeces';
import { ApplyJobServices } from '../ApplyJobServces';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
declare var $:any;
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  Id:string;
CreateTraining:string;
AllTraing:Jobs[];
AllPublishTraining:Jobs[];
Email:string='';
Applaytodisplay:string="-1";
statusofapplay:string;
Allapplayfortraining:ApplyJob[];
IdofApplaytrainingforshow:string;
  constructor(private _ActivateRouter: ActivatedRoute,private Trainginservces:JobsServeces,private _ApplayTrainingservces:ApplyJobServices) { }

  ngOnInit() {
    $(document).ready(
      function(){
       
          $(".card-header button").on("click",function(){
            console.log("I am enter");
            $(this).next().slideToggle();
          });
          
     
  });
this._ActivateRouter.paramMap.subscribe(a=>{
 this.Id= a.get('Id');
  this.CreateTraining="http://localhost:57761/JobsViews/Create?Id="+this.Id;
 this.Trainginservces.AllTraining(this.Id).subscribe(a=>{
   this.AllTraing=a;
 });
this.Trainginservces.AllPublishTaing(this.Id).subscribe(a=>{
  this.AllPublishTraining=a;
  console.log(this.AllPublishTraining+"AllPublish");
});
});

  }
  controldisplay(idofapplaydisplay):void{
console.log(this.Applaytodisplay);
  this.Applaytodisplay=idofapplaydisplay;
    
  }
  errorhandling(errors:HttpErrorResponse){
if(errors.ok){
this.statusofapplay="<div class='alert alert-success'><h2>Success</h1></div>";
}
this.statusofapplay="<div class='alert alert-danger'><h2>Error</h1></div>";
return throwError(this.statusofapplay);
  }
  SendEmailtoApplay(idofTraining:string,idofsponser:string){
    console.log(idofsponser);
var applaytraining:ApplyJob={id:0,trainingid:idofTraining,studentApplay:this.Id,studentPublishtraining:idofsponser,email:this.Email};
this._ApplayTrainingservces.AddApplaying(applaytraining).subscribe(A=>{console.log(A)});
  }
  AllApplies(idoftraining){
    console.log(idoftraining);
    this.IdofApplaytrainingforshow=idoftraining;
this._ApplayTrainingservces.AllTraining(idoftraining).subscribe(a=>{

this.Allapplayfortraining=a;

});
  }

}
