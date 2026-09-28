import {cypherText} from './cypherText'
test('to check our cypher',()=>{
    expect(cypherText('abc')).toBe('zyx')
})