export interface AudioEnginePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
