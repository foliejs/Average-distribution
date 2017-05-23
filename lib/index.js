'use strict'
const config = require('config')
let GLOBALCOUNT = 0

/**
 * FCFS 
 */
class distributionCenter {
  start () {
    setInterval(distributionCenter.handleFactory, 600)
  }

  static handleFactory () {
    let people = config.people
    if (GLOBALCOUNT >= people.length) GLOBALCOUNT = people.length - GLOBALCOUNT
    console.log(`${people[GLOBALCOUNT].name} handle task`)
    GLOBALCOUNT++
  }
}

let dis = new distributionCenter()
dis.start()

module.exports = distributionCenter