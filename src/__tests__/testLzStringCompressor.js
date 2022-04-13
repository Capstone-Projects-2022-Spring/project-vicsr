import LZString from "lz-string"

test("Compression String matches when compressed and decompressed", ()=>{
    let string = "Hello"
    let compressed = LZString.compress(string)
    let decompressed = LZString.decompress(compressed)
    expect(string).toEqual(decompressed)
})