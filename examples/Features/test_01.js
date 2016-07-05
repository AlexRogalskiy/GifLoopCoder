function onGLC(glc) {
    glc.loop();
//     glc.size(400, 400);
//     glc.setDuration(5);
//     glc.setFPS(20);
//     glc.setMode('single');
//     glc.setEasing(false);
    var list = glc.renderList,
        width = glc.w,
        height = glc.h,
        color = glc.color;

    // your code goes here:
	
    list.addCircle({
        x: width / 2,
        y: height / 2,
        radius: [20, 150],
        fillStyle: ['yellow', 'blue'],
        stroke: true,
        strokeStyle: ['red', 'cyan'],
        lineWidth: 20,
    });
    
    for(var i=0; i<100; i++) {
        list.addStar({
            x: Math.random() * width,
            y: Math.random() * height,
            outerRadius: 30 + Math.random() * 30,
            innerRadius: 10 + Math.random() * 20,
            fillStyle: color.randomRGB(),
            rotation: [0, 180]
        });
    }


}
