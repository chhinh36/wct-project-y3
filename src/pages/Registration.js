import React from 'react';

const Registration = () => {
  return (
        <div className="registration-wrapper kh-font">
          <div className="title1">
                ពាក្យចុះឈ្មោះសុំចូលរៀន
            </div>
            <div className="title2">
                ជីវប្រវត្តិសង្ខែប
            </div>

            <form>

                <div className="grid-container">
                    <div className="item1">
                        <label for="nameKH">នាមត្រកូលនិងនាមខ្លួន</label>
                        <input type="text" className="styleBox" name="firstname" />
                    </div>
                    <div className="item2">
                        <label for="nameENG">ជាអក្សរឡាតាំង</label>
                        <input type="text" className="styleBox" name="firstname" />
                    </div>
                    <div className="item3">
                        <label for="nameKH">ភេទ</label>
                        <select className="styleBox">
                        <option className="nameKH" value="1">ប្រុស</option>
                        <option className="nameKH" value="2">ស្រី</option>

                        </select>
                    </div>

                    <div className="item4">
                        <label for="nameKH">សញ្ជាតិ</label>
                        <input type="text" className="styleBox" name="firstname" />
                    </div>
                    <div className="item5">
                        <label for="nameKH">ជនជាតិ</label>
                        <input type="text" className="styleBox" name="firstname" />
                    </div>
                    <div className="item6">
                        <label for="nameKH">ថ្ងៃខែឆ្នាំកំណើត</label>
                        <input type="date" className="styleBox" name="firstname" />
                    </div>
                    <div className="item7">
                        <label for="nameKH">ទីកន្លែងកំណើត</label>
                        <input type="text" className="styleBox" name="firstname" />
                    </div>
                    <div className="item8">
                        <input type="radio" className="relationship" name="firstname" />
                        <label for="relationship">មានគ្រួសារ</label>
                    </div>
                    <div className="item9">
                        <input type="radio" className="relationship" name="firstname" />
                        <label for="relationship">នៅលីវ</label>
                    </div>
                    <div className="item10">
                        <label for="nameKH">មកពីវិទ្យាល័យ</label>
                        <input type="text" className="styleBox" name="firstname" />
                    </div>
                    <div className="item11">
                        <label for="nameKH">ជាប់សញ្ញាបត្រ</label>
                        <input type="text" className="styleBox" name="firstname" />
                    </div>
                    <div className="item12">
                        <label for="nameKH">សម័យប្រឡងសញ្ញាបត្រទុតិយភូមិ</label>
                        <input type="text" className="styleBox" name="firstname" />
                    </div>
                    <div className="item13">
                        <label for="nameKH">លេខសញ្ញាបត្រ</label>
                        <input type="text" className="styleBox" name="firstname" />
                    </div>
                    <div className="item14">
                        <label className="family">ស្ថានភាពគ្រួសារ</label>
                    </div>
                    <div className="item15">
                        <label for="nameKH">ឪពុកឈ្មោះ</label>
                        <input type="text" className="styleBox" name="firstname" />
                    </div>
                    <div className="item16">
                        <label for="nameKH">ថ្ងៃខែឆ្នាំកំណើត</label>
                        <input type="date" className="styleBox" name="firstname" />
                    </div>
                    <div className="item17">
                        <label for="nameKH">មុខរបរនិងទីកន្លែងធ្វើការ</label>
                        <input type="text" className="styleBox" name="firstname" />
                    </div>
                    <div className="item18">
                        <input type="radio" className="live_dead" name="live_dead" />
                        <label for="live_dead">នៅរស់</label>
                    </div>
                    <div className="item19">
                        <input type="radio" className="live_dead" name="live_dead" />
                        <label for="live_dead">ស្លាប់</label>
                    </div>
                    <div className="item20">
                        <label for="nameKH">ម្ដាយឈ្មោះ</label>
                        <input type="text" className="styleBox" name="firstname" />
                    </div>
                    <div className="item21">
                        <label for="nameKH">ថ្ងៃខែឆ្នាំកំណើត</label>
                        <input type="date" className="styleBox" name="firstname" />
                    </div>
                    <div className="item22">
                        <label for="nameKH">មុខរបរនិងទីកន្លែងធ្វើការ</label>
                        <input type="text" className="styleBox" name="firstname" />
                    </div>
                    <div className="item23">
                        <input type="radio" className="Mlive_dead" name="Mlive_dead" />
                        <label for="Mlive_dead">នៅរស់</label>

                    </div>
                    <div className="item24">
                        <input type="radio" className="Mlive_dead" name="Mlive_dead" />
                        <label for="Mlive_dead">ស្លាប់</label>

                    </div>
                    <div className="item25">
                        <label className="family">អំពីបងប្អូន</label>
                    </div>
                    <div className="item26">
                        <label for="nameKH">មានបងប្អូនបង្កើតសរុប</label>
                        <input type="text" className="styleBox" name="firstname" />
                    </div>
                    <div className="item27">
                        <label for="nameKH">ប្រុស</label>
                        <input type="text" className="styleBox" name="firstname" />
                    </div>
                    <div className="item28">
                        <label for="nameKH">ស្រី</label>
                        <input type="text" className="styleBox" name="firstname" />
                    </div>
                    <div className="item29">
                        <label for="nameKH">សមីខ្លួនជាកូនទី</label>
                        <input type="text" className="styleBox" name="firstname" />
                    </div>
                    <div className="item30">
                        <label className="family">ករណីបន្ទាន់</label>
                    </div>

                    <div className="item31">
                        <label className="family">ឈ្មោះ</label>
                        <input type="text" className="styleBox" name="" />
                    </div>
                    <div className="item32">
                        <label className="family">ត្រូវជា</label>
                        <input type="text" className="styleBox" name="" />
                    </div>

                    <div className="item33">
                        <label className="family">លេខទូរស័ព្ទ</label>
                        <input type="text" className="styleBox" name="firstname" />
                    </div>

                    <div className="item34">
                        <label className="family">កន្លែងធ្វើការ</label>
                        <input type="text" className="styleBox" name="" />
                    </div>

                    <div className="item35">
                        <label className="family">ស្ថានភាពនៃការសិក្សា</label>
                    </div>


                    <div className="item36">
                        <label className="family">បឋមសិក្សា(បញ្ជាក់ឈ្មោះ)</label>
                        <input type="text" className="styleBox" name="" />
                    </div>

                    <div className="item37">
                        <label className="family">ខេត្ត</label>
                        <input type="text" className="styleBox" name="" />
                    </div>
                    <div className="item38">
                        <label className="family">ឆ្នាំណា</label>
                        <input type="text" className="styleBox" name="" />
                    </div>

                    <div className="item39">
                        <label className="family">អនុវិទ្យាល័យ(បញ្ជាក់ឈ្មោះ)</label>
                        <input type="text" className="styleBox" name="" />
                    </div>

                    <div className="item40">
                        <label className="family">ខេត្ត</label>
                        <input type="text" className="styleBox" name="" />
                    </div>
                    <div className="item41">
                        <label className="family">ឆ្នាំណា</label>
                        <input type="text" className="styleBox" name="" />
                    </div>
                    <div className="item42">
                        <label className="family">វិទ្យាល័យ(បញ្ជាក់ឈ្មោះ)</label>
                        <input type="text" className="styleBox" name="" />
                    </div>
                    <div className="item43">
                        <label className="family">ខេត្ត</label>
                        <input type="text" className="styleBox" name="" />
                    </div>
                    <div className="item44">
                        <label className="family">ឆ្នាំណា</label>
                        <input type="text" className="styleBox" name="" />
                    </div>
                    <div className="item45">
                        <label className="family">ផ្ទុកឯកសាររូបថត</label>
                    </div>
                    <div className="item46">
                        <input className="form-control form-control-lg" id="formFileLg" type="file" />
                    </div>

                    <div className="item47">
                        <label className="family">កិច្ចសន្យាទទួលខុសត្រូវេបស់សមីខ្លួនលើប្រវត្តិរូបនេះ</label>
                    </div>

                    <div className="item48">
                        <label className="family">ខ្ញុំបាទឬនាងខ្ញុំ សូមអះអាងថាសេចក្ដីរៀបរាប់ជីវប្រវត្តិខាងលើនេះពិតជាត្រឹមត្រូវ
                        ឥក្លែងបន្លំឡើយ បើមានចំណុចណាមួយ ដែលប្រាសចាកពីកាពិត​ ខ្ញុំបាទឬនាងខ្ញុំ សូមទទួលទោសតាមផ្លូវច្បាប់ជាធរមាន ។</label>
                    </div>

                    {/* <div className="item49">
                        <button type="button" className="btn btn-success kh-font">ចុះឈ្មោះ</button>
                    </div> */}
                </div>
                <div className="btn-wrapper">
                    <button type="button" className=" btn-success kh-font">ចុះឈ្មោះ</button>
                </div>
            </form>
      </div>
    );
};

export default Registration;
