declare module 'abi-decoder-angular' {
  /** Need to pass the ABI's manually to the library in order to be able to decode params later */
  function addABI(items: any): void;

  function getABIs(): any;

  function getMethodIDs(): any;

  function removeABI(abiArray: any): void;

  /** Decode Tx input data */
  function decodeMethod(data: string): any;

  /** Decode Logs from Tx Receipt */
  function decodeLogs(logs: any): any;
}
