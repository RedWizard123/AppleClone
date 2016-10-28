var n=1;
var i;
var slide_obj=[];
var slide_obj_p=[];
function $(value) {
    var obj;
    if (typeof(value) === "string") {
        if (value.charAt(0) === "#") {
            //alert(value.slice(1,value.length));
            obj = document.getElementById(value.slice(1, value.length));
            return (obj);
        }
        if (value.charAt(0) === ".") {
            obj = document.getElementsByClassName(value.slice(1, value.length));
            return (obj);
        }
    }
}
function resize_(){
    var obj=$(".header-nav-li");
    var sum=0;
    for(i=0;i<obj.length;i++){
        sum+=obj[i].clientWidth;
    }
    var d=($(".header-nav-ul")[0].clientWidth-80-sum)/8;
    for(i=0;i<obj.length;i++){
        if(i==0){//start
            obj[i].style.left="0px";
        }else{//center end
            obj[i].style.left=(i*d)+"px";
            //alert(sum+"px");

        }

    }
    obj=$(".footer-link-ul-li");
    var sum=0;
    for(i=0;i<obj.length;i++){
        sum+=obj[i].clientWidth;
    }
    var d=($(".footer-link-ul")[0].clientWidth-20-sum)/4;

    for(i=0;i<obj.length;i++){
        if(i==0){//start
            obj[i].style.left="0px";
        }else{//center end
            obj[i].style.left=(i*d)+"px";
            //alert(sum+"px");

        }

    }
    obj=$(".main-ad-ul-li");
    for(i=0;i<obj.length;i++){
        obj[i].style.width=(window.innerWidth/4-7)+"px";
        if(i==0){//start
            obj[i].style.left="0px";
        }else{//center end
            obj[i].style.left="0px";
            //alert(sum+"px");

        }
    }
}



window.onresize=function(){resize_()};

window.onload=function(){
    resize_();
    var slide_bgcolor=["rgb(255,255,255)","rgb(0,0,0)","rgb(0,0,0)","rgb(242,242,242)"];
    for(i=0;i<4;i++){
        $(".main-slide-pic-a")[i].style.backgroundColor=slide_bgcolor[i];
        $("#slide-pic-a-"+(i+1)).style.zIndex=4-i;
    }


    $("#slide-pic-a-"+n).classList.add("onNext");
    $("#main-timer-ul-bar-"+n).classList.add("timer");
    setInterval(function(){
        if (n > 4) {
            n=1;
        }


        //slider
        for ( i = 0; i < 4; i++) {
            var z= $("#slide-pic-a-" + (i + 1)).style.zIndex;
            if(z==4){
                $("#slide-pic-a-" + (i + 1)).style.zIndex=1;
            }else{
                $("#slide-pic-a-" + (i + 1)).style.zIndex++;
            }
        }


        $("#slide-pic-a-"+((n==4)?1:(n+1))).classList.add("onNext");
        $("#slide-pic-a-"+((n==1)?4:(n-1))).classList.remove("onNext");



        //timer
        if(n==4){
            for ( i = 1; i < 4; i++) {
                $("#main-timer-ul-bar-" + (i + 1)).classList.remove("timer");
            }
        }
        $("#main-timer-ul-bar-"+((n==4)?1:n+1)).classList.add("timer");
        n++;
    },5000);


    var a=document.getElementsByTagName("a");
    for(i=0;i<a.length;i++){
        a[i].href="#";
    }

};








