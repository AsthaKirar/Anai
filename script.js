
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


var navpart3 = document.querySelector("#nav-part3 i")

var flag = 0;
var uperpage1 = document.querySelector("#uperpage1 #menu-part21 i")
var flag2 = 0;
navpart3.addEventListener("click",function(){
    // console.log("heyyy")
    if(flag==0){
      gsap.to("#uperpage1",{
        display:"block",
        ease:"power4.out",

      })
      flag=1;
      
    }
    else{
      gsap.to("#uperpage1",{
        display:"none"
      })
      flag=0;
    }
  

})
uperpage1.addEventListener("click",function(){
  console.log("heyyy")
  if(flag2==0){
    gsap.to("#uperpage1",{
      display:"none",
      ease:"power4.out"

    })
    flag2=1;
    
  }
  else{
    gsap.to("#uperpage1",{
      display:"block",
    })
    flag2=0;
  }


})

var arrow = document.querySelector(".arrow11 i")

var arrow2 = document.querySelector(".arrow12 i")

var flag= 0;
var tl = gsap.timeline();
arrow.addEventListener("click",function(){
  
    tl.to(" .page4-part1 .kuma",{
      opacity:1,
      ease:"power4.out",

    },"a")
    tl.to(" .page4-part2 .img-div2 img",{
      
      opacity:1,
      ease:"power4.out"

    },"a")

  
  
    
  })

  var tl2 = gsap.timeline();
arrow2.addEventListener("click",function(){
  
    tl2.to(" .page4-part1 .kuma",{
      opacity:0,
      ease:"power4.out"

    },"a")
    tl2.to(" .page4-part2 .img-div2 img",{
      
      opacity:0,
      ease:"power4.out"

    },"a")

  
  
    
  })




// var flag3 = 0;
// document.querySelector(".arrow11 i").addEventListener("click",()=>{
//     var tl3 = gsap.timeline()
//     if(flag3 === 0)
//     {
//         tl3
//         .to(".img-div2",{
//             clipPath:` polygon(6% 0, 0 0, 0 100%, 68% 100%)`
//         },"var")
//        .to(".img-div2",{
//             clipPath:` polygon(100% 0, 0 0, 0 100%, 100% 100%)`,
//             // delay:.1
//         },"var")
//         flag3 = 1;
//     }    
    
//     else if(flag3 === 1){
//         tl3
//         .to(".img-div1",{
//             clipPath:` polygon(6% 0, 0 0, 0 100%, 68% 100%)`
//         },"var2")
//         .to(".img-div1",{
//             clipPath:` polygon(100% 0, 0 0, 0 100%, 100% 100%)`,
//             // delay:.1
//         },"var2")
//         flag3 = 0;
//     }


        
//     })
 
  


function page2Animation(){
    gsap.to("#page2 img",{
        width:'100%',
        // scale:0,
        scrollTrigger:{
            trigger:' #page2',
            scroller:'body',
            // markers:true,
            start:'0%',
            end:' -100%',
            scrub:true,
            pin:true,
            
            
    
        }
    })
    
}
page2Animation()


// var t1=gsap.timeline({
//     scrollTrigger:{
//       trigger:"#page3",
//       scroller:"body",
//       start:"top",
//       end:"top 30%",
//     //   end:"+=" + (window.innerHeight * 10),
//       scrub:2,
//       pin:true,
//       // markers:true,
//     }
//   });


//   t1.to(" .left .img-container1 img",{
//     left:"8vw",
//     top:"-20vw"
//   },"same")
//   t1.to(" .left .img-container2 img",{
//     top:"-20vw",
//   },"same")
//   t1.to(".left .img-container3 img",{
//     left:"75vw",
//     top:"-20vw",
//   },"same")
//   t1.to(" .left .img-container4 img",{
//     left:"72vw",
//     top:"-20vw",
//   },"same")






function page6Animation(){
    
  gsap.to(" #page6 #page6-part2  img",{
    
    width:"25%",
    height: "65%",

    
  
    // height:"100%",
    // scale:0,
    scrollTrigger:{
        trigger:' #page6',
        scroller:'body',
        // markers:true,
        start:' 0%',
        end:' -100%',
        scrub:true,
        pin:true,
        
        

    }
})

}
page6Animation()


var tl = gsap.timeline()
tl.to("#loader svg",{
  // opacity:0,
  // x:-10,
  duration: 2,
  stagger:0.1,
})
tl.to("#loader",{
  opacity: 0,
})
// tl.from("#page1 h1 span",{
//   y:100,
//   opacity: 0,
//   stagger: 0.2,
//   duration: 0.5,
//   delay: -0.5,

// })

tl.to("#loader",{
display: "none"
})

