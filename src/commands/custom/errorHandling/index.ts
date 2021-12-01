export function checkCustomParameters(options: string): void {
  if (!options || options === '') {
    throw TypeError('options cannot be empty');
  }
}
