import '@testing-library/jest-dom'
import { getSaludo } from "../../base/02-template-string";

describe('Test 02 Template-string', ()=> {
    test('getSaludo should return Hello Fernando', () =>{
        const name = 'Fernando';
        const saludo = getSaludo(name )

        expect( saludo ).toBe('Hola ' + name)
        
    })

    test('getSaludo should return Hello Goku', () =>{        
        const saludo = getSaludo();

        expect( saludo ).toBe('Hola Goku')
    })
})