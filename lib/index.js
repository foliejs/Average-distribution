'use strict'
const config = require('config')

/**
 * FCFS
 */
class DistributionCenter {
  start () {
    DistributionCenter.handleFactory()
    // setInterval(DistributionCenter.handleFactory, 600)
  }

  static handleFactory () {
    let people = config.people
    if (global.GLOBALCOUNT >= people.length) global.GLOBALCOUNT = people.length - global.GLOBALCOUNT
    console.log(`${people[global.GLOBALCOUNT].name} handle task || _stageId:${people[global.GLOBALCOUNT]._stageId}`)
    global.GLOBALCOUNT++
  }
}

module.exports = DistributionCenter