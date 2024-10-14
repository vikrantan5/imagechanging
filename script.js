function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
       ./image/male0001.png
       ./image/male0002.png
       ./image/male0003.png
       ./image/male0004.png
       ./image/male0005.png
       ./image/male0006.png
       ./image/male0007.png
       ./image/male0008.png
       ./image/male0009.png
       ./image/male0010.png
       ./image/male0011.png
       ./image/male0012.png
       ./image/male0013.png
       ./image/male0014.png
       ./image/male0015.png
       ./image/male0016.png
       ./image/male0017.png
       ./image/male0018.png
       ./image/male0019.png
       ./image/male0020.png
       ./image/male0021.png
       ./image/male0022.png
       ./image/male0023.png
       ./image/male0024.png
       ./image/male0025.png
       ./image/male0026.png
       ./image/male0027.png
       ./image/male0028.png
       ./image/male0029.png
       ./image/male0030.png
       ./image/male0031.png
       ./image/male0032.png
       ./image/male0033.png
       ./image/male0034.png
       ./image/male0035.png
       ./image/male0036.png
       ./image/male0037.png
       ./image/male0038.png
       ./image/male0039.png
       ./image/male0040.png
       ./image/male0041.png
       ./image/male0042.png
       ./image/male0043.png
       ./image/male0044.png
       ./image/male0045.png
       ./image/male0046.png
       ./image/male0047.png
       ./image/male0048.png
       ./image/male0049.png
       ./image/male0050.png
       ./image/male0051.png
       ./image/male0052.png
       ./image/male0053.png
       ./image/male0054.png
       ./image/male0055.png
       ./image/male0056.png
       ./image/male0057.png
       ./image/male0058.png
       ./image/male0059.png
       ./image/male0060.png
       ./image/male0061.png
       ./image/male0062.png
       ./image/male0063.png
       ./image/male0064.png
       ./image/male0065.png
       ./image/male0066.png
       ./image/male0067.png
       ./image/male0068.png
       ./image/male0069.png
       ./image/male0070.png
       ./image/male0071.png
       ./image/male0072.png
       ./image/male0073.png
       ./image/male0074.png
       ./image/male0075.png
       ./image/male0076.png
       ./image/male0077.png
       ./image/male0078.png
       ./image/male0079.png
       ./image/male0080.png
       ./image1/male0081.png
       ./image1/male0082.png
       ./image1/male0083.png
       ./image1/male0084.png
       ./image1/male0085.png
       ./image1/male0086.png
       ./image1/male0087.png
       ./image1/male0088.png
       ./image1/male0089.png
       ./image1/male0090.png
       ./image1/male0091.png
       ./image1/male0092.png
       ./image1/male0093.png
       ./image1/male0094.png
       ./image1/male0095.png
       ./image1/male0096.png
       ./image1/male0097.png
       ./image1/male0098.png
       ./image1/male0099.png
       ./image1/male0100.png
       ./image1/male0101.png
       ./image1/male0102.png
       ./image1/male0103.png
       ./image1/male0104.png
       ./image1/male0105.png
       ./image1/male0106.png
       ./image1/male0107.png
       ./image1/male0108.png
       ./image1/male0109.png
       ./image1/male0110.png
       ./image1/male0111.png
       ./image1/male0112.png
       ./image1/male0113.png
       ./image1/male0114.png
       ./image1/male0115.png
       ./image1/male0116.png
       ./image1/male0117.png
       ./image1/male0118.png
       ./image1/male0119.png
       ./image1/male0120.png
       ./image1/male0121.png
       ./image1/male0122.png
       ./image1/male0123.png
       ./image1/male0124.png
       ./image1/male0125.png
       ./image1/male0126.png
       ./image1/male0127.png
       ./image1/male0128.png
       ./image1/male0129.png
       ./image1/male0130.png
       ./image1/male0131.png
       ./image1/male0132.png
       ./image1/male0133.png
       ./image1/male0134.png
       ./image1/male0135.png
       ./image1/male0136.png
       ./image1/male0137.png
       ./image1/male0138.png
       ./image1/male0139.png
       ./image1/male0140.png
       ./image1/male0141.png
       ./image1/male0142.png
       ./image1/male0143.png
       ./image1/male0144.png
       ./image1/male0145.png
       ./image1/male0146.png
       ./image1/male0147.png
       ./image1/male0148.png
       ./image1/male0149.png
       ./image1/male0150.png
       ./image1/male0151.png
       ./image1/male0152.png
       ./image2/male0153.png
       ./image2/male0154.png
       ./image2/male0155.png
       ./image2/male0156.png
       ./image2/male0157.png
       ./image2/male0158.png
       ./image2/male0159.png
       ./image2/male0160.png
       ./image2/male0161.png
       ./image2/male0162.png
       ./image2/male0163.png
       ./image2/male0164.png
       ./image2/male0165.png
       ./image2/male0166.png
       ./image2/male0167.png
       ./image2/male0168.png
       ./image2/male0169.png
       ./image2/male0170.png
       ./image2/male0171.png
       ./image2/male0172.png
       ./image2/male0173.png
       ./image2/male0174.png
       ./image2/male0175.png
       ./image2/male0176.png
       ./image2/male0177.png
       ./image2/male0178.png
       ./image2/male0179.png
       ./image2/male0180.png
       ./image2/male0181.png
       ./image2/male0182.png
       ./image2/male0183.png
       ./image2/male0184.png
       ./image2/male0185.png
       ./image2/male0186.png
       ./image2/male0187.png
       ./image2/male0188.png
       ./image2/male0189.png
       ./image2/male0190.png
       ./image2/male0191.png
       ./image2/male0192.png
       ./image2/male0193.png
       ./image2/male0194.png
       ./image2/male0195.png
       ./image2/male0196.png
       ./image2/male0197.png
       ./image2/male0198.png
       ./image2/male0199.png
       ./image2/male0200.png
       ./image2/male0201.png
       ./image2/male0202.png
       ./image2/male0203.png
       ./image2/male0204.png
       ./image2/male0205.png
       ./image2/male0206.png
       ./image2/male0207.png
       ./image2/male0208.png
       ./image2/male0209.png
       ./image2/male0210.png
       ./image2/male0211.png
       ./image2/male0212.png
       ./image2/male0213.png
       ./image2/male0214.png
       ./image2/male0215.png
       ./image2/male0216.png
       ./image2/male0217.png
       ./image2/male0218.png
       ./image2/male0219.png
       ./image2/male0220.png
       ./image2/male0221.png
       ./image2/male0222.png
       ./image2/male0223.png
       ./image2/male0224.png
       ./image2/male0225.png
       ./image2/male0226.png
       ./image2/male0227.png
       ./image2/male0228.png
       ./image2/male0229.png
       ./image2/male0230.png
       ./image2/male0231.png
       ./image2/male0232.png
       ./image2/male0233.png
       ./image2/male0234.png
       ./image2/male0235.png
       ./image2/male0236.png
       ./image2/male0237.png
       ./image2/male0238.png
       ./image2/male0239.png
       ./image2/male0240.png
       ./image2/male0241.png
       ./image2/male0242.png
       ./image/male0243.png
       ./image3/male0244.png
       ./image3/male0245.png
       ./image3/male0246.png
       ./image3/male0247.png
       ./image3/male0248.png
       ./image3/male0249.png
       ./image3/male0250.png
       ./image3/male0251.png
       ./image3/male0252.png
       ./image3/male0253.png
       ./image3/male0254.png
       ./image3/male0255.png
       ./image3/male0256.png
       ./image3/male0257.png
       ./image3/male0258.png
       ./image3/male0259.png
       ./image3/male0260.png
       ./image3/male0261.png
       ./image3/male0262.png
       ./image3/male0263.png
       ./image3/male0264.png
       ./image3/male0265.png
       ./image3/male0266.png
       ./image3/male0267.png
       ./image3/male0268.png
       ./image3/male0269.png
       ./image3/male0270.png
       ./image3/male0271.png
       ./image3/male0272.png
       ./image3/male0273.png
       ./image3/male0274.png
       ./image3/male0275.png
       ./image3/male0276.png
       ./image3/male0277.png
       ./image3/male0278.png
       ./image3/male0279.png
       ./image3/male0280.png
       ./image3/male0281.png
       ./image3/male0282.png
       ./image3/male0283.png
       ./image3/male0284.png
       ./image3/male0285.png
       ./image3/male0286.png
       ./image3/male0287.png
       ./image3/male0288.png
       ./image3/male0289.png
       ./image3/male0290.png
       ./image3/male0291.png
       ./image3/male0292.png
       ./image3/male0293.png
       ./image3/male0294.png
       ./image3/male0295.png
       ./image3/male0296.png
       ./image3/male0297.png
       ./image3/male0298.png
       ./image3/male0299.png
       ./image3/male0300.png
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 300;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })