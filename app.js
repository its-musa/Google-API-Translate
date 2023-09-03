const translatorForm = document.querySelector('#translate-form');
const selectSourceLanguage = document.querySelector('#sourceLanguage');
const selectTargetLanguage = document.querySelector('#targetLanguage');
const ui = new UI();

eventListeners();

function eventListeners() {
    translatorForm.addEventListener('submit', translateText);
    selectSourceLanguage.addEventListener('change', changeLanguage);
    selectTargetLanguage.addEventListener('change', changeLanguage);
}

function translateText(e) {
    const text = document.querySelector('#text').value;
    const sourceLanguage = selectSourceLanguage.value;
    const targetLanguage = selectTargetLanguage.value;
    
    const translate = new Translate(text, sourceLanguage, targetLanguage);
    
    translate.translateText((error, response) => {
        if (error === null) {
            ui.writeTranslatedText(response);
        } else {
            console.error(error);
        }
    });

    e.preventDefault();
}

function changeLanguage() {
    ui.updateLanguage();   
}