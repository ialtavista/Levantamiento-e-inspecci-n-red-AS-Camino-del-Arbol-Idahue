var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_reasintervenidasparalimpieza_1 = new ol.format.GeoJSON();
var features_reasintervenidasparalimpieza_1 = format_reasintervenidasparalimpieza_1.readFeatures(json_reasintervenidasparalimpieza_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasintervenidasparalimpieza_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasintervenidasparalimpieza_1.addFeatures(features_reasintervenidasparalimpieza_1);
var lyr_reasintervenidasparalimpieza_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasintervenidasparalimpieza_1, 
                style: style_reasintervenidasparalimpieza_1,
                popuplayertitle: 'Áreas intervenidas para limpieza',
                interactive: true,
                title: '<img src="styles/legend/reasintervenidasparalimpieza_1.png" /> Áreas intervenidas para limpieza'
            });
var format_Colector_2 = new ol.format.GeoJSON();
var features_Colector_2 = format_Colector_2.readFeatures(json_Colector_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colector_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colector_2.addFeatures(features_Colector_2);
var lyr_Colector_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colector_2, 
                style: style_Colector_2,
                popuplayertitle: 'Colector',
                interactive: false,
                title: '<img src="styles/legend/Colector_2.png" /> Colector'
            });
var format_Cmara_3 = new ol.format.GeoJSON();
var features_Cmara_3 = format_Cmara_3.readFeatures(json_Cmara_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cmara_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cmara_3.addFeatures(features_Cmara_3);
var lyr_Cmara_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cmara_3, 
                style: style_Cmara_3,
                popuplayertitle: 'Cámara',
                interactive: true,
    title: 'Cámara<br />\
    <img src="styles/legend/Cmara_3_0.png" /> PENDIENTE<br />\
    <img src="styles/legend/Cmara_3_1.png" /> INSPECCIONADA<br />\
    <img src="styles/legend/Cmara_3_2.png" /> CON NIVEL<br />\
    <img src="styles/legend/Cmara_3_3.png" /> SELLADA<br />\
    <img src="styles/legend/Cmara_3_4.png" /> NO ENCONTRADA<br />\
    <img src="styles/legend/Cmara_3_5.png" /> SIN ACCESO<br />' });
var group_Red_publica = new ol.layer.Group({
                                layers: [lyr_reasintervenidasparalimpieza_1,lyr_Colector_2,lyr_Cmara_3,],
                                fold: 'open',
                                title: 'Red_publica'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_reasintervenidasparalimpieza_1.setVisible(true);lyr_Colector_2.setVisible(true);lyr_Cmara_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,group_Red_publica];
lyr_reasintervenidasparalimpieza_1.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'descripcion': 'descripcion', 'foto1': 'foto1', 'foto2': 'foto2', 'foto3': 'foto3', 'foto4': 'foto4', 'foto5': 'foto5', 'foto6': 'foto6', });
lyr_Colector_2.set('fieldAliases', {'fid': 'fid', 'IDENTIFICA': 'IDENTIFICA', 'DIAMETRO': 'DIAMETRO', 'MATERIAL': 'MATERIAL', 'X': 'X', 'Y': 'Y', 'ESTADO': 'ESTADO', });
lyr_Cmara_3.set('fieldAliases', {'fid': 'fid', 'IDENTIFICA': 'IDENTIFICA', 'ESTADO': 'ESTADO', 'ESCALINES': 'ESCALINES', 'FOTOGRAFIA_PANORAMICA': 'FOTOGRAFIA_PANORAMICA', 'FOTOGRAFIA_INTERIOR': 'FOTOGRAFIA_INTERIOR', 'FOTOGRAFIA_LIMPIEZA': 'FOTOGRAFIA_LIMPIEZA', 'OBSERVACIONES': 'OBSERVACIONES', });
lyr_reasintervenidasparalimpieza_1.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'descripcion': 'TextEdit', 'foto1': 'ExternalResource', 'foto2': 'ExternalResource', 'foto3': 'ExternalResource', 'foto4': 'ExternalResource', 'foto5': 'ExternalResource', 'foto6': 'ExternalResource', });
lyr_Colector_2.set('fieldImages', {'fid': 'TextEdit', 'IDENTIFICA': '', 'DIAMETRO': 'ValueMap', 'MATERIAL': '', 'X': '', 'Y': '', 'ESTADO': 'ValueMap', });
lyr_Cmara_3.set('fieldImages', {'fid': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'ESTADO': 'ValueMap', 'ESCALINES': 'Range', 'FOTOGRAFIA_PANORAMICA': 'ExternalResource', 'FOTOGRAFIA_INTERIOR': 'ExternalResource', 'FOTOGRAFIA_LIMPIEZA': 'ExternalResource', 'OBSERVACIONES': 'TextEdit', });
lyr_reasintervenidasparalimpieza_1.set('fieldLabels', {'fid': 'hidden field', 'nombre': 'inline label - visible with data', 'descripcion': 'inline label - visible with data', 'foto1': 'inline label - visible with data', 'foto2': 'inline label - visible with data', 'foto3': 'inline label - visible with data', 'foto4': 'inline label - visible with data', 'foto5': 'inline label - visible with data', 'foto6': 'inline label - visible with data', });
lyr_Colector_2.set('fieldLabels', {'fid': 'hidden field', 'IDENTIFICA': 'no label', 'DIAMETRO': 'hidden field', 'MATERIAL': 'no label', 'X': 'no label', 'Y': 'no label', 'ESTADO': 'hidden field', });
lyr_Cmara_3.set('fieldLabels', {'fid': 'hidden field', 'IDENTIFICA': 'inline label - visible with data', 'ESTADO': 'inline label - visible with data', 'ESCALINES': 'inline label - visible with data', 'FOTOGRAFIA_PANORAMICA': 'inline label - visible with data', 'FOTOGRAFIA_INTERIOR': 'inline label - visible with data', 'FOTOGRAFIA_LIMPIEZA': 'inline label - visible with data', 'OBSERVACIONES': 'inline label - visible with data', });
lyr_Cmara_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});