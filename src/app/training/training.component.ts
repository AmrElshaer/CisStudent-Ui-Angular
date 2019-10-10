import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainingServices } from '../TrainingServices';
import { Training } from '../Training';
import { ApplyTraining } from '../ApplyTraining';
import { FormsModule } from "@angular/forms"; 
import { ApplyTrainingServices } from '../ApplyTrainingServces';
import { retry, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
declare var $:any;
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
Id:string;
CreateTraining:string;
AllTraing:Training[];
AllPublishTraining:Training[];
Email:string='';
Applaytodisplay:string="-1";
statusofapplay:string;
Allapplayfortraining:ApplyTraining[];
IdofApplaytrainingforshow:string;
  constructor(private _ActivateRouter: ActivatedRoute,private Trainginservces:TrainingServices,private _ApplayTrainingservces:ApplyTrainingServices) { }

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
  this.CreateTraining="http://localhost:57761/Tainings/Create?Id="+this.Id;
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
var applaytraining:ApplyTraining={id:0,trainingid:idofTraining,studentApplay:this.Id,studentPublishtraining:idofsponser,email:this.Email};
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
