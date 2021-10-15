var config = {
    //瓦片文件类型
    'tilesExt': '.jpg',
    //瓦片路径，默认本地tiles；也可设置服务器的路径，例如http://192.168.0.0:port/tiles
    'tilesPath': '',
    //图片路径
    'imagesPath':''
};
let scripts = document.getElementsByTagName("script");
let filePath = scripts[scripts.length - 1].getAttribute("src");
config.home = filePath.substr(0, filePath.lastIndexOf("/") + 1);
(function () {
    document.write('<script type="text/javascript" src="baidu_map_api_v3.0.js"></script>');
    //需开发其他功能时，需要单独引入相关文件
    //以点聚合为例
    document.write('<script type="text/javascript" src="js/MarkerClusterer_min.js"></script>');
    //有修改，聚合点图标路径需修改为本地
    document.write('<script type="text/javascript" src="js/TextIconOverlay_min.js"></script>');
})();