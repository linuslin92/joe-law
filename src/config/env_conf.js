let CONFIG = {
    USER_LANGUAGE: navigator.language.search(/en/i) > -1 ? 'en' : 'es',
    IMG_DIR: "./src/img",
    CONT_DIR: {
        EN: "../content/en",
        ES: "../content/es"
    },
    CONT_FILE: "content.json"
}

export default CONFIG;