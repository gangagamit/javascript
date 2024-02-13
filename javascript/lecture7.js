{
    let m1 = Math.E;
    console.log(m1);

    let m2 = Math.PI;
    console.log(m2);

    // let m3 = Math.log2(140);
    // console.log2(m3);
    // let m4 = Math.log10(11);
    // console.log10(m4);
}
//Math round
{
    let m3 = Math.round(22.56);
    console.log(m3);//23
    let m4 = Math.round(22.45);
    console.log(m4);//22
    let m5 = Math.round(-20.56);
    console.log(m5);//-21
    let m6 = Math.round(-20.45);
    console.log(m6);//-20
}
//Math ceil
{
    let m7 = Math.ceil(45.85);
    console.log(m7);//46
    let m8 = Math.ceil(45.25);
    console.log(m8);//46
    let m9 = Math.ceil(-45.25);
    console.log(m9);//-45
    let m10 = Math.ceil(-45.85);
    console.log(m10);//-45
}
//Math floor
{
    let m11 = Math.floor(90.82);
    console.log(m11);//90

    let m12 = Math.floor(90.12);
    console.log(m12);//90

    let m13 = Math.floor(-90.12);
    console.log(m13);//-91

    let m14 =Math.floor(-58.59);
    console.log(m14);// -59

}
//trunc
{
    let m15 = Math.trunc(-20.10);
    console.log(m15);// -20

    let m16 = Math.trunc(21.85);
    console.log(m16);

    let m17 = Math.trunc(96.12);
    console.log(m17);

    let m18 = Math.trunc(-25.86);
    console.log(m18);
}
//Math sign
{
    let m19 = Math.sign(0);
    console.log(m19);//0
    let m20 = Math.sign(-0);
    console.log(m20);// -0

    let m21 = Math.sign(-25.58);
    console.log(m21); // -1

    let m22 = Math.sign(59.42);
    console.log(m22); // 1

    let m23 = Math.sign(25);
    console.log(m23); // 1

    let m24 = Math.sign(-25);
    console.log(m24); // -1
}
// Math pow
{
    let x1 = Math.pow(2 , 4);
    console.log(x1);//16
    let x2 = Math.pow(-2 , 4);
    console.log(x2);// 16
    let x3 = Math.pow(2 , -4);
    console.log(x3);//0.0625
    let x4 = Math.pow(-2 , -8);
    console.log(x4);//0.00390
}
//Math sqrt
{
    let y1 = Math.sqrt(169);
    console.log(y1);
    let y2 = Math.sqrt(0);
    console.log(y2);
    let y3 = Math.sqrt(-0);
    console.log(y3);
}
//Math abs
{
    let z1 = Math.abs(25);
    console.log(z1);
    let z2 = Math.abs(-95);
    console.log(z2);
    let z3 = Math.abs(-69.85);
    console.log(z3);
    let z4 = Math.abs(-85.12);
    console.log(z4);
}
// Math min and Math max
{
    let a1  = Math.min(-15  , -155 , 20  , 50  , 230)
    console.log(a1);
    let a2  = Math.max(-15  , -155 , 20  , 50  , 100)
    console.log(a2);
}
// Math random
{
    let a5 = Math.random()*100;
    console.log(a5);//45
    let a4 = Math.random(2)*10;
    console.log(a4);
}
//Math sin
{
    let s1 = Math.sin(30*3.14/180);
    console.log(s1);

    let s2 = Math.sin(180*3.14/180);
    console.log(s2);
}
//Math cos
{
    let s3 = Math.cos(30*3.14/180);
    console.log(s3);

    let s4 = Math.cos(180*3.14/180);
    console.log(s4);
}