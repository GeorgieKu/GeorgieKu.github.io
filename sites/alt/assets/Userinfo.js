class UserInfo {
    constructor() {
        this.timeOpened = new Date();
        this.timezone = (new Date()).getTimezoneOffset()/60;
    }

    async ip() {
        let res = await (await fetch('https://api.db-ip.com/v2/free/self'));
        let data = await res.json();
        let city = data.city;
        let countryName = data.countryName;
        let stateProv = data.stateProv;
        let address = `${city}, ${stateProv}, ${countryName}`
        return address;
    }

}

let info = new UserInfo();

async function t1() {

   let address = await (info.ip());
   const inputLocation = document.querySelector('input[name="location"]');
    inputLocation.addEventListener('click', ()=> {
        inputLocation.value = address;
        // if (inputLocation.value == address) {
        //     inputLocation.parentNode.parentNode.style.backgroundColor = '#00FF38';
        // }
   })
}

t1();
// function onInput() {
    
//     console.log('hi');
//     const inputLocation = document.querySelector('input[name="location"]');
    
//     if(islocationValid(inputLocation.value)) {
//         inputLocation.parentNode.parentNode.style.backgroundColor = '#00FF38';
//     } else {
//         inputLocation.parentNode.parentNode.style.backgroundColor = 'red';
//     }
//     inputLocation.addEventListener('input', onInput);
//     function islocationValid(value) {
//         console.log(value.length);
//         return (value.length > 5)
//     }
// }