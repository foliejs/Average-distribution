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
    if (GLOBALCOUNT >= people.length) GLOBALCOUNT = people.length - GLOBALCOUNT
    console.log(`${people[GLOBALCOUNT].name} handle task || _stageId:${people[GLOBALCOUNT]._stageId}`)
    global.GLOBALCOUNT++
  }
}

module.exports = DistributionCenter
