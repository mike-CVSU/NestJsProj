import { Controller,Get, Param } from '@nestjs/common';

@Controller('factorial')
export class FactorialController {
    @Get(":num")
  identifyNum(@Param('num') num: any) {
    // Since the original code calculates the factorial of 5,
    // we'll calculate it for 5 instead of using 'num'.
    let total = 1;
    for (let i = 1; i <= 5; i++) {
      total *= i;  // Calculate factorial of 5
    }

    // Return the result as JSON (no need for HTML formatting)
    return { factorial: total };
  }
}
