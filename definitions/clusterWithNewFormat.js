var _ = require('busyman'),
    Enum = require('light-enum');

function clusterWithNewFormat (cluster) {
    var cObj = {
        attr: null,
        attrType: null,
        cmd: null,
        cmdRsp: null
    }

    cObj.attr = new Enum(cluster.attrId, function(a){return a.id});
    cObj.attrType = new Enum(cluster.attrId, function(a){return a.type}, false);

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
