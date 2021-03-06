# Summary
Code and notes from lunch and learn presentation about TDD and unit testing, starting basically with an empty repo.

# Live Demo Notes

## Setup
```mkdir demo
cd demo
npm init demo
git init
add prototype.js
add package.json script to run prototype.js
```

## Live Demo

START DEMO HERE

```
npm test
install mocha explain mocha's purpose as a test runner
add package.json: "test": "mocha"
create test.js
describe + it (empty) to test file empty test pass!
add David Eastman test data and fullName call to test and expect
create fullName.js with empty fn export & require into test.js
install chai explain chai's purpose as expect function library
add return "David Eastman" to product code
change test data to David Beckham
refactor test to make one for each David
refactor prod code to pass in the name param and use name.last
add Victoria Beckham test
refactor prod code to use name.first
refactor code to use string interpolation
    !!!wall of tests gives us confidence and change guard!!!
add undefined name param test case let's say the biz wants an empty string returned
add undefined name check to product code
add null name param test case and product code check (separate from undefined check)
streamline undefined/null check product code
add undefined name.first or name.last test case and add prod code to return ""
add first and last names are null test case
add first and last names are empty strings test case
reorganize test code to be more maintainable
    make undefined/null/empty describe sub-block
    make first+last describe sub-block
add Ronaldo first-only case
refactor prod code to pass Ronaldo, but other cases fail now
refactor prod code to pass Ronaldo + first+last name cases
add (mister) T first name only test case
refactor prod code to pass T
add MacGyver last name only test case, tests should already pass
refactor prod code to destructure name
add middle name requirement!
before adding first+middle+last test case, refactor the string interpolation to be concatenation
    let fullName = '';
    fullName += first ? first : "";
    fullName += first && last ? " " : "";
    fullName += last ? last : "";
    return fullName;
add James Tiberius Kirk test case and refactor product code to handle that case
    let fullName = '';
    fullName += first ? first : "";
    fullName += first && last ? " " : "";
    fullName += middle ? middle + " " : "";
    fullName += last ? last : "";
    return fullName;
```