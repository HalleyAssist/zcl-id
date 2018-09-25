var _ = require('busyman'),
    Enum = require('light-enum');

function clusterWithNewFormat (cluster) {
    var cObj = {
        attr: null,
        attrType: null,
        cmd: null,
        cmdRsp: null
    };

    var attrObj = {},
        attrTypeObj = {};

    _.forEach(cluster.attrId, function (attrInfo, attr) {
        attrObj[attr] = attrInfo.id;
        attrTypeObj[attr] = attrInfo.type;
    });

    cObj.attr = new Enum(attrObj, function(a){a.id});
    cObj.attrType = new Enum(attrTypeObj, function(a){a.type}, false);

    if (cluster.cmd !== null)
        cObj.cmd = new Enum(cluster.cmd);
    if (cluster.cmdRsp !== null)
        cObj.cmdRsp = new Enum(cluster.cmdRsp);

    cluster.attrId = null;
    cluster.cmd = null;
    cluster.cmdRsp = null;
    cluster = null;

    return cObj;
}

module.exports = clusterWithNewFormat;
