/* import React, {useState, useEffect, useRef} from "react"
import useWordGame from "./hooks/useWordGame"

function App() {
    const {
            textBoxRef, 
            handleChange, 
            text, 
            isTimeRunning, 
            timeRemaining, 
            startGame, 
            wordCount
        } = useWordGame()
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                ref={textBoxRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button 
                onClick={startGame}
                disabled={isTimeRunning}
            >
                Start
            </button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default App 
import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {incrementCount, decrementCount} from "./redux/count"

function App(props) {
    const count = useSelector(state => state)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(decrementCount())}>-</button>
            <button onClick={() => dispatch(incrementCount())}>+</button>
        </div>
    )
}

export default App*/
//export default connect(state => ({count: state}), {incrementCount, decrementCount})(App)

import React from "react";
import PropTypes from "prop-types" 

/* import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(concepts, range) {
  return { concepts, range };
}

const rows = [
  createData('Pila de llamadas', 1),
  createData('Tipos primitivos', 1),
  createData('Tipos de valor y tipos de referencia', 1),
  createData('== vs === vs typeof', 1),
  createData('Alcance de la función, Ámbito de bloque y alcance léxico', 1),
  createData('Expression vs Statement', 1),
  createData('IIFE, módulos y espacios de nombres', 2),
  createData('Message Queue y Event Loop', 1),
  createData('setTimeout, setInterval y requestAnimationFrame', 1),
  createData('Motores de JavaScript', 2),
  createData('Bitwise Operators, Type Arrays y Array Buffers', 1),
  createData('DOM y Layout Trees', 2),
  createData('Factories y Classes', 2),
  createData('this, call, apply y bind', 2),
  createData('new, Constructor, instanceof y Instances', 2),
  createData('Prototype Inheritance y Prototype Chain', 1),
  createData('Object.create y Object.assign', 1),
  createData('map, reduce, filter', 1),
  createData('Funciones puras, efectos secundarios y mutación de estado', 2),
  createData('Closures', 1),
  createData('High Order Functions', 1),
  createData('Recursion', 1),
  createData('Promesas', 2),
  createData('async/await', 2),
  createData('Estructuras de datos', 2),
  createData('Expensive Operation y Big O Notation', 1),
  createData('Algoritmos', 2),
  createData('Herencia, polimorfismo y reutilización de código', 2),
  createData('Patrones de diseño', 1),
  createData('Partial Applications, Currying, Compose y Pipe', 1),
  createData('Código limpio', 2)
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Conceptos</TableCell>
            <TableCell align="right">Rango</TableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.concepts}>
              <TableCell component="th" scope="row">
                {row.concepts}
              </TableCell>
              <TableCell align="right">{row.range}</TableCell>              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
} */


const FirstApp = ( {saludo, subtitulo  }) => {
  
  return(
    <>
      <h1>{ saludo }</h1>
      <p>{ subtitulo }</p>
    </>
    
  );
}

FirstApp.prototype = {
  saludo: PropTypes.string.isRequired
}

export default FirstApp