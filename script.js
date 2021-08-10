let obj = {
    id1: 'email-text',
    id2: 'pass-input',
};

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const el = obj[key];
        document.querySelector('#send').addEventListener('click', () => {
            document.querySelector('#reg-1').innerHTML = document.querySelector(`#${el}`).value; 
        })
    }
}