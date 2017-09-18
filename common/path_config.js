// 接口路径配置
var base_url = "http://192.168.1.101:9006";
var api={
    init:base_url + "/conf/init",   //初始化数据
    add:base_url + "/conf/addNewUrlConf",   //添加
    edit_url:base_url + "/conf/modifyUrlConf",  //编辑url
    del_url:base_url + "/conf/deleteUrlConf",  //删除url
    detailed:base_url + "/conf/listUrlConf",  //查看详情
    login:base_url + "/conf/adminLogin",  //登录
    update_v:base_url + "/conf/updateVersions",  //登录
    
}