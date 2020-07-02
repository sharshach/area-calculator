# AREA CALCULATOR
- A react native application that supports to calculate the area of 4 sided (approx regular) shape 
- Designed to get the approx area of the fields (which are genrally similars to rectangles)
- this gives only approx data and not accurate

### Input
- in genral values (for four sides) are expected to be in feets.

### Output
- The Area calculted will be in cents (acre/100)

### Calculation Formula

```
(((north+south)/2)*((east+west)/2))/9/48.4
```


### DEMO
[Download android apk from here](https://github.com/sharshach/area-calculator/releases/download/1/AreaCalculator-4fb019726a9d4fde87cb0bd01e7b33c4-signed.apk)

### Development
- based on react native with expo . STFW to know more on them

in genral
- ```npm install``` will install all dependencies
- ```expo start``` will start the expo dev server
- ```expo build:android``` to form a apk file
