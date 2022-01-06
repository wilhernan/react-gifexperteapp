import { getUser, getUsuarioActivo } from "../../base/05-funciones";


describe('Test 05-funciones', ()=> {
    test('should return a object', () =>{
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();

        expect(user).toEqual(userTest);
        
    })

    test('should return a object with parameter', () =>{   
        const name = 'Will';
        const userActivoTest = {
            uid: 'ABC567',
            username: name
        }

        const userActivo = getUsuarioActivo( name )
        
        expect(userActivo).toEqual(userActivoTest);
    })
})