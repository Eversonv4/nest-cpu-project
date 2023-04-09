import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  supplyPower(watts: number) {
    return `Returning a supply of ${watts} Watts of Power`;
  }
}
