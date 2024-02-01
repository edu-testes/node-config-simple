/**
 * Run in the command line
 * MY_OWESOME_FEATURE=true node ./evar/2-exampe.js
 */

'use strict'

if (process.env.MY_OWESOME_FEATURE === 'true') {
  console.log('feature');
}