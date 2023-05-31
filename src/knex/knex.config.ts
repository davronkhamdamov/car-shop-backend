import knex from 'knex';
import { Injectable } from '@nestjs/common';
import { dbConfig } from '../config/config';

@Injectable()
export class KnexConfig {
  instance: any;
  constructor() {
    this.instance = knex(dbConfig);
  }
}
