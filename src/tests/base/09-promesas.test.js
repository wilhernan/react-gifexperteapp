import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe('Tests with Pormises', () =>{

    test('getHeroeByIdAsync should return an async Heroe', ( done ) =>{
        const id = 1;

        getHeroeByIdAsync( id )
            .then( heroe =>{
                expect( heroe ).toBe( heroes[0] ); 
                done();
            })
    })

    test('should return an error if heroe not exists', (done) =>{
        const id = 10;

        getHeroeByIdAsync( id )
            .catch( error =>{
                expect( error ).toBe( 'No se pudo encontrar el héroe' ); 
                done();
            })
    })

})