import { Controller,Get, Param } from '@nestjs/common';

@Controller('factorial')
export class FactorialController{
    @Get(':number')
    FactorialNum(@Param('number') number:any){
  
   
    if (isNaN(number) || number < 0) {
      return { error: 'Please provide a valid positive integer' };
    }

   
    let total = 1;
    for (let i = 1; i <= number; i++) {
      total *= i;  
    }

    
    return { factorial: total };
  }
}
