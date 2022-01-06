import CounterApp from "../CounterApp";
import React from 'react';
import { shallow } from "enzyme";

describe('Tests in <CounterApp/>', ()=> {
    /* test('Should show message I Goku', ()=>
        const saludo = 'Hola Soy Goku';
        const { getByText } = render( <FirstApp saludo={ saludo }/>)
        expect( getByText(saludo) ).toBeInTheDocument();
    }) */
    let wrapper = shallow(<CounterApp/>);
    beforeEach( () => {
        wrapper = shallow(<CounterApp/> );
    })
    
    test('Should show <CounterApp/> The Best', ()=>{   

        expect( wrapper ).toMatchSnapshot();

    })

    test('Should show value for default', ()=>{  
        
        const wrapper = shallow(
            <CounterApp 
                value={ 100 }                
            /> 
        );

        const textParrafo = wrapper.find('h2').text().trim() ;
        
        expect( textParrafo ).toBe( '100');

    })

    test('Should increment counter +1', ()=>{  
        wrapper.find('button').at(0).simulate('click');
        
        const textParrafo = wrapper.find('h2').text().trim() ;
        
        expect( textParrafo ).toBe( '8');

    })

    test('Should decrement counter -1', ()=>{  
        wrapper.find('button').at(2).simulate('click');
        
        const textParrafo = wrapper.find('h2').text().trim() ;
        
        expect( textParrafo ).toBe( '6');

    })

    test('Should reset the button', ()=>{  
         const wrapper = shallow(
            <CounterApp 
                value={ 105 }                
            /> 
        );

        wrapper.find('button').at(0).simulate('click');   
        wrapper.find('button').at(0).simulate('click'); 
        wrapper.find('button').at(1).simulate('click'); 

        const textParrafo = wrapper.find('h2').text().trim() ;
        
        expect( textParrafo ).toBe( '105');

    })
})