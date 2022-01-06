import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Test in Heroes Functions', ()=> {
    test('Should return a Heroe by ID', ()=>{
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);

        expect( heroe ).toEqual( heroeData )
    })

    test('Should return a undefined if not exists', ()=>{
        const id = 10;
        const heroe = getHeroeById(id);       

        expect( heroe ).toBe( undefined ); 
    })

    test('Should return heroes of DC', ()=>{
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);   
        
        const heroeData = heroes.filter(h => h.owner === owner);

        expect( heroe ).toEqual( heroeData ); 
    })

    test('Should return lengt of heroes of Marvel', ()=>{
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);   
        
        expect( heroe.length ).toBe( 2 ); 
    })
})