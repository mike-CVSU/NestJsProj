import {Controller, Get, Param } from '@nestjs/common';

@Controller('primary')
export class PrimaryController {
    @Get(':num')
  identifyNum(@Param('num') num: number) {
    // Check if the number is less than or equal to 1
    if (num <= 1) {
      return { isPrime: false };
    }

    // Check for prime numbers
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return { isPrime: false };
      }
    }

    // If no divisors are found, the number is prime
    return { isPrime: true };
  }
}
