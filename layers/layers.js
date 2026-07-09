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
var format_Colector_1 = new ol.format.GeoJSON();
var features_Colector_1 = format_Colector_1.readFeatures(json_Colector_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colector_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colector_1.addFeatures(features_Colector_1);
var lyr_Colector_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colector_1, 
                style: style_Colector_1,
                popuplayertitle: 'Colector',
                interactive: true,
                title: '<img src="styles/legend/Colector_1.png" /> Colector'
            });
var format_Cmara_2 = new ol.format.GeoJSON();
var features_Cmara_2 = format_Cmara_2.readFeatures(json_Cmara_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cmara_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cmara_2.addFeatures(features_Cmara_2);
var lyr_Cmara_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cmara_2, 
                style: style_Cmara_2,
                popuplayertitle: 'Cámara',
                interactive: true,
                title: '<img src="styles/legend/Cmara_2.png" /> Cámara'
            });
var group_Red_publica = new ol.layer.Group({
                                layers: [lyr_Colector_1,lyr_Cmara_2,],
                                fold: 'open',
                                title: 'Red_publica'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Colector_1.setVisible(true);lyr_Cmara_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,group_Red_publica];
lyr_Colector_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'IDENTIFICA': 'IDENTIFICA', 'DIAMETRO': 'DIAMETRO', 'MATERIAL': 'MATERIAL', 'SUBTYPE': 'SUBTYPE', 'IDSV': 'IDSV', 'X': 'X', 'Y': 'Y', 'SHAPE_Leng': 'SHAPE_Leng', 'FECHA_EXTR': 'FECHA_EXTR', 'EXISTENCIA': 'EXISTENCIA', 'Shape__Length': 'Shape__Length', 'GlobalID': 'GlobalID', 'CreationDate': 'CreationDate', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'ESTADO': 'ESTADO', });
lyr_Cmara_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'IDENTIFICA': 'IDENTIFICA', 'DIAMETRO': 'DIAMETRO', 'MATERIAL': 'MATERIAL', 'PROFUNDIDA': 'PROFUNDIDA', 'COTAANILLO': 'COTAANILLO', 'COTARADIER': 'COTARADIER', 'CAMARA': 'CAMARA', 'PROFUNDIDAD': 'PROFUNDIDAD', 'TAPA': 'TAPA', 'ESTADO': 'ESTADO', 'ESCALINES': 'ESCALINES', 'CARACTERISTICA': 'CARACTERISTICA', 'FECHA': 'FECHA', 'OBSERVACION': 'OBSERVACION', 'GlobalID': 'GlobalID', 'CreationDate': 'CreationDate', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', });
lyr_Colector_1.set('fieldImages', {'fid': '', 'OBJECTID_1': '', 'OBJECTID': '', 'IDENTIFICA': '', 'DIAMETRO': '', 'MATERIAL': '', 'SUBTYPE': '', 'IDSV': '', 'X': '', 'Y': '', 'SHAPE_Leng': '', 'FECHA_EXTR': '', 'EXISTENCIA': '', 'Shape__Length': '', 'GlobalID': '', 'CreationDate': '', 'Creator': '', 'EditDate': '', 'Editor': '', 'ESTADO': '', });
lyr_Cmara_2.set('fieldImages', {'fid': '', 'OBJECTID_1': '', 'OBJECTID': '', 'IDENTIFICA': '', 'DIAMETRO': '', 'MATERIAL': '', 'PROFUNDIDA': '', 'COTAANILLO': '', 'COTARADIER': '', 'CAMARA': '', 'PROFUNDIDAD': '', 'TAPA': '', 'ESTADO': '', 'ESCALINES': '', 'CARACTERISTICA': '', 'FECHA': '', 'OBSERVACION': '', 'GlobalID': '', 'CreationDate': '', 'Creator': '', 'EditDate': '', 'Editor': '', });
lyr_Colector_1.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID': 'hidden field', 'IDENTIFICA': 'header label - visible with data', 'DIAMETRO': 'hidden field', 'MATERIAL': 'hidden field', 'SUBTYPE': 'hidden field', 'IDSV': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', 'SHAPE_Leng': 'hidden field', 'FECHA_EXTR': 'hidden field', 'EXISTENCIA': 'hidden field', 'Shape__Length': 'hidden field', 'GlobalID': 'hidden field', 'CreationDate': 'hidden field', 'Creator': 'hidden field', 'EditDate': 'hidden field', 'Editor': 'hidden field', 'ESTADO': 'hidden field', });
lyr_Cmara_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID_1': 'hidden field', 'OBJECTID': 'hidden field', 'IDENTIFICA': 'inline label - visible with data', 'DIAMETRO': 'hidden field', 'MATERIAL': 'hidden field', 'PROFUNDIDA': 'hidden field', 'COTAANILLO': 'hidden field', 'COTARADIER': 'hidden field', 'CAMARA': 'hidden field', 'PROFUNDIDAD': 'hidden field', 'TAPA': 'hidden field', 'ESTADO': 'hidden field', 'ESCALINES': 'hidden field', 'CARACTERISTICA': 'hidden field', 'FECHA': 'hidden field', 'OBSERVACION': 'hidden field', 'GlobalID': 'hidden field', 'CreationDate': 'hidden field', 'Creator': 'hidden field', 'EditDate': 'hidden field', 'Editor': 'hidden field', });
lyr_Cmara_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});