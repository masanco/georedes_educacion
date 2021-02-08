var wms_layers = [];


        var lyr_CartoDark_0 = new ol.layer.Tile({
            'title': 'Carto Dark',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var format_LAGOS_LAGUNAS_1 = new ol.format.GeoJSON();
var features_LAGOS_LAGUNAS_1 = format_LAGOS_LAGUNAS_1.readFeatures(json_LAGOS_LAGUNAS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAGOS_LAGUNAS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAGOS_LAGUNAS_1.addFeatures(features_LAGOS_LAGUNAS_1);
var lyr_LAGOS_LAGUNAS_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LAGOS_LAGUNAS_1, 
                style: style_LAGOS_LAGUNAS_1,
                interactive: true,
                title: '<img src="styles/legend/LAGOS_LAGUNAS_1.png" /> LAGOS_LAGUNAS'
            });
var format_LAGO_TITICACA_2 = new ol.format.GeoJSON();
var features_LAGO_TITICACA_2 = format_LAGO_TITICACA_2.readFeatures(json_LAGO_TITICACA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LAGO_TITICACA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LAGO_TITICACA_2.addFeatures(features_LAGO_TITICACA_2);
var lyr_LAGO_TITICACA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LAGO_TITICACA_2, 
                style: style_LAGO_TITICACA_2,
                interactive: true,
                title: '<img src="styles/legend/LAGO_TITICACA_2.png" /> LAGO_TITICACA'
            });
var format_DEPARTAMENTOS_3 = new ol.format.GeoJSON();
var features_DEPARTAMENTOS_3 = format_DEPARTAMENTOS_3.readFeatures(json_DEPARTAMENTOS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DEPARTAMENTOS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DEPARTAMENTOS_3.addFeatures(features_DEPARTAMENTOS_3);
var lyr_DEPARTAMENTOS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DEPARTAMENTOS_3, 
                style: style_DEPARTAMENTOS_3,
                interactive: true,
                title: '<img src="styles/legend/DEPARTAMENTOS_3.png" /> DEPARTAMENTOS'
            });

lyr_CartoDark_0.setVisible(true);lyr_LAGOS_LAGUNAS_1.setVisible(true);lyr_LAGO_TITICACA_2.setVisible(true);lyr_DEPARTAMENTOS_3.setVisible(true);
var layersList = [lyr_CartoDark_0,lyr_LAGOS_LAGUNAS_1,lyr_LAGO_TITICACA_2,lyr_DEPARTAMENTOS_3];
lyr_LAGOS_LAGUNAS_1.set('fieldAliases', {'NOMBRE': 'NOMBRE', });
lyr_LAGO_TITICACA_2.set('fieldAliases', {'NOMBRE': 'NOMBRE', });
lyr_DEPARTAMENTOS_3.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', });
lyr_LAGOS_LAGUNAS_1.set('fieldImages', {'NOMBRE': 'TextEdit', });
lyr_LAGO_TITICACA_2.set('fieldImages', {'NOMBRE': 'TextEdit', });
lyr_DEPARTAMENTOS_3.set('fieldImages', {'DEPARTAMEN': 'TextEdit', });
lyr_LAGOS_LAGUNAS_1.set('fieldLabels', {'NOMBRE': 'no label', });
lyr_LAGO_TITICACA_2.set('fieldLabels', {'NOMBRE': 'no label', });
lyr_DEPARTAMENTOS_3.set('fieldLabels', {'DEPARTAMEN': 'no label', });
lyr_DEPARTAMENTOS_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});