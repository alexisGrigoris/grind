/*
OBJECT
LITERAL (challenge)
*/

function addressMaker(address) {
    const {city, state, country} = address
    const newAddress = {
        city,
        state,
        country
    };
    console.log(`${newAddress.city}, ${newAddress.state},${newAddress.country}`)
}

addressMaker({city: 'Kukes', state: 'Kukes County', country: ' Albania' });