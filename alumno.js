'use strict'
const colors = require('colors')
const read = require('readline-sync')
const moment = require('moment')

class alumno {
  constructor () {
    this.matricula = 0
    this.curp = ''
    this.nombre = ''
    this.apellidoPaterno = ''
    this.apellidoMaterno = ''
    this.genero = ''
    this.fechaNacimiento = ''
  }
  getEdad () {
    let nacimiento = moment(this.fechaNacimiento, 'DD/MM/YYYY').format('YYYY-MM-DD')
    let hoy = moment()
    let anios = hoy.diff(nacimiento, 'years')

    return `${anios.toString()} AÑOS`
  }

  getnombrecompleto () {
    return `${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`
  }

  getdatos () {
    let objAlumno = {}
    console.log(`${colors.gray.bold('matricula:')} ${this.estatus === 'Editar' ? colors.white.bold(this.matricula) : ''}`)
    objAlumno.matricula = read.question()
    this.matricula = objAlumno.matricula !== '' ? objAlumno.matricula : this.matricula

    console.log(`${colors.gray.bold('CURP: ')} ${this.estatus === 'Editar' ? colors.white.bold(this.curp) : ''}`)
    objAlumno.curp = read.question()
    this.curp = objAlumno.curp !== '' ? objAlumno.curp : this.curp

    console.log(`${colors.gray.bold('Nombre: ')} ${this.estatus === 'Editar' ? colors.white.bold(this.nombre) : ''}`)
    objAlumno.nombre = read.question()
    this.nombre = objAlumno.nombre !== '' ? objAlumno.nombre : this.nombre

    console.log(`${colors.gray.bold('Apellido Paterno: ')} ${this.estatus === 'Editar' ? colors.white.bold(this.apellidoPaterno) : ''}`)
    objAlumno.apellidoPaterno = read.question()
    this.apellidoPaterno = objAlumno.apellidoPaterno !== '' ? objAlumno.apellidoPaterno : this.apellidoPaterno

    console.log(`${colors.gray.bold('Apellido Materno: ')} ${this.estatus === 'Editar' ? colors.white.bold(this.apellidoMaterno) : ''}`)
    objAlumno.apellidoMaterno = read.question()
    this.apellidoMaterno = objAlumno.apellidoMaterno !== '' ? objAlumno.apellidoMaterno : this.apellidoMaterno

    console.log(`${colors.gray.bold('Genero: ')} ${this.estatus === 'Editar' ? colors.white.bold(this.genero) : ''}`)
    objAlumno.genero = read.question()
    this.genero = objAlumno.genero !== '' ? objAlumno.genero : this.genero

    console.log(`${colors.gray.bold('Fecha de Nacimiento: ')} ${this.estatus === 'Editar' ? colors.white.bold(this.fechaNacimiento) : ''}`)
    objAlumno.fechaNacimiento = read.question()
    this.fechaNacimiento = objAlumno.fechaNacimiento !== '' ? objAlumno.fechaNacimiento : this.fechaNacimiento
  }

  consultar () {
    console.log(`Accediste al Metodo ${colors.yellow.bold('Consultar')}`)
    console.log(`MATRICULA ${colors.yellow.bold('Matrícula: ')} es ${this.matricula}`)
    console.log(`CURP ${colors.yellow.bold('Curp: ')} es ${this.curp}`)
    console.log(`NOMBRE COMPLETO ${colors.yellow.bold('Nombre completo: ')} es ${this.getnombrecompleto()}`)
    console.log(`EDAD ${colors.yellow.bold(this.getEdad())}`)
  }
  agregar () {
    console.log(`Accediste al Metodo ${colors.yellow.bold('Agregar')}`)
    let yesNot = read.question(`¿ Esta seguro de ${colors.green.bold('Guardar los datos')} capturados [${colors.green.bold('Y')}/${colors.red.bold('N')}]?`)
    if (yesNot.toUpperCase() === 'Y') {
      // listaAlumnos.push(this)
      console.log(`Los datos se han ${colors.green.bold('Guardado Correctamente !!!')}`)
    } else {
      console.log(`Se ha ${colors.red.bold('Cancelado')} la captura del ${colors.yellow.bold('Alumno')}`)
    }
    read.question(`${colors.yellow.bold('Presiona cualquier tecla para regresar al Menu Principal !!!')}`)
  }
}

module.exports = alumno
