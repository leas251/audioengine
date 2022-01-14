export interface AudioEnginePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;

  preload(options: PreloadOptions): Promise<void>;
}

export interface PreloadOptions {
  assetPath: string,
  assetId: number,
  volume?: number,
  audioChannelNum?: number,
  isUrl?: boolean
}
