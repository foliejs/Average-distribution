'use strict'
const config = require('config')
const people = config.people

/**
 * FCFS
 */
class DistributionCenter {
  start () {
    DistributionCenter.handleFactory()
  }

  static handleFactory () {
    let index = people.indexOf(GLOBALCOUNT) === -1 ? 0: people.indexOf(GLOBALCOUNT)
    if (index >= people.length) GLOBALCOUNT = people.length - index
    console.log(`_peopleId: ${people[index]} handle task`)
    global.GLOBALCOUNT = people[index+1]
  }
}

module.exports = DistributionCenter
