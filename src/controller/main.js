//Tạo mới DSNV
var dsnv = new DSNV();
var validation = new Validation();

getLocalStorage();

//Tạo Function DOM ID
function getEle(id) {
  return document.getElementById(id);
}


//Lấy thông tin từ người dùng nhập
function layThongTinNV() {
  var taiKhoan = getEle("tknv").value;
  var hoTen = getEle("name").value;
  var email = getEle("email").value;
  var matKhau = getEle("password").value;
  var ngayLam = getEle("datepicker").value;
  var luongCoBan = getEle("luongCB").value;
  var chucVu = getEle("chucvu").value;
  var gioLam = getEle("gioLam").value;

  //Flag (boolean)
  var isValid = true;

  //Check Validation
    isValid &= validation.kiemTraRong(taiKhoan,"tbTKNV","(*) Vui lòng nhập số tài khoản") && validation.kiemTraDoDaiKiTu(taiKhoan,"tbTKNV","(*) Vui lòng từ 4 đến 6 ký tự", 4, 6);
    isValid &= validation.kiemTraRong(hoTen,"tbTen","(*) Vui lòng nhập họ và tên") && validation.kiemTraChuoiHoTen(hoTen,"tbTen","(*) Vui lòng nhập họ và tên dạng chữ cái");
    isValid &= validation.kiemTraRong(email,"tbEmail","(*) Vui lòng nhập Email") && validation.kiemTraEmail(email,"tbEmail","(*) Vui lòng nhập đúng định dạng Email");
    isValid &= validation.kiemTraRong(matKhau,"tbMatKhau","(*) Vui lòng nhập mật khẩu") && validation.kiemTraDoDaiKiTu(matKhau,"tbMatKhau","(*) Vui lòng từ 6 đến 10 ký tự", 6, 10) && validation.kiemTraMatKhau(matKhau,"tbMatKhau","(*) Mật khẩu chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt");
    isValid &= validation.kiemTraRong(ngayLam,"tbNgay","(*) Vui lòng chọn ngày vào làm") && validation.kiemTraNgayLam(ngayLam,"tbNgay","(*) Định dạng Tháng/Ngày/Năm");
    isValid &= validation.kiemTraRong(luongCoBan,"tbLuongCB","(*) Vui lòng nhập lương cơ bản") && validation.kiemTraLuongCoBan(luongCoBan,"tbLuongCB","(*) Lương cơ bản từ 1.000.000 đến 20.000.000");
    isValid &= validation.kiemTraRong(gioLam,"tbGiolam","(*) Vui lòng nhập số giờ làm") && validation.kiemTraSoGioLam(gioLam,"tbGiolam","(*) Số giờ làm từ 80 đến 200 giờ và định dạng số");
    // Check Validation (Chức Vụ)
    isValid &= validation.kiemTraChucVu("chucvu","tbChucVu","(*) Vui lòng lựa chọn chức vụ");
    //Check độ dài số Tài Khoản


  if (isValid) {
    // Tạo đối tượng nhân viên mới
    var nv = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam);

    nv.tinhTongLuong();

    nv.xepLoaiNV();

    return nv;
  }
  return null;
};

// Thêm nhân viên mới
getEle("btnThemNV").addEventListener("click", function () {
  var nv = layThongTinNV();

  if (nv) {
    dsnv.themNV(nv);

    //Render Table
    renderTable(dsnv.arr);

    //Lưu Data
    setLocalStorage();

  };
});


//In dữ liệu ra bảng
function renderTable(data) {
  var content = "";

  data.forEach(function (nv) {
    content += `
    <tr>
      <td>${nv.taiKhoan}</td>
      <td>${nv.hoTen}</td>
      <td>${nv.email}</td>
      <td>${nv.ngayLam}</td>
      <td>${nv.chucVu}</td>
      <td>${nv.tongLuong}</td>
      <td>${nv.xepLoai}</td>
      <td>
          <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editNV('${nv.taiKhoan}')">Edit</button>
          <button class="btn btn-danger" onclick="deleteNV('${nv.taiKhoan}')">Xóa</button>
      </td>
    </tr>
    `;
  });
  getEle("tableDanhSach").innerHTML = content;
}

//Sửa thông tin nhân viên
function editNV(taiKhoan) {
  var nv = dsnv.layThongTinChiTietNV(taiKhoan);
  if (nv) {

    //DOM tới thẻ INPUT, show thông tin
    getEle("tknv").value = nv.taiKhoan;
    //Disabled thẻ input #taiKhoan
    getEle("tknv").disabled = true;

    getEle("name").value = nv.hoTen;
    getEle("email").value = nv.email;
    getEle("password").value = nv.matKhau;
    getEle("datepicker").value = nv.ngayLam;
    getEle("luongCB").value = nv.luongCoBan;
    getEle("chucvu").value = nv.chucVu;
    getEle("gioLam").value = nv.gioLam;

    //Hiển thị nút Cập Nhật
    getEle("btnCapNhat").style.display = "inline-block";
    //Ẩn nút Thêm Nhân Viên
    getEle("btnThemNV").style.display = "none";
  };

}

//Cập nhật thông tin nhân viên 
getEle("btnCapNhat").addEventListener("click", function () {
  var nv = layThongTinNV();
  dsnv.capNhatNhanVien(nv);
  renderTable(dsnv.arr);
  setLocalStorage();

});
// // Nút đóng trang
// getEle("btnDong").addEventListener("click", function(){
//   getEle("tknv").value = "";
//   getEle("name").value= "";
//   getEle("email").value = "";
//   getEle("password").value = "";
//   getEle("datepicker").value = "";
//   getEle("luongCB").value = "";
//   getEle("chucvu").value = "";
//   getEle("gioLam").value = "";
// });

//Xóa Nhân Viên
function deleteNV(taiKhoan) {

  dsnv.xoaNV(taiKhoan);

  renderTable(dsnv.arr);

  setLocalStorage();
}

//Tìm kiếm nhân viên
getEle("searchName").addEventListener("keyup", function () {
  //Lấy Keyword
  var keyword = getEle("searchName").value;
  var mangTimKiem = dsnv.timKiemNV(keyword);
  renderTable(mangTimKiem);
});

//Lưu trữ dữ liệu Local
function setLocalStorage() {
  //Chuyển JSON => String
  var dataString = JSON.stringify(dsnv.arr);
  // Lưu xuống LocalStorage
  localStorage.setItem("DSNV", dataString);
}

//Lấy data từ LocalStorage
function getLocalStorage() {
  if (localStorage.getItem("DSNV")) {
    var dataString = localStorage.getItem("DSNV");
    //Chuyển String => JSON
    dsnv.arr = JSON.parse(dataString);
    renderTable(dsnv.arr);
  }
}



