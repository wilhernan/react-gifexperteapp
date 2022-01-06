/* import { render } from "@testing-library/react"; */
import FirstApp from "../App";
import React from 'react';
import { shallow } from "enzyme";

describe('Tests in <FirstApp/>', ()=> {
    /* test('Should show message I Goku', ()=>
        const saludo = 'Hola Soy Goku';
        const { getByText } = render( <FirstApp saludo={ saludo }/>)
        expect( getByText(saludo) ).toBeInTheDocument();
    }) */
    test('Should show <FirstApp/> The Best', ()=>{
        const saludo = 'Hola Soy Goku';
        const wrapper = shallow(<FirstApp saludo={ saludo }/> );

        expect( wrapper ).toMatchSnapshot();

    })

    test('Should show subtitulo send for props', ()=>{
        
        const saludo = 'Hola Soy Goku';
        const subtitulo = 'Soy Vegeta';
        const wrapper = shallow(
            <FirstApp 
                saludo={ saludo }
                subtitulo={ subtitulo }
            /> 
        );

        const textParrafo = wrapper.find('p').text();
        expect( textParrafo ).toBe( subtitulo );

    })
})