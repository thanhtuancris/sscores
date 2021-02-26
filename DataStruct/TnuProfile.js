module.exports = function (truong,id, code, name, _class, major, academicYear, hedaotao) {
    this.school = truong || "";
    this.id_student = id || "";
    this.code_student = code || "";
    this.full_name = name || "";
    this.class = _class || "";
    this.major = major || "";
    this.course = academicYear || "";
    this.hedaotao = hedaotao || "";
};
