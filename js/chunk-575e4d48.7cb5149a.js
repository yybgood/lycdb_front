(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-575e4d48"],{"5ab2":function(e,t,a){},6393:function(e,t,a){"use strict";a("5ab2")},"83c4":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("68dd");const l="genome";class s{static list(){const e={method:"GET",url:l+"/list"};return n["a"].request(e)}static genomeDetail(e){const t={method:"GET",url:`${l}/introduction?genomeVersionID=${e}`};return n["a"].request(t)}static getGenomeChrList(e){const t={method:"GET",url:l+"/genomeChrList",params:{genomeVersionID:e}};return n["a"].request(t)}}},ea63:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"gene"},[t("div",{staticClass:"batch shadow"},[t("span",{staticClass:"title"},[e._v(" SV Search ")]),t("div",{staticClass:"content-wrap"},[t("div",{staticClass:"search-wrap"},[t("span",[e._v("基因组： ")]),t("el-select",{attrs:{filterable:"",size:"medium",placeholder:"请选择"},model:{value:e.genome,callback:function(t){e.genome=t},expression:"genome"}},e._l(e.genomeList,(function(e){return t("el-option",{key:e.gnome_version_id,attrs:{label:e.gnome_species_name,value:e.gnome_version_id}})})),1),t("span",[e._v("染色体： ")]),t("el-select",{attrs:{filterable:"",clearable:"",size:"medium",placeholder:"请选择"},on:{focus:function(t){e.chrList=e.chrListTemp}},model:{value:e.chr,callback:function(t){e.chr=t},expression:"chr"}},e._l(e.chrList,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),t("el-input",{attrs:{placeholder:"请输入起始位置",size:"medium",onkeyup:"value=value.replace(/[^\\d]/g,'')"},model:{value:e.start,callback:function(t){e.start=e._n(t)},expression:"start"}}),t("span",{staticStyle:{padding:"0 10px"}},[e._v("至")]),t("el-input",{attrs:{placeholder:"请输入终止位置",size:"medium",onkeyup:"value=value.replace(/[^\\d]/g,'')"},model:{value:e.end,callback:function(t){e.end=e._n(t)},expression:"end"}}),t("el-button",{attrs:{type:"primary",size:"medium",icon:"el-icon-search"},on:{click:e.getPageList}},[e._v("搜索")])],1),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.tableLoading,expression:"tableLoading"}],attrs:{data:e.tableData,height:"600px"}},[t("el-table-column",{attrs:{prop:"gnome_sv_id",label:"GenomeSvId"}}),t("el-table-column",{attrs:{prop:"genome_chr_id",label:"GenomeChrId"}}),t("el-table-column",{attrs:{prop:"gnome_version_id",label:"GenomeVersionId"}}),t("el-table-column",{attrs:{prop:"chr_pos",label:"ChrPos"}}),t("el-table-column",{attrs:{prop:"sv_gene_length",label:"SvGeneLength"}}),t("el-table-column",{attrs:{prop:"gene_id",label:"GeneId"}}),t("el-table-column",{attrs:{prop:"src_sv",label:"SrcSv"}}),t("el-table-column",{attrs:{prop:"alt_sv",label:"AltSv"}}),t("el-table-column",{attrs:{prop:"sv_type",label:"SvType"}})],1),t("el-pagination",{attrs:{background:"","current-page":e.pageInfo.pageNum,"page-sizes":[10],"page-size":e.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.pageInfo.total},on:{"current-change":e.handleCurrentChange,"prev-click":e.handleCurrentChange,"next-click":e.handleCurrentChange}})],1)])])},l=[],s=a("83c4"),o=a("68dd");const r="variation";class i{static svSearch(e){const t={method:"GET",url:r+"/svSearch",data:e};return o["a"].request(t)}static svAllList(e){const t={method:"GET",url:r+"/svAllList",params:e};return o["a"].request(t)}}var c={name:"variation",components:{},data(){return{tableData:[],tableLoading:!1,pageInfo:{total:0,pageSize:10,pageNum:1},genome:2022021721004,genomeList:[],chr:"",chrList:[],chrListTemp:[],start:"",end:""}},watch:{genome:{handler(e){this.getGenomeChrList(e)},immediate:!0}},mounted(){this.getGenome(),this.getPageList()},methods:{getGenome(){s["a"].list().then(e=>{this.genomeList=e.data.data})},getGenomeChrList(e){s["a"].getGenomeChrList(e).then(e=>{this.chrListTemp=e.data.data.map(e=>({label:e,value:e}))})},getPageList(){this.tableLoading=!0;const e={page:this.pageInfo.pageNum};i.svAllList(e).then(e=>{const{data:t}=e.data;this.tableData=t.GenomeSvInfos,this.pageInfo.total=t.Total,this.tableLoading=!1})},handleCurrentChange(e){this.pageInfo.pageNum=e,this.getPageList()}}},u=c,p=(a("6393"),a("2877")),m=Object(p["a"])(u,n,l,!1,null,"0be55c38",null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-575e4d48.7cb5149a.js.map