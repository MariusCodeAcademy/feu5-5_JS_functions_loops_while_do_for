// this will be helper fucntions

function printToHtml(value, destination = 'app', tag = 'p') {
  try {
    let out = document.getElementById(destination);
    out.insertAdjacentHTML('beforeend', `<${tag}>${value}</${tag}>`);
  } catch (error) {
    console.warn('Ar tikrai yra pas tave elementas su id', destination);
    console.warn('jei nera htmle sukurk div su id app');
  }
}

function getMeRandNumberFrom1To(maxRandValue = 10) {
  let rand11 = Math.floor(Math.random() * maxRandValue) + 1;
  return rand11;
}
