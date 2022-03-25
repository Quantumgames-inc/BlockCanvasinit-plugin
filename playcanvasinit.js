console.log('hey! plugin js code executed')
let yml = `
---
  ver=1.0.0
  Test:
    color: ff0000
    icon: text.svg
    blocks:
      - test:
          shadows:
            - 1
          args:
            a: value
            b: statement
          function: test
          code: >
            func test(a, b) {
              print(a)
              b!()
            }
          messages:
            - test
            -
          hasReturn: false
          tooltip: test
`
createBlocksFromYAML(yml)
