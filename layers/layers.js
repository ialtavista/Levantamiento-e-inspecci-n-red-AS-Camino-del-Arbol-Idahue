var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Obstruccindetectada_2 = new ol.format.GeoJSON();
var features_Obstruccindetectada_2 = format_Obstruccindetectada_2.readFeatures(json_Obstruccindetectada_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Obstruccindetectada_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Obstruccindetectada_2.addFeatures(features_Obstruccindetectada_2);
var lyr_Obstruccindetectada_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Obstruccindetectada_2, 
                style: style_Obstruccindetectada_2,
                popuplayertitle: 'Obstrucción detectada',
                interactive: true,
                title: '<img src="styles/legend/Obstruccindetectada_2.png" /> Obstrucción detectada'
            });
var format_Colector_3 = new ol.format.GeoJSON();
var features_Colector_3 = format_Colector_3.readFeatures(json_Colector_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colector_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colector_3.addFeatures(features_Colector_3);
var lyr_Colector_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colector_3, 
                style: style_Colector_3,
                popuplayertitle: 'Colector',
                interactive: true,
                title: '<img src="styles/legend/Colector_3.png" /> Colector'
            });
var format_Cmara_4 = new ol.format.GeoJSON();
var features_Cmara_4 = format_Cmara_4.readFeatures(json_Cmara_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cmara_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cmara_4.addFeatures(features_Cmara_4);
var lyr_Cmara_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cmara_4, 
                style: style_Cmara_4,
                popuplayertitle: 'Cámara',
                interactive: true,
    title: 'Cámara<br />\
    <img src="styles/legend/Cmara_4_0.png" /> PENDIENTE<br />\
    <img src="styles/legend/Cmara_4_1.png" /> INSPECCIONADA<br />\
    <img src="styles/legend/Cmara_4_2.png" /> CON NIVEL<br />\
    <img src="styles/legend/Cmara_4_3.png" /> SELLADA<br />\
    <img src="styles/legend/Cmara_4_4.png" /> NO ENCONTRADA<br />\
    <img src="styles/legend/Cmara_4_5.png" /> SIN ACCESO<br />\
    <img src="styles/legend/Cmara_4_6.png" /> CON REBASE<br />' });
var group_RedASLevantada = new ol.layer.Group({
                                layers: [lyr_Obstruccindetectada_2,lyr_Colector_3,lyr_Cmara_4,],
                                fold: 'open',
                                title: 'Red AS Levantada'});
var group_RedASReferencial = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Red AS Referencial'});

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_Obstruccindetectada_2.setVisible(true);lyr_Colector_3.setVisible(true);lyr_Cmara_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatelliteHybrid_1,group_RedASLevantada];
lyr_Obstruccindetectada_2.set('fieldAliases', {'fid': 'fid', 'FOTO1': 'FOTO1', 'FOTO2': 'FOTO2', 'FOTO3': 'FOTO3', 'DESCRIPCIÓN': 'DESCRIPCIÓN', });
lyr_Colector_3.set('fieldAliases', {'fid': 'fid', 'IDENTIFICA': 'IDENTIFICA', 'DIAMETRO': 'DIAMETRO', 'MATERIAL': 'MATERIAL', 'X': 'X', 'Y': 'Y', 'ESTADO': 'ESTADO', });
lyr_Cmara_4.set('fieldAliases', {'fid': 'fid', 'IDENTIFICA': 'IDENTIFICA', 'ESTADO': 'ESTADO', 'ESCALINES': 'ESCALINES', 'FOTOGRAFIA_PANORAMICA': 'FOTOGRAFIA_PANORAMICA', 'FOTOGRAFIA_INTERIOR': 'FOTOGRAFIA_INTERIOR', 'FOTOGRAFIA_LIMPIEZA': 'FOTOGRAFIA_LIMPIEZA', 'OBSERVACIONES': 'OBSERVACIONES', });
lyr_Obstruccindetectada_2.set('fieldImages', {'fid': 'TextEdit', 'FOTO1': 'ExternalResource', 'FOTO2': 'ExternalResource', 'FOTO3': 'ExternalResource', 'DESCRIPCIÓN': 'TextEdit', });
lyr_Colector_3.set('fieldImages', {'fid': 'TextEdit', 'IDENTIFICA': '', 'DIAMETRO': 'ValueMap', 'MATERIAL': '', 'X': '', 'Y': '', 'ESTADO': 'ValueMap', });
lyr_Cmara_4.set('fieldImages', {'fid': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'ESTADO': 'ValueMap', 'ESCALINES': 'Range', 'FOTOGRAFIA_PANORAMICA': 'ExternalResource', 'FOTOGRAFIA_INTERIOR': 'ExternalResource', 'FOTOGRAFIA_LIMPIEZA': 'ExternalResource', 'OBSERVACIONES': 'TextEdit', });
lyr_Obstruccindetectada_2.set('fieldLabels', {'fid': 'inline label - always visible', 'FOTO1': 'inline label - visible with data', 'FOTO2': 'inline label - visible with data', 'FOTO3': 'inline label - visible with data', 'DESCRIPCIÓN': 'inline label - visible with data', });
lyr_Colector_3.set('fieldLabels', {'fid': 'hidden field', 'IDENTIFICA': 'inline label - visible with data', 'DIAMETRO': 'hidden field', 'MATERIAL': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'ESTADO': 'hidden field', });
lyr_Cmara_4.set('fieldLabels', {'fid': 'hidden field', 'IDENTIFICA': 'inline label - visible with data', 'ESTADO': 'inline label - visible with data', 'ESCALINES': 'inline label - visible with data', 'FOTOGRAFIA_PANORAMICA': 'inline label - visible with data', 'FOTOGRAFIA_INTERIOR': 'inline label - visible with data', 'FOTOGRAFIA_LIMPIEZA': 'inline label - visible with data', 'OBSERVACIONES': 'inline label - visible with data', });
lyr_Cmara_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});