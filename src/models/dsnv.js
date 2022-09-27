//Tạo đối tượng Danh Sách Nhân Viên
function DSNV() {
  this.arr = [];

  //Thêm nhân viên mới
  this.themNV = function (nv) {
    this.arr.push(nv);
  };

  //Tìm vị trí
  this.timViTriNV = function (taiKhoan) {
    var index = -1;
    this.arr.forEach(function (nv, i) {
      if (nv.taiKhoan === taiKhoan) {
        index = i;
      }
    });
    return index;
  }

  //Xóa nhân viên 
  this.xoaNV = function (taiKhoan) {
    var index = this.timViTriNV(taiKhoan);
    //Xóa phần tử trong mảng
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  };

//Lấy thông tin Nhân Viên
  this.layThongTinChiTietNV = function(taiKhoan){
    var index = this.timViTriNV(taiKhoan);
    if (index !== -1){
      return this.arr[index];
    }
    return null;
  };

  //Cập nhật lại thông tin nhân viên
  this.capNhatNhanVien = function(nv){
    //Check vị trí
    var index = this.timViTriNV(nv.taiKhoan);
    if (index !== -1){
      this.arr[index] = nv;
    }
  };

  //Tìm kiếm Nhân Viên - (Xếp Loại)
  this.timKiemNV = function(keyword){
    var mangTimKiem = [];
    this.arr.forEach(function(nv){
      //Chuyển string thành chữ thường
      var xepLoai = nv.xepLoai.toLowerCase();
      var searchName = keyword.toLowerCase();
      if(xepLoai.indexOf(searchName) !== -1){
        mangTimKiem.push(nv);
      }
    });
    return mangTimKiem;
  }


}