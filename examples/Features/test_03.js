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

    
    list.addCircle({
        x: [50, 350],
        y: height * 0.25,
        radius: 20,
        phase: 0.333
    });
    
    list.addCircle({
        x: [50, 350],
        y: height * 0.5,
        radius: 20,
        speedMult: 2
    });
        
    list.addCircle({
        x: [50, 350],
        y: height * 0.7,
        radius: 20,
       // speedMult: 3,
        phase: 0.666
    });
}
