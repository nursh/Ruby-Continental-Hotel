declare module 'randomatic' {
  interface Options {
    chars?: string,
    exclude?: string | string[]
  }

  function randomize(
    pattern: string,
    length?: number,
    options?: Options
  ): string;
  export = randomize;
}