const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function diChoMuaNguyenLieu() {
  console.log('Đi chợ mua nguyên liệu...');
  await delay(3000);
  console.log('Đã đi chợ xong, đang về nhà...');
  await delay(3000);
  console.log('Đã về nhà');
}

async function tronBot() {
    console.log('Đang trộn bột...');
    await delay(5000);
    console.log('Đã trộn bột xong');
}

async function danhBoVaTrung() {
    console.log('Đang đánh bơ và trứng...');
    await delay(5000);
    console.log('Đã đánh bơ và trứng xong');
}

async function tronBotBanh() {
    console.log('Đang trộn bột bánh...');
    await delay(5000);
    console.log('Đã trộn bột bánh xong');
}

async function doBotVaoKhuon() {
    console.log('Đang đổ bột vào khuôn...');
    await delay(2000);
    console.log('Đã đổ bột vào khuôn');
}

async function lamNongLoNuong() {
    console.log('Đang làm nóng lò nướng...');
    await delay(18000);
    console.log('Đã làm nóng lò nướng');
}

async function nuongBanh() {
    console.log('Đang nướng bánh...');
    await delay(6000);
    console.log('Đã nướng bánh xong');
}

async function layBanhRaKhoiLo() {
    console.log('Đang lấy bánh ra khỏi lò...');
    await delay(1000);
    console.log('Đã lấy bánh ra khỏi lò');
}

async function deBanhNguoi() {
    console.log('Để bánh nguội...');
    await delay(8000);
    console.log('Bánh đã nguội');
}

async function danhKemTuoi() {
    console.log('Đang đánh kem tươi...');
    await delay(3000);
    console.log('Đã đánh kem tươi xong');
}

async function catBanhThanhCacLop() {
    console.log('Đang cắt bánh thành các lớp...');
    await delay(2000);
    console.log('Đã cắt bánh thành các lớp');
}

async function phetKemGiuaCacLopBanh() {
    console.log('Đang phết kem giữa các lớp bánh...');
    await delay(2000);
    console.log('Đã phết kem giữa các lớp bánh');
}

async function phuKemLenToanBoBanh() {
    console.log('Đang phủ kem lên toàn bộ bánh...');
    await delay(2000);
    console.log('Đã phủ kem lên toàn bộ bánh');
}

async function trangTriBanhVoiTraiCayHoacSocola() {
    console.log('Đang trang trí bánh với trái cây hoặc sô cô la...');
    await delay(3000);
    console.log('Đã trang trí bánh xong');
}

async function deBanhVaoTuLanh() {
    console.log('Để bánh vào tủ lạnh...');
    await delay(1000);
    console.log('Đã để bánh vào tủ lạnh');
}

async function choBanhLanh() {
    console.log('Chờ bánh lạnh...');
    await delay(5000);
    console.log('Bánh đã lạnh');
}


async function execute() {
    await diChoMuaNguyenLieu();

    await Promise.all([lamNongLoNuong(), await tronBotBanh(), await danhBoVaTrung(), await doBotVaoKhuon(),]);

    await nuongBanh();
    await layBanhRaKhoiLo();
    
    await Promise.all([deBanhNguoi(), await danhKemTuoi()]);

    await catBanhThanhCacLop();
    await phetKemGiuaCacLopBanh();
    await phuKemLenToanBoBanh();
    await trangTriBanhVoiTraiCayHoacSocola();
    await deBanhVaoTuLanh();
    await choBanhLanh();
    console.log('Lấy bánh ra và thưởng thức');
}
 execute().then()