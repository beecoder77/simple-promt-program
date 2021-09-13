const profile = require('./profile.json');
function findProfile (nama, skill){
    const goletPelamar = profile.find((x) => x.firstName.toLowerCase() === nama.toLowerCase() || x.lastName.toLowerCase() === nama.toLowerCase());
    if(!goletPelamar){
        return console.log('Pelamar tidak ditemukan');
    }
    const goletSkill = goletPelamar.skill.find((xxx) => xxx.toLowerCase() === skill.toLowerCase());
    if(goletSkill){
        return console.log(`${goletPelamar.firstName} ${goletPelamar.lastName} (${goletPelamar.number})`);
    }
    return console.log('Skill tidak memenuhi klasifikasi');
}

module.exports = {
    findProfile
};