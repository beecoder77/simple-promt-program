const helper = require('./helper');
const prompt = require('prompt-sync')({sigint: true});

let loop = false;
 
while (!loop) {
  let name = prompt('Nama karyawan : ');
  let skill = prompt('Skill karyawan : ');
  helper.findProfile(name, skill);
  let tanya = prompt('Ulangi? (y/n) : ' );
  if (tanya.toLowerCase() === 'y' || tanya.toLowerCase() === 'yes') {
    console.clear();
  } else {
    console.log('Terima kasih!');
    loop = true;
  }
}