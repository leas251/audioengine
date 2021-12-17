import { WebPlugin } from '@capacitor/core';

import type { AudioEnginePlugin } from './definitions';

export class AudioEngineWeb extends WebPlugin implements AudioEnginePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
