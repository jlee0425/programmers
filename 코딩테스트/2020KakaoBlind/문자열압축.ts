// const compressStr = (str: string): number => {
//   let patterns: string[] = new Array(str.length)

//   return Math.min(...patterns.map(p => p.length))
// }
const gradeList = {
  F: 0,
  'D-': 1,
  D0: 2,
  'D+': 3,
  'C-': 4,
  C0: 5,
  'C+': 6,
  'B-': 7,
  B0: 8,
  'B+': 9,
  'A-': 10,
  A0: 11,
  'A+': 12
}
function t (grades) {
  let transcript = new Map()

  grades.forEach((g, i) => {
    const [cl, gr] = g.split(' ')

    if (transcript.get(cl)) {
      if (transcript.get(cl).grade < gradeList[gr]) {
        transcript.set(cl, {
          grade: gradeList[gr],
          index: i
        })
      }
    } else {
      transcript.set(cl, { grade: gradeList[gr], index: i })
    }
  })

  const getKeyByValue = v =>
    Object.keys(gradeList).find(key => gradeList[key] === v)

  const gradeComparator = (a, b) => {
    if (a[1].grade != b[1].grade) {
      return b[1].grade - a[1].grade
    }
    return a[1].index - b[1].index
  }

  const arr = Array.from(transcript)
    .sort(gradeComparator)
    .map(el => {
      el[1] = getKeyByValue(el[1].grade)
      return `${el[0]} ${el[1]}`
    })

  console.log(
    `Array.from(transcript)`,
    Array.from(transcript).sort(gradeComparator)
  )
  console.log(`arr`, arr)
}

t([
  'DM0106 D-',
  'PL6677 B+',
  'DM0106 B+',
  'DM0106 B+',
  'PL6677 C0',
  'GP0000 A0'
])
