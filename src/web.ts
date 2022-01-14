import { WebPlugin } from '@capacitor/core';

import type { AudioEnginePlugin, PreloadOptions } from './definitions';

export class AudioEngineWeb extends WebPlugin implements AudioEnginePlugin {

  constructor() {
    super();
    
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async preload(options: PreloadOptions): Promise<void> {
    return this.fetchFile(options.assetPath)
    .then(audioBuffer => {
      track.audiobuffer = audioBuffer;
      console.log('Track loaded: ', track.path);
    });
  }

  private fetchFile(url: string): Promise<AudioBuffer> {
    return fetch(url)
      .then(response => response.arrayBuffer())
      .then(buffer => new Promise((resolve, reject) => {
        this.audioContext.decodeAudioData(
          buffer,
          resolve,
          reject
        );
      }));
  }
}
