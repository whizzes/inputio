import * as process from 'process';
import * as readline from 'readline';

/**
 *
 * Prints a message to `stdout` and awaits for bytes on `stdin`.
 *
 * @param {string} message
 * @returns Promise<string>
 */
export function input(message: string): Promise<string> {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, reject) => {
    try {
      readlineInterface.question(message, (value) => {
        readlineInterface.close();
        resolve(value);
      });
    } catch (error) {
      reject(error);
    }
  });
}
