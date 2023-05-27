const years = document.querySelector('#years');
const months = document.querySelector('#months');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const calculateBtn = document.querySelector('#calculateBtn');
const resetBtn = document.querySelector('#resetBtn');

let bday = document.querySelector('#bday');

const calculateAge = () => {
  // console.log(typeof bday.value); //string
  let now = new Date();
  let birth = new Date(bday.value);
  // console.log(typeof birth); //object
  let ageMs = now.getTime() - birth.getTime();
  let ageSecs = Math.floor(ageMs / 1000);
  let ageMins = Math.floor(ageSecs / 60);
  let ageHours = Math.floor(ageMins / 60);
  let ageDays = Math.floor(ageHours / 24);
  let ageMonths = Math.floor(ageDays / 30.4375);
  let ageYears = Math.floor(ageMonths / 12);

  // console.log(`years:${ageYears}, months: ${ageMonths}, days: ${ageDays}, minutes: ${ageMins}`);
  years.innerHTML = ageYears;
  months.innerHTML = new Intl.NumberFormat('de-DE').format(ageMonths);
  days.innerHTML = new Intl.NumberFormat('de-DE').format(ageDays);
  hours.innerHTML = new Intl.NumberFormat('de-DE').format(ageHours);
  minutes.innerHTML = new Intl.NumberFormat('de-DE').format(ageMins);
};

calculateBtn.addEventListener('click', () => {
  isNaN(bday.value) ? calculateAge() : alert('Please, type a valid date');
});

const reset = () => {
  bday.value = '';
  years.innerHTML = '';
  months.innerHTML = '';
  days.innerHTML = '';
  hours.innerHTML = '';
  minutes.innerHTML = '';
};

resetBtn.addEventListener('click', reset);
