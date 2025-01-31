import {Controller, Get, Param } from '@nestjs/common';

@Controller('primary')
export class PrimaryController {
  @Get(":number")
  getNumber(@Param('number')number:any){
   if(number<=1){

    return{primary:false}
   }
   else{
    for(let i=2;i<=Math.sqrt(number);i++){
      if(number%i ===0){
        return{primary:false}
      }
     
    }

   
   return{primary:true}
  }
}
}
