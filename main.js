//Bài 1
function tinhDiem(){
    var diemChuan=parseInt(document.getElementById("bai1_DiemChuan").value);
    var diemKhuvuc=parseInt(document.getElementById("bai1_khuvuc").value);
    var diemDoiTuong=parseInt(document.getElementById("bai1_doituong").value);
    var diem1=parseInt(document.getElementById("bai1_mon1").value);
    var diem2=parseInt(document.getElementById("bai1_mon2").value);
    var diem3=parseInt(document.getElementById("bai1_mon3").value);
    //Lấy về điểm chuẩn, điểm khu vực, điểm đối tượng và điểm các môn dưới dạng số (có thập phân) bằng hàm parseInt

    var diemTong=diem1+diem2+diem3+diemKhuvuc+diemDoiTuong;//Tính điểm tổng
    var output=document.getElementById("bai1_output"); //Khởi tạo giá trị cho output
    console.log(diemTong);
    //Bắt đầu kiểm tra điều kiện
    if (diem1==0 || diem2==0 || diem3==0){ //Bắt đầu kiểm tra điều kiện, nếu 1 trong 3 môn bị liệt thì sẽ đánh loại
        console.log("Truot");
        output.innerHTML="Không trúng tuyển, vì có một hoặc nhiều môn bị 0 điểm";
        return
    }
    if (diemTong>=diemChuan){   //Nếu điểm >= điểm chuẩn thì đánh đạt
        output.innerHTML="Trúng truyển"
    }
    else{
        output.innerHTML="Không trúng truyển, vì tổng điểm thấp hơn điểm chuẩn" // Đánh trượt vì thiếu điểm
    }
}
//Bài 2
function tienDien(){
    var soDien=parseInt(document.getElementById("bai2_input").value);
    var soTien=0;
    if (soDien<=50){
        soTien=soDien*500;
    } else if (soDien<=100){
        soTien=50*500 + (soDien-50)*650;
    } else if(soDien<=200){
        soTien=50*500 + 50*650 + (soDien-100)*850;
    }
    else if(soDien<=350){
        soTien=50*500 + 50*650 + 100*850 + (soDien-200)*1100;
    } else{
        soTien=50*500 + 50*650 + 100*850 + 150*1100 + (soDien-350)*1300;
    }
    document.getElementById("bai2_output").innerHTML=soTien;
}
