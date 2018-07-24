'use strict'

const colors = require('colors')
const read = require('readline-sync')
const menu = ['Alta de Alumno', 'Consulta', 'Editar Alumno']
const Alumno = require('./alumno')

console.log(`${colors.white.bold('================')}`)
console.log(`${colors.white.bold('MENU DE OPCIONES')}`)
console.log(`${colors.white.bold('================')}`)

let opcion = 1
let alumno = new Alumno()
while (menu[opcion] !== undefined) {
  opcion = read.keyInSelect(menu, `${colors.yellow.bold('Elige una opción del menu?')}`)
  switch (menu[opcion]) {
    case 'Alta de Alumno':
      alumno.getdatos()
      alumno.agregar()

      break
    case 'Consulta': alumno.consultar()
      break

    case 'Editar Alumno':
      alumno.estatus = 'Editar'
      alumno.getdatos()
      alumno.consultar()

      break
  }
}
read.question(`${colors.red.bold('Haz salido del sistema, presiona cualquier tecla para terminar !!!')}`)
