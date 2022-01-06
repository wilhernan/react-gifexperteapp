import { getImagen } from "../../base/11-async-await"

describe('Tests witch async-await and fetch', () => {

    test('Should return the url of th image', async() => {
        const url = await getImagen() 

        expect( url.includes('https://') ).toBe( true );
    })

})