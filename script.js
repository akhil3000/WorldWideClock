setInterval(() => {
    d = new Date();
    htime1 = d.getHours();
    mtime1 = d.getMinutes();
    stime1 = d.getSeconds();

    htime2 = d.getHours()-10;
    mtime2 = d.getMinutes()-30;
    stime2 = d.getSeconds();

    htime3 = d.getHours()-3;
    mtime3 = d.getMinutes()-30;
    stime3 = d.getSeconds();

    hrotation1 = 30 * htime1+ mtime1 / 2;
    mrotation1 = 6 * mtime1;
    srotation1 = 6 * stime1;

    hrotation2 = 30 * htime2+ mtime2 / 2;
    mrotation2 = 6 * mtime2;
    srotation2 = 6 * stime2;

    hrotation3 = 30 * htime3+ mtime3 / 2;
    mrotation3 = 6 * mtime3;
    srotation3 = 6 * stime3;



    hour1.style.transform = `rotate(${hrotation1}deg)`;
    minute1.style.transform = `rotate(${mrotation1}deg)`;
    second1.style.transform = `rotate(${srotation1}deg)`;


    hour2.style.transform = `rotate(${hrotation2}deg)`;
    minute2.style.transform = `rotate(${mrotation2}deg)`;
    second2.style.transform = `rotate(${srotation2}deg)`;


    hour3.style.transform = `rotate(${hrotation3}deg)`;
    minute3.style.transform = `rotate(${mrotation3}deg)`;
    second3.style.transform = `rotate(${srotation3}deg)`;
}, 1000)