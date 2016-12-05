<div dir="ltr" style="text-align: left;" trbidi="on">
<style type="text/css">
#resultDesc {
    margin:0 30px;
    padding:0 0;
    border-bottom:4px solid #31353e;
    display:none;
}
#resultDesc span {
    display:block;
    margin:0 0;
    padding:5px 10px 7px;
    color:#D64D52;
}
#feedContainer {
    display:block;
    clear:both;
    margin:0 30px;
    padding:0 0;
    overflow:hidden;
    position:relative;
    border:1px solid #3d464f;
    border-top:none;
    text-shadow:0 1px 0 rgba(0, 0, 0, .4);
}
#feedContainer:after {
    content:"";
    display:block;
    width:1px;
    height:100%;
    position:absolute;
    top:0;
    bottom:0;
    left:50%;
    background-color:#3d464f;
}
#feedContainer li {
    list-style:none;
    margin:0 0;
    padding:0 0;
    border-top:1px solid #3d464f;
    color:#999;
    width:50%;
    float:left;
    display:inline;
}
#feedContainer li .inner {
    margin:15px 16px;
    height:120px;
    overflow:hidden;
    word-wrap:break-word;
    text-overflow:ellipsis;
}
#feedContainer li a {
    text-decoration:none;
    color:#5687B8;
}
#feedContainer li a:hover {
    text-decoration:none;
    color:#eee;
}
#feedContainer li a.toc-title {
    font-weight:bold;
    font-size:12px;
    margin:0 0;
}
#feedContainer li .news-text {
    margin:10px 0 0
}
#feedContainer li a img {
    margin:0 10px 0 0;
    padding:4px 4px;
    background-color:#222;
    border:1px solid #111;
    -webkit-border-radius:3px;
    -moz-border-radius:3px;
    border-radius:3px;
    -webkit-box-shadow:0 1px 0 #444;
    -moz-box-shadow:0 1px 0 #444;
    box-shadow:0 1px 0 #444;
    float:left;
}
#feedNav {
    margin:10px 30px 0;
    text-align:center;
    font:normal bold 12px/30px Verdana, Arial, Sans-Serif;
}
#feedNav a, #feedNav span {
    background-color:#111;
    padding:0 0;
    color:#999;
    text-decoration:none;
    display:block;
}
#feedNav a:hover, #feedNav a:active {
    background-color:black;
    color:white;
    border:none !important;
}
#feedNav span {
    cursor:wait
}
#table-outer {
    padding:7px 10px;
    margin:30px 30px 0;
}
#table-outer input {
    display:inline-block;
    vertical-align:top;
    margin:0 2px 0 0;
    padding:0 0;
}
#table-outer table {
    border:none
}
#table-outer td {
    padding:2px 2px;
    border:none;
}
#table-outer label {
    font-weight:bold;
    color:#999;
    text-shadow:0 1px 0 rgba(0, 0, 0, .4);
    display:block;
    text-align:right;
    margin:0 10px 0 0;
}
#table-outer select[disabled] {
    opacity:.4
}
#postSearcher {
    display:block;
    margin:0 0;
    padding:0 0;
}
#postSearcher input, #table-outer select {
    width:180px;
    background-color:#111;
    border:none;
    display:block;
    margin:0 0;
    padding:5px 5px;
    font:normal normal 10px Tahoma, Verdana, Arial, Sans-Serif;
    text-transform:uppercase;
    color:#777;
    outline:none;
    -webkit-box-shadow:inset 0 1px 3px black, 0 1px 0 #444;
    -moz-box-shadow:inset 0 1px 3px black, 0 1px 0 #444;
    box-shadow:inset 0 1px 3px black, 0 1px 0 #444;
}
#postSearcher input {
    width:170px;
    padding:5px 5px;
}
#postSearcher input:focus, #table-outer select:focus {
    background-color:#090909
}
@media (max-width:800px) {
    #feedContainer li {
        float:none;
        display:block;
        width:auto;
        height:auto;
    }
    #feedContainer:after {
        display:none
    }
}
</style>
<script type="text/javascript">
//<![CDATA[
var tocConfig = {
 url: "http://www.tasteathomecooking.com/",
 feedNum: 30,
 labelName: false,
 numChars: 0,
 thumbWidth: 80,
 navText: "Hiển thị thêm bài viết ▼",
 frontText: "Chọn nhãn ⇑",
 resetToc: "Reset",
 noImage: "http://2.bp.blogspot.com/-11FkySHGB5Y/TpZ6SSbsF2I/AAAAAAAAA94/zK10UaL7jgo/s1600/images.jpeg",
 loading: "<span>Đang tải...</span>",
 searching: "<span>Từ khóa...</span>",
 noResult: "Không tìm thấy kết quả cho sự lựa chọn của bạn"
};
//]]>
</script>
<br />
<div id="table-outer">
<table border="0">
        <tbody>
<tr>
                <td><label for="orderFeedBy">Sắp xếp theo:</label>
                </td>
                <td><select id="orderFeedBy">
                        <option selected="" value="published">Lần nhập cuối</option>
                        <option value="updated">Xuất bản cập nhật</option>
                    </select>
                </td>
            </tr>
<tr>
                <td><label for="labelSorterSelect">Chọn nhãn muốn xem:</label>
                </td>
                <td><span id="labelSorter"><select disabled="" id="labelSorterSelect"><option selected="">Đang tải...</option></select></span>
                </td>
            </tr>
<tr>
                <td><label for="feed-q-box">Tìm theo từ khóa:</label>
                </td>
                <td><form id="postSearcher">
<input id="feed-q-box" type="text" />
                    </form>
</td>
            </tr>
</tbody>
    </table>
</div>
<header id="resultDesc"></header>
<br />
<ul id="feedContainer"></ul>
<div id="feedNav">
</div>
<script src="https://dl.dropboxusercontent.com/u/91602513/Html/TutorialesBlogger.blogspot.com/Mapa.js" type="text/javascript"></script></div>
