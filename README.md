# olStyleChart

Building Chart for point and cluster in Openlayers.

[DEMO](olStyleChart)

```js
import chart from './chart.js'
// ...
style: (feature) => {
  return new ol.style.Style({
    image: new ol.style.Icon({
        img: chart.create({
          values: [10, 14, 3, 12, 8],
          colors: ['#00a64c', '#fcb900', '#ae328e', '#f50800', '#2962ff'],
          hole: 0.7, // 0..1
          radius: 15, // px
          stroke: 0.5 // px
        })
    })
  })
}
```
Full example in a file ./index.html

[Clustered Features Example](https://openlayers.org/en/latest/examples/cluster.html)