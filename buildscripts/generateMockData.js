/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

import {jsf} from 'json-schema-faker';
import {schema} from './mockDataSchema';
import {fs} from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf.resolve(schema));

fs.writeFile("./src/api/db.json", json, function (err) {
  if (err) {
    return console.log(chalk-red(err)); // eslint-disable-line no-console
  } else {
    console.log(chalk.green("Mock data generated.")); // eslint-disable-line no-console
  }
});
