const shuffle = require("../src/shuffle");

describe("shuffle should work properly", () => {
  
  test("returns an array with the same length as the array provided.", async () => {
    
    let abcArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    let result = shuffle(abcArr)
    expect(result.length).toEqual(10)
  });

  test("can the shuffle function shuffle the items in the array provided.", async () => {

    let abcArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    let result = shuffle(abcArr)
    expect(abcArr).not.toEqual(result)

  });

  test("are the items the same as in the array provided.", async () => {

    let abcArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    let result = shuffle(abcArr)
    expect(result).toContain('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j')

  });

});


