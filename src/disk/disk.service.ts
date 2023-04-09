import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getDate() {
    console.log('pegando 20 watts de potência de PowerService');
    this.powerService.supplyPower(20);
    return 'data';
  }
}
