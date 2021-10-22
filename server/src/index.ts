import  "ts-path-mapping";
import { BleedBeliever } from '@bleed-believer/core';
import { AppRouting } from './app.routing';

const core = new BleedBeliever(AppRouting);
core.bleed();
