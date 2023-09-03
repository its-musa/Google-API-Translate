class UI {
    constructor() {
        this.selectSourceLanguage = document.querySelector('#sourceLanguage');
        this.selectTargetLanguage = document.querySelector('#targetLanguage');

        this.outputSourceImage = document.querySelector('#outputSourceImage');
        this.outputSourceLanguage = document.querySelector('#outputSourceLanguage');

        this.outputTargetImage = document.querySelector('#outputTargetImage');
        this.outputTargetLanguage = document.querySelector('#outputTargetLanguage');
        this.outputText = document.querySelector('#outputText');
    }

    updateLanguage() {
        this.outputSourceLanguage.textContent = this.selectSourceLanguage.options[this.selectSourceLanguage.selectedIndex].textContent;
        this.outputSourceImage.src = `images/${this.selectSourceLanguage.value}.png`;

        this.outputTargetLanguage.textContent = this.selectTargetLanguage.options[this.selectTargetLanguage.selectedIndex].textContent;
        this.outputTargetImage.src = `images/${this.selectTargetLanguage.value}.png`;
    }

    writeTranslatedText(text) {
        this.outputText.innerHTML = text;
    }
}