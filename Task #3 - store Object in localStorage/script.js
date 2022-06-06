const devForm = document.querySelector('.dev');
const devSaveBtn = document.querySelector('.dev-save');
const devClearBtn = document.querySelector('.dev-clear');
const devName = devForm.querySelector('#dev-name');
const devCity = devForm.querySelector('#dev-city');
const devKnowEng = devForm.querySelector('#dev-lang-english');
const devKnowRom = devForm.querySelector('#dev-lang-romanian');
const devKnowFre = devForm.querySelector('#dev-lang-french');
const devMotivation = devForm.querySelector('#dev-motivation');

const form = {
  developer: {},
  init() {
    const fromStorage = JSON.parse(localStorage.getItem('devInfo'));
    if (fromStorage) {
      form.developer = fromStorage;
      devName.value = form.developer.name;
      devCity.value = form.developer.city;
      devMotivation.value = form.developer.motivation;
      devKnowRom.checked = form.developer.languages.romanian;
      devKnowEng.checked = form.developer.languages.english;
      devKnowFre.checked = form.developer.languages.french;
    }
  },
  save(e) {
    e.preventDefault();
    form.developer = {
      name: devName.value,
      city: devCity.value,
      motivation: devMotivation.value,
      languages: {
        english: devKnowEng.checked,
        romanian: devKnowRom.checked,
        french: devKnowFre.checked,
      },
    };
    localStorage.setItem('devInfo', JSON.stringify(form.developer));
  },
  clear(e) {
    e.preventDefault();
    localStorage.removeItem('devInfo');
    devName.value = '';
    devCity.value = '';
    devMotivation.value = '';
    devKnowRom.checked = false;
    devKnowEng.checked = false;
    devKnowFre.checked = false;
  },
};
document.addEventListener('DOMContentLoaded', form.init);
devSaveBtn.addEventListener('click', form.save);
devClearBtn.addEventListener('click', form.clear);
