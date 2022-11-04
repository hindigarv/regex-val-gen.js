# regex-val-gen

Generate values from a regular expression.
Caution: We do not support all the features of regular expression. Only limited features are supported.

## Usage

```javascript
import {generateValuesFromRegex} from "regex-val-gen"

const regex = "^a(b|c)d$"
const vals = generateValuesFromRegex(regex)
console.log(vals)
// [ 'abd', 'acd' ]
```

## Supported features

### An option group `(a|b|c)`
# TODO Update this section 
```javascript
"^xx(a|b|c)xx$" => [""] 
```