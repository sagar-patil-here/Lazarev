function page2animation(){
    var right_elem = document.querySelectorAll(".left-elem")
    right_elem.forEach(function(elem){
       
        elem.addEventListener("mouseenter",function(){
            gsap.to(elem.childNodes[3],{
                opacity:1,
                scale:1,
                
                
            })
            gsap.to(elem.childNodes[1],{
                borderBottomColor: 'white'
            })
        })
        elem.addEventListener("mouseleave",function(){
            gsap.to(elem.childNodes[3],{
                opacity:0,
                scale:0,
            
            })
            gsap.to(elem.childNodes[1],{
                borderBottomColor: '#333'
            })
        })
        elem.addEventListener("mousemove",function(dets){
            gsap.to(elem.childNodes[3],{
                x:dets.x-elem.getBoundingClientRect().x-50,
                y:dets.y-elem.getBoundingClientRect().y-200
            })
        })
    })
    
}
function page3videoanimation(){
    var playbutton=document.querySelector(".video-container")
    var video=document.querySelector("video")
    playbutton.addEventListener("click",function(){
        video.play()
        gsap.to(video,{
            transform:"scaleX(1) scaleY(1)",
            opacity:2,
            borderRadius:0,
            duration: 1
        

        })
    })
    video.addEventListener("click",function(){
        video.pause()
        gsap.to(video,{
            opacity:0,
            transform:"scaleX(0.5) scaleY(0)",
            borderRadius:"30px"
           
        
        })
    })
}
page3videoanimation()
page2animation()
