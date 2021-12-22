var HocVien = require("../models/hocvien");
module.exports = function(app) {
    app.get("/", function(req, res){
        var A = new HocVien({
            Email: "a",
            HoTen: "b",
            SoDT: "c",
            ThanhToan: false,
            Vi: "d",
            Ngay: Date.now()
        });
        //res.send("Okay");
        //res.json(A);
        res.render("layout");
    })

    app.post("/dang-ky", function(req, res){
        if(!req.body.Email || !req.body.HoTen || !req.body.SoDT){
            res.json({ketqua: 0, maloi: "Thieu tham so kia ban oi"});
        }else{
            var newHocVien = new HocVien({
                Email: req.body.Email,
                HoTen: req.body.HoTen,
                SoDT: req.body.SoDT,
                ThanhToan: false,
                Vi: "",
                Ngay: Date.now()
            });

            newHocVien.save(function(err){
                if(err){
                    res.json({ketqua: 0, maloi:"mongodb save error"});
                }else{
                    res.json({ketqua: 1, maloi:newHocVien});
                }
            })
        }
    });
}