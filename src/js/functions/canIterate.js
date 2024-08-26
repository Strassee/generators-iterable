export default function canIterate(object) {
  try {
    return typeof object[Symbol.iterator] === 'function';
  } catch {
    return false;
  }
}
