(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{3427:function(a,e,t){},3488:function(a,e,t){"use strict";t.r(e),t.d(e,"default",function(){return u});var r=t(78),n=t(16),o=t(15),i=t(21),s=t(20),p=t(0),c=t.n(p),d=t(2402),m=t.n(d),l=(t(3425),t(3426),t(3427),t(3428),t(3429),t(3430),t(1481)),u=function(a){Object(i.a)(t,a);var e=Object(s.a)(t);function t(){return Object(n.a)(this,t),e.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var a=this.props.nodes,e=[],t={},n=[];if(l.a.mapChart.series[0].geoCoord={},l.a.mapChart.series[1].markPoint.data=[],a.length){var o,i=Object(r.a)(a);try{for(i.s();!(o=i.n()).done;){var s=o.value;e.push([s.lat,s.lng,s.ip]),t[s.ip]=[s.lng,s.lat],n.push({name:s.ip,ip:s.ip})}}catch(a){i.e(a)}finally{i.f()}var p=e,c=m.a.map(this.$ref,{maxZoom:18,minZoom:2,maxBounds:[[-90,-180],[90,180]]}),d=m.a.latLng(-90,-120),u=m.a.latLng(90,120);m.a.latLngBounds(d,u),m.a.tileLayer("https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidHJvbm5ldHdvcmsiLCJhIjoiY2prODN1cms2MDEwbzNxcHE3bzJkdTZ6ayJ9.QyBCtvwwMp8RK7V3kTbr_Q").addTo(c),c.setView(m.a.latLng(0,13.114129),1);for(var h=m.a.markerClusterGroup(),v=0;v<p.length;v++){var f=p[v],y=f[2],b=m.a.marker(new m.a.LatLng(f[0],f[1]),{title:y});b.bindPopup(y),h.addLayer(b)}c.addLayer(h);var w=new m.a.echartsLayer(c,echarts),g=w.getEchartsContainer(),k=w.initECharts(g);window.onresize=k.onresize,l.a.mapChart.series[0].geoCoord=t,l.a.mapChart.series[1].markPoint.data=n,w.setOption(l.a.mapChart)}}},{key:"render",value:function(){var a=this,e=this.props.className;return c.a.createElement("div",{style:{height:600},className:e+" map-2d",ref:function(e){return a.$ref=e}})}}]),t}(p.Component)}}]);