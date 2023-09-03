class Translate {
    constructor(text, sourceLanguage, targetLanguage) {
        this.apikey = 'AIzaSyBDswf06npu678iig58CBx6kuqeWqOMmIQ';
        this.text = text;
        this.sourceLanguage = sourceLanguage;
        this.targetLanguage = targetLanguage;

        this.xhr = new XMLHttpRequest();
    }

    translateText(callback) {
        const endpoint = `https://translation.googleapis.com/language/translate/v2?key=${this.apikey}&source=${this.sourceLanguage}&target=${this.targetLanguage}&q=${this.text}`;

        this.xhr.open('GET', endpoint);

        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                const response = JSON.parse(this.xhr.responseText).data.translations[0].translatedText
                callback(null, response);
            } else {
                callback('An error occurred', null);
            }
        }

        this.xhr.send();
    }
}