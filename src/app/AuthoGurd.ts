import { CanActivate, Router, ActivatedRoute } from "@angular/router";
 
 export class AuthoGurd implements CanActivate{
 
     constructor(private _router:Router,private _Activateroute:ActivatedRoute) {
       _Activateroute.paramMap.subscribe(a=>{

       })

     }
    canActivate(): boolean {
      if(localStorage.getItem("Authorize")=="true"){
return true;
      }
      window.alert("You don't have permission to view this page");
   
sessionStorage.setItem("ReturnUrl",location.pathname);
    
      location.href="/Create";
      
     // return false;
    }

}