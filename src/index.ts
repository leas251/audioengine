import { registerPlugin } from '@capacitor/core';

import type { AudioEnginePlugin } from './definitions';

const AudioEngine = registerPlugin<AudioEnginePlugin>('AudioEngine', {
  web: () => import('./web').then(m => new m.AudioEngineWeb()),
});

export * from './definitions';
export { AudioEngine };
