# olStyleChart

Building Chart for point and cluster in Openlayers.
[DEMO](https://kossyak.github.io/olStyleChart/)

![image](https://github.com/kossyak/olStyleChart/assets/68551616/8dc72b5f-a597-49bc-947c-31b3b1ee2b10)

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
