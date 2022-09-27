
function Validation() {

  //Kiểm tra rỗng
  this.kiemTraRong = function (value, divError, mess) {
    if (value.trim() === "") {
      //show thông báo lỗi
      getEle(divError).innerHTML = mess;
      getEle(divError).style.display = "block";
      return false;
    } else {
      getEle(divError).innerHTML = "";
      getEle(divError).style.display = "none";
      return true;
    }
  };

  //Kiểm tra ô select chức vụ
  this.kiemTraChucVu = function (chucvu, divError, mess) {
    if (getEle(chucvu).selectedIndex !== 0) {
      getEle(divError).innerHTML = "";
      getEle(divError).style.display = "none";
      return true;
    }
    getEle(divError).innerHTML = mess;
    getEle(divError).style.display = "block";
    return false;
  };

  //Kiểm tra độ dài kí tự
  this.kiemTraDoDaiKiTu = function (value, divError, mess, min, max) {
    if (value.length >= min && value.length <= max) {
      getEle(divError).innerHTML = "";
      getEle(divError).style.display = "none";
      return true;
    }
    getEle(divError).innerHTML = mess;
    getEle(divError).style.display = "block";
    return false;
  };

  //Kiểm tra chuỗi kí tự
  this.kiemTraChuoiHoTen = function (value, divError, mess) {
    var kitu = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(kitu)) {
      getEle(divError).innerHTML = "";
      getEle(divError).style.display = "none";
      return true;
    }
    getEle(divError).innerHTML = mess;
    getEle(divError).style.display = "block";
    return false;
  };

  //Kiểm tra Email
  this.kiemTraEmail = function (value, divError, mess) {
    var kitu = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(kitu)) {
      getEle(divError).innerHTML = "";
      getEle(divError).style.display = "none";
      return true;
    }
    getEle(divError).innerHTML = mess;
    getEle(divError).style.display = "block";
    return false;
  };

  //Kiểm tra Mật Khẩu
  this.kiemTraMatKhau = function (value, divError, mess) {
    var kitu = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
    if (value.match(kitu)) {
      getEle(divError).innerHTML = "";
      getEle(divError).style.display = "none";
      return true;
    }
    getEle(divError).innerHTML = mess;
    getEle(divError).style.display = "block";
    return false;
  };

  //Kiểm Tra Lương Cơ Bản
  this.kiemTraLuongCoBan = function (value, divError, mess) {
    if (value >= 1000000 && value <= 20000000) {
      getEle(divError).innerHTML = "";
      getEle(divError).style.display = "none";
      return true;
    }
    getEle(divError).innerHTML = mess;
    getEle(divError).style.display = "block";
    return false;
  };

  //Kiểm tra nhập số
  this.kiemTraSoGioLam = function (value, divError, mess) {
    var kitu =/^[0-9]+$/;
    if (value.match(kitu) && value >= 80 && value <= 200) {
      getEle(divError).innerHTML = "";
      getEle(divError).style.display = "none";
      return true;
    }
    getEle(divError).innerHTML = mess;
    getEle(divError).style.display = "block";
    return false;
  };

  //Kiểm tra định dạng Ngày Vào Làm
  this.kiemTraNgayLam = function (value, divError, mess) {
    var kitu =/^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
    if (value.match(kitu)) {
      getEle(divError).innerHTML = "";
      getEle(divError).style.display = "none";
      return true;
    }
    getEle(divError).innerHTML = mess;
    getEle(divError).style.display = "block";
    return false;
  };

}