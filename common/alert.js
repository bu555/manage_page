        //弹框
        function alert(e,callback){
            // $("body").append(template("alert-box",{}));
            $("body").append(
                "<div id='alert-msg' style='text-align:center;6rem;text-aligin:center;position:fixed;top:25%;width:100%'>"+
                "<span style='color:#fff;background: rgba(0,0,0,0.8);height:6rem;display:inline-block;padding:2rem 3rem;border-radius:5px'>"
                 +e+
                "</span>"+
                "</div>"
                );
            clearmsg(callback);
        }
        function clearmsg(callback){  //弹框时间控制
            var t = setTimeout(function(){
                $("#alert-msg").remove();
                callback();
            },1300)
        };

        // #msg{
        //     height: 2rem;
        //     text-align: center;
        //     position: fixed;
        //     top: 50%;
        //     margin-top: -1rem;
        //     line-height: 2rem;
        //     width: 100%;
        // }
        // #msg span{
        //     color: #fff;
        //     background: rgba(0,0,0,0.6);
        //     height: 2rem;
        //     display: inline-block;
        //     padding: 0 3rem;
        //     border-radius: 5px;
        // }