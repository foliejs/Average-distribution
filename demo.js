let count=11
let cores = 4
for(let taskNumber = 0; taskNumber < cores; taskNumber++)
{
    let seqno = taskNumber
    var max = count * (seqno + 1) / cores
    var j = count * seqno / cores
    for (let i = j; i < max; i++)
    {
      // let arr = [j,max]
    }
    console.log([j,max])
}
