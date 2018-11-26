/**
 * 作者：slg
 * 时间：2017/1/19
 * 功能：CGCS2000 经纬度直投 坐标转换  这个需要优化
 */

L.CRS.EPSG4490 = L.extend({}, L.CRS.Earth, {
  code: 'EPSG:4490',
  projection: L.Projection.LonLat,
  //transformation: new L.Transformation(1 / 360, 0.5, -1 / 360, 90 / 360)
  transformation: new L.Transformation(1 / 360, 0.5, -1 / 360, 0.25) // 仿射变换设置参数
});

L.extend(L.LatLng, {
  DEG_TO_RAD: Math.PI / 180,
  RAD_TO_DEG: 180 / Math.PI,
  MAX_MARGIN: 1.0E-9 // max margin of error for the "equals" check
});
