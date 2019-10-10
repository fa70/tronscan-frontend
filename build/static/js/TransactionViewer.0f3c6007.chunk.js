(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1782:function(e,a,t){"use strict";t.d(a,"a",function(){return l});var n=t(3),c=t(0),r=t.n(c);function l(e){var a=e.label,t=e.children;return r.a.createElement("tr",null,r.a.createElement("th",null,Object(n.c)(a)),r.a.createElement("td",null,t))}},1978:function(e,a,t){"use strict";t.d(a,"a",function(){return _});var n=t(0),c=t.n(n),r=t(6),l=t(19),s=t(1782),m=t(155),o=t(3),d=t(12),i=t(54),E=t(30),u=t(201),b=function(e){var a=e.contract_address,t=e.method,n=Object(o.c)("trigger_smart_contract"),l=Object(o.c)("normal_address_trigger_smart_contract");return r.s&&a===r.z.SIDECHAIN&&t.includes(r.B.WITHDRAW)&&(n=Object(o.c)("sign_trigger_smart_contract"),l=Object(o.c)("sign_normal_trigger_smart_contract")),c.a.createElement("h5",null,c.a.createElement("i",{className:"fa fa-exchange-alt"}),n,c.a.createElement("small",null,l))};function _(e){var a,t,_=e.contract,f=["MAINTENANCE_TIME_INTERVAL","ACCOUNT_UPGRADE_COST","CREATE_ACCOUNT_FEE","TRANSACTION_FEE","ASSET_ISSUE_FEE","WITNESS_PAY_PER_BLOCK","WITNESS_STANDBY_ALLOWANCE","CREATE_NEW_ACCOUNT_FEE_IN_SYSTEM_CONTRACT","CREATE_NEW_ACCOUNT_BANDWIDTH_RATE","ALLOW_CREATION_OF_CONTRACTS","REMOVE_THE_POWER_OF_THE_GR","ENERGY_FEE","EXCHANGE_CREATE_FEE","MAX_CPU_TIME_OF_ONE_TX","ALLOW_UPDATE_ACCOUNT_NAME","ALLOW_SAME_TOKEN_NAME"];if(_.parameters)for(var N in _.parameters)for(var v in f)N===v&&(a=f[N],t=_.parameters[N]);var O,h=[];if(h.push(_),h&&(O=Object(i.a)(h,"asset_name","amount")[0]),_.contractType)switch(_.contractType.toUpperCase()){case"TRANSFERCONTRACT":return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"card-body table-title"},c.a.createElement("h5",null,c.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("transfer_contract"),c.a.createElement("small",null,Object(o.c)("TRX_transfer_between_addresses")))),c.a.createElement("div",{className:"table-responsive"},c.a.createElement("table",{className:"table"},c.a.createElement("tbody",null,c.a.createElement(s.a,{label:"from"},c.a.createElement(l.a,{address:_.owner_address})),c.a.createElement(s.a,{label:"to"},c.a.createElement(l.a,{address:_.to_address})),c.a.createElement(s.a,{label:"amount"},c.a.createElement(m.b,{amount:_.amount/r.w})),_.contract_note&&c.a.createElement(s.a,{label:"note"},decodeURIComponent(_.contract_note))))));case"TRANSFERASSETCONTRACT":return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"card-body table-title"},c.a.createElement("h5",null,c.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("transfer_asset_contract"),c.a.createElement("small",null,Object(o.c)("token_transfer_between_addresses")))),c.a.createElement("div",{className:"table-responsive"},c.a.createElement("table",{className:"table"},c.a.createElement("tbody",null,c.a.createElement(s.a,{label:"from"},c.a.createElement(l.a,{address:_.owner_address})),c.a.createElement(s.a,{label:"to"},c.a.createElement(l.a,{address:_.to_address})),c.a.createElement(s.a,{label:"amount"},O.map_amount),c.a.createElement(s.a,{label:"token"},c.a.createElement(u.a,{value:_,notamount:!0,totoken:!0}))))));case"PARTICIPATEASSETISSUECONTRACT":return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"card-body table-title"},c.a.createElement("h5",null,c.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("participate_asset_issue_contract"),c.a.createElement("small",null,Object(o.c)("participate_token_between_addresses")))),c.a.createElement("div",{className:"table-responsive"},c.a.createElement("table",{className:"table"},c.a.createElement("tbody",null,c.a.createElement(s.a,{label:"to"},c.a.createElement(l.a,{address:_.owner_address})),c.a.createElement(s.a,{label:"issuer"},c.a.createElement(l.a,{address:_.to_address})),c.a.createElement(s.a,{label:"amount"},_.amount/r.w),c.a.createElement(s.a,{label:"token"},c.a.createElement(u.a,{value:_,notamount:!0,totoken:!0}))))));case"WITNESSUPDATECONTRACT":return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"card-body table-title"},c.a.createElement("h5",null,c.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("witness_update_contract"),c.a.createElement("small",null,Object(o.c)("updates_a_witness")))),c.a.createElement("table",{className:"table"},c.a.createElement("tbody",null,c.a.createElement(s.a,{label:"owner_address"},c.a.createElement(l.a,{address:_.owner_address})),c.a.createElement(s.a,{label:"URL"},_.url))));case"WITNESSCREATECONTRACT":return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"card-body table-title"},c.a.createElement("h5",null,c.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("witness_create_contract"),c.a.createElement("small",null,Object(o.c)("create_a_witness")))),c.a.createElement("table",{className:"table"},c.a.createElement("tbody",null,c.a.createElement(s.a,{label:"owner_address"},c.a.createElement(l.a,{address:_.owner_address})),c.a.createElement(s.a,{label:"URL"},_.url))));case"ACCOUNTUPDATECONTRACT":return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"card-body table-title"},c.a.createElement("h5",null,c.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("account_update_contract"),c.a.createElement("small",null,Object(o.c)("update_account_name")))),c.a.createElement("table",{className:"table"},c.a.createElement("tbody",null,c.a.createElement(s.a,{label:"owner_address"},c.a.createElement(l.a,{address:_.owner_address})),c.a.createElement(s.a,{label:"account_name"},Object(E.toUtf8)(_.account_name)))));case"ACCOUNTCREATECONTRACT":return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"card-body table-title"},c.a.createElement("h5",null,c.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("account_create_contract"),c.a.createElement("small",null,Object(o.c)("account_create")))),c.a.createElement("table",{className:"table"},c.a.createElement("tbody",null,c.a.createElement(s.a,{label:"create_from_address"},c.a.createElement(l.a,{address:_.owner_address})),c.a.createElement(s.a,{label:"create_to_address"},c.a.createElement(l.a,{address:_.account_address})))));case"WITHDRAWBALANCECONTRACT":return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"card-body table-title"},c.a.createElement("h5",null,c.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("withdraw_balance_contract"),c.a.createElement("small",null,Object(o.c)("withdraw_balance")))),c.a.createElement("table",{className:"table"},c.a.createElement("tbody",null,c.a.createElement(s.a,{label:"owner_address"},c.a.createElement(l.a,{address:_.owner_address})))));case"FREEZEBALANCECONTRACT":return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"card-body table-title"},c.a.createElement("h5",null,c.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("freeze_balance_contract"),c.a.createElement("small",null,Object(o.c)("freeze_TRX")))),c.a.createElement("table",{className:"table"},c.a.createElement("tbody",null,c.a.createElement(s.a,{label:"owner_address"},c.a.createElement(l.a,{address:_.owner_address})),_.receiver_address&&c.a.createElement(s.a,{label:"receive_list"},c.a.createElement(l.a,{address:_.receiver_address})),_.resource?c.a.createElement(s.a,{label:"type"},_.resource):c.a.createElement(s.a,{label:"type"},"Bandwidth"),c.a.createElement(s.a,{label:"frozen_balance"},_.frozen_balance/r.w),c.a.createElement(s.a,{label:"frozen_days"},_.frozen_duration))));case"UNFREEZEBALANCECONTRACT":return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"card-body table-title"},c.a.createElement("h5",null,c.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("unfreeze_balance_contract"),c.a.createElement("small",null,Object(o.c)("unfreeze_TRX")))),c.a.createElement("table",{className:"table"},c.a.createElement("tbody",null,c.a.createElement(s.a,{label:"owner_address"},c.a.createElement(l.a,{address:_.owner_address})),_.receiver_address&&c.a.createElement(s.a,{label:"receive_list"},c.a.createElement(l.a,{address:_.receiver_address})))));case"VOTEWITNESSCONTRACT":return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"card-body table-title"},c.a.createElement("h5",null,c.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("vote_witness_contract"),c.a.createElement("small",null,Object(o.c)("vote_for_a_witness")))),c.a.createElement("table",{className:"table"},c.a.createElement("tbody",null,c.a.createElement(s.a,{label:"owner_address"},c.a.createElement(l.a,{address:_.owner_address})),c.a.createElement("tr",null,c.a.createElement("th",null,Object(o.c)("votes")),c.a.createElement("td",null,c.a.createElement("ul",null,_.votes.map(function(e,a){return c.a.createElement("li",{key:a},c.a.createElement(l.a,{address:e.vote_address,truncate:!1}),Object(o.c)("counts")," : ",e.vote_count)})))))));case"ASSETISSUECONTRACT":return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"card-body table-title"},c.a.createElement("h5",null,c.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("asset_issue_contract"),c.a.createElement("small",null,Object(o.c)("issue_a_new_asset")))),c.a.createElement("table",{className:"table"},c.a.createElement("tbody",null,c.a.createElement(s.a,{label:"owner_address"},c.a.createElement(l.a,{address:_.owner_address})),c.a.createElement(s.a,{label:"token_name"},Object(E.toUtf8)(_.name)),c.a.createElement(s.a,{label:"total_supply"},c.a.createElement(d.c,{value:_.total_supply/(_.precision?Math.pow(10,_.precision):1)})),c.a.createElement(s.a,{label:"TRX_exchange_rate"},_.trx_num/r.w," : ",_.num),c.a.createElement(s.a,{label:"start_time"},_.end_time-_.start_time>1e3?c.a.createElement(d.a,{value:_.start_time}):"-"),c.a.createElement(s.a,{label:"end_time"},_.end_time-_.start_time>1e3?c.a.createElement(d.a,{value:_.end_time}):"-"),c.a.createElement(s.a,{label:"description"},Object(E.toUtf8)(_.description)),c.a.createElement(s.a,{label:"URL"},c.a.createElement(l.d,{url:Object(E.toUtf8)(_.url)})))));case"PROPOSALCREATECONTRACT":return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"card-body table-title"},c.a.createElement("h5",null,c.a.createElement("i",{className:"fa fa-exchange-alt"}),Object(o.c)("proposal_create_contract"),c.a.createElement("small",null,Object(o.c)("proposal_create")))),c.a.createElement("table",{className:"table"},c.a.createElement("tbody",null,c.a.createElement(s.a,{label:"owner_address"},c.a.createElement(l.a,{address:_.owner_address})),c.a.createElement("tr",null,c.a.createElement("th",null,a),c.a.createElement("td",null,t)))));case"TRIGGERSMARTCONTRACT":_.method;return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"card-body table-title"},b(_)),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"content_pos"},c.a.createElement("div",{className:"d-flex border-bottom pt-2"},c.a.createElement("div",{className:"content_box_name"},Object(o.c)("Basic_info")),c.a.createElement("div",{className:"flex1"},c.a.createElement("div",{className:"d-flex border-bottom content_item"},c.a.createElement("div",{className:"content_name"},Object(o.c)("contract_triggers_owner_address"),":"),c.a.createElement("div",{className:"flex1"},c.a.createElement(l.a,{address:_.owner_address}))),c.a.createElement("div",{className:"d-flex border-bottom content_item"},c.a.createElement("div",{className:"content_name"},Object(o.c)("contract_address"),":"),c.a.createElement("div",{className:"flex1"},c.a.createElement(l.a,{address:_.contract_address,isContract:!0}))),c.a.createElement("div",{className:"d-flex content_item"},c.a.createElement("div",{className:"content_name"},Object(o.c)("value"),":"),_.call_value?c.a.createElement(m.b,{amount:_.call_value/r.w}):c.a.createElement(m.b,{amount:0})))),_.tokenTransferInfo&&void 0!==_.tokenTransferInfo.decimals&&void 0!==_.tokenTransferInfo.symbol&&c.a.createElement("div",{className:"d-flex border-bottom pt-2"},c.a.createElement("div",{className:"content_box_name"},Object(o.c)("TRC20_transfers")),c.a.createElement("div",{className:"flex1"},c.a.createElement("div",{className:"d-flex border-bottom content_item"},c.a.createElement("div",{className:"content_name"},Object(o.c)("from"),":"),c.a.createElement("div",{className:"flex1"},c.a.createElement(l.a,{address:_.tokenTransferInfo.from_address}))),c.a.createElement("div",{className:"d-flex border-bottom content_item"},c.a.createElement("div",{className:"content_name"},Object(o.c)("to"),":"),c.a.createElement("div",{className:"flex1"},c.a.createElement(l.a,{address:_.tokenTransferInfo.to_address}))),c.a.createElement("div",{className:"d-flex border-bottom content_item"},c.a.createElement("div",{className:"content_name"},Object(o.c)("amount"),":"),c.a.createElement("div",{className:"flex1"},Number(_.tokenTransferInfo.amount_str)/Math.pow(10,_.tokenTransferInfo.decimals))),c.a.createElement("div",{className:"d-flex border-bottom content_item"},c.a.createElement("div",{className:"content_name"},Object(o.c)("token_txs_info"),":"),c.a.createElement("div",{className:"flex1"},_.tokenTransferInfo.contract_address==r.i||_.tokenTransferInfo.contract_address==r.j||_.tokenTransferInfo.contract_address==r.h?c.a.createElement("b",{className:"token-img-top",style:{marginRight:5}},c.a.createElement("img",{width:20,height:20,src:_.tokenTransferInfo.icon_url,alt:_.tokenTransferInfo.name}),c.a.createElement("i",{style:{width:10,height:10,bottom:-5}})):c.a.createElement("img",{width:20,height:20,src:_.tokenTransferInfo.icon_url,alt:_.tokenTransferInfo.name,style:{marginRight:5}}),c.a.createElement(l.g,{name:_.tokenTransferInfo.name,address:_.tokenTransferInfo.contract_address,namePlus:_.tokenTransferInfo.name+" ("+_.tokenTransferInfo.symbol+")"}))))),"{}"!=JSON.stringify(_.internal_transactions)&&c.a.createElement("div",{className:"d-flex border-bottom pt-2"},c.a.createElement("div",{className:"content_box_name"},Object(o.c)("Internal_txns")),c.a.createElement("div",{className:"flex1"},Object.keys(_.internal_transactions).map(function(e,a){var t=[];return _.internal_transactions[e].map(function(e,a){var n=Object(i.a)(JSON.parse(e.value_info_list),"token_id","call_value")[0];t.push(c.a.createElement("div",{key:e.transaction_id,className:"d-flex align-items-center content_item"},c.a.createElement("div",{className:"d-flex"},c.a.createElement("div",{className:"mr-1"},Object(o.c)("transfers")),c.a.createElement("div",{className:"mr-1"},n.map_amount+" "+n.map_token_name_abbr),c.a.createElement("div",{className:"mr-1"},Object(o.c)("from")),c.a.createElement("div",{className:"mr-1",style:{width:"150px"}},c.a.createElement(l.c,{address:e.caller_address})),c.a.createElement("div",{className:"mr-1"},Object(o.c)("to")),c.a.createElement("div",{className:"mr-1",style:{width:"150px"}},c.a.createElement(l.c,{address:e.transfer_to_address})))))}),t}))),"{}"!=JSON.stringify(_.cost)&&c.a.createElement("div",{className:"d-flex border-bottom pt-2"},c.a.createElement("div",{className:"content_box_name"},Object(o.c)("Fee_Consumption")),c.a.createElement("div",{className:"flex1"},Object.keys(_.cost).map(function(e){return"energy_fee"===e||"net_fee"===e?c.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},c.a.createElement("div",{className:"content_name mr-2",style:{width:"auto"}},Object(o.c)(e),":"),c.a.createElement("div",{className:"flex1"},_.cost[e]/1e6," TRX")):c.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},c.a.createElement("div",{className:"content_name mr-2",style:{width:"auto"}},Object(o.c)(e),":"),c.a.createElement("div",{className:"flex1"},_.cost[e]))}))),_.method&&c.a.createElement("div",{className:"d-flex border-bottom pt-2"},c.a.createElement("div",{className:"content_box_name"},Object(o.c)("Method_calling")),c.a.createElement("div",{className:"flex1"},c.a.createElement("div",{className:"d-flex border-bottom content_item"},c.a.createElement("div",{className:"content_name"},Object(o.c)("contract_method"),":"),c.a.createElement("div",{className:"flex1"},_.method)),_.parameter&&Object.keys(_.parameter).map(function(e){return c.a.createElement("div",{className:"d-flex border-bottom content_item",key:e},c.a.createElement("div",{className:"content_name"},e,":"),c.a.createElement("div",{className:"flex1"},_.parameter[e]))}))))));default:return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"card-body table-title"},c.a.createElement("h5",null,c.a.createElement("i",{className:"fa fa-exchange-alt"}),"\xa0\xa0",_.contractType)),c.a.createElement("table",{className:"table"},c.a.createElement("tbody",null,_.owner_address?c.a.createElement(s.a,{label:"owner_address"},c.a.createElement(l.a,{address:_.owner_address})):"")))}return c.a.createElement("div",null,_.contractType&&c.a.createElement("div",{className:"card-body"},JSON.stringify(_)))}},2417:function(e,a,t){"use strict";t.d(a,"a",function(){return N});var n=t(2),c=t.n(n),r=t(5),l=t(15),s=t(16),m=t(25),o=t(23),d=t(24),i=t(0),E=t.n(i),u=t(2596),b=t.n(u),_=t(14),f=t(3),N=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(m.a)(this,Object(o.a)(a).call(this))).initCameras=Object(r.a)(c.a.mark(function a(){var t;return c.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,b.a.Camera.getCameras();case 3:if(!((t=a.sent).length>0)){a.next=9;break}return a.next=7,e.scanner.start(t[0]);case 7:a.next=10;break;case 9:e.setState({error:E.a.createElement(_.a,{color:"warning",className:"text-center"},Object(f.c)("no_webcam_found"))});case 10:a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),e.setState({error:E.a.createElement(_.a,{color:"danger",className:"text-center"},Object(f.c)("trying_enable_webcam_message_0")," ",E.a.createElement("br",null),Object(f.c)("trying_enable_webcam_message_1"))});case 15:case"end":return a.stop()}},a,null,[[0,12]])})),e.state={error:null},e.ref=E.a.createRef(),e}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.onScan;this.scanner=new b.a.Scanner({video:this.ref.current,backgroundScan:!1}),this.scanner.addListener("scan",function(a){e({code:a})}),this.initCameras()}},{key:"componentWillUnmount",value:function(){this.scanner.stop()}},{key:"render",value:function(){var e=this.state.error;return e||E.a.createElement("video",{className:"w-100",style:v.video,ref:this.ref})}}]),a}(E.a.Component),v={video:{}}},3266:function(e,a,t){"use strict";t.r(a);var n=t(33),c=t.n(n),r=t(2),l=t.n(r),s=t(5),m=t(15),o=t(16),d=t(25),i=t(23),E=t(24),u=t(0),b=t.n(u),_=t(3),f=t(12),N=t(18),v=t(294),O=t(53),h=t.n(O),T=t(1978),p=t(1782);function j(e){var a=e.signature;return b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(p.a,{label:"Signature"},a.bytes)))}var x=t(13),g=Object(x.a)(function(){return t.e(13).then(t.bind(null,3254))}),C=t(31),w=t(14),y=t(2417),A=function(e){function a(){var e;return Object(m.a)(this,a),(e=Object(d.a)(this,Object(i.a)(a).call(this))).hideModal=function(){var a=e.props.onClose;a&&a()},e.onCodeScan=function(a){var t=a.code,n=e.props.onConfirm;n&&n({code:t})},e.state={body:null},e}return Object(E.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setState({body:b.a.createElement("div",null,b.a.createElement(y.a,{onScan:this.onCodeScan}))})}},{key:"render",value:function(){var e=this.state.body;return b.a.createElement(w.d,{isOpen:!0,toggle:this.hideModal,fade:!1,className:"modal-dialog-centered"},b.a.createElement(w.g,{className:"text-center",toggle:this.hideModal},"Scan Transaction"),b.a.createElement(w.e,null,e))}}]),a}(b.a.Component);var S=Object(C.connect)(function(e){return{account:e.app.account}},{})(A),k=function(e){function a(e){var t;Object(m.a)(this,a),(t=Object(d.a)(this,Object(i.a)(a).call(this,e))).hideModal=function(){t.setState({modal:null})},t.setHex=function(e){t.setState({hex:e})},t.loadTransaction=function(){var e=Object(s.a)(l.a.mark(function e(a){var n,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.readTransactionNew(a);case 3:n=e.sent,(c=n.transaction)?t.setState({transactionData:c}):t.setState({modal:b.a.createElement(h.a,{danger:!0,title:Object(_.c)("transaction_load_error"),onConfirm:t.hideModal},Object(_.c)("transaction_load_error_message"))}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.setState({modal:b.a.createElement(h.a,{danger:!0,title:Object(_.c)("transaction_load_error"),onConfirm:t.hideModal},Object(_.c)("transaction_load_error_message"))});case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(a){return e.apply(this,arguments)}}(),t.scanTransaction=Object(s.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.setState({modal:b.a.createElement(S,{onClose:t.hideModal,onConfirm:function(e){var a=e.code;t.loadTransaction(a),t.hideModal(),t.setHex(a)}})});case 1:case"end":return e.stop()}},e)})),t.broadcastTransaction=function(){var e=Object(s.a)(l.a.mark(function e(a){var n,c,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.sendTransactionRaw(a);case 2:n=e.sent,c=n.success,r=n.code,c?t.setState({modal:b.a.createElement(h.a,{success:!0,title:Object(_.c)("transaction_success"),onConfirm:t.hideModal},Object(_.c)("transaction_success_message"))}):t.setState({modal:b.a.createElement(h.a,{danger:!0,title:Object(_.c)("transaction_error"),onConfirm:t.hideModal},Object(_.c)("transaction_error_message"),b.a.createElement("br",null),"Code: ",r)});case 6:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),t.broadcastTransactionModal=Object(s.a)(l.a.mark(function e(){var a,n,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.hex,e.next=3,N.a.readTransactionNew(a);case 3:n=e.sent,c=n.transaction,t.setState({modal:b.a.createElement(h.a,{info:!0,showCancel:!0,confirmBtnText:Object(_.c)("confirm_transaction"),confirmBtnBsStyle:"success",cancelBtnBsStyle:"default",title:Object(_.c)("confirm_transaction_message"),onConfirm:function(){return t.broadcastTransaction(a)},onCancel:t.hideModal})}),t.setState({transactionData:c});case 7:case"end":return e.stop()}},e)})),t.addSignature=function(){var e=t.state.hex;t.setState({modal:b.a.createElement(g,{transaction:e,onClose:t.hideModal})})};var n=Object(v.a)(e.location,"hex","");return t.state={hex:n,showInput:""===n,transactionData:null,modal:null},t}return Object(E.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this.state.hex;e&&this.loadTransaction(e)}},{key:"componentDidUpdate",value:function(e,a){var t=Object(v.a)(this.props.location,"hex","");""!==t&&a.hex!==t&&(this.loadTransaction(t),this.setState({hex:t}))}},{key:"render",value:function(){var e=this,a=this.state,t=a.hex,n=a.transactionData,r=a.modal,l=a.showInput;this.props.flags;return b.a.createElement("main",{className:"container header-overlap _transactionViewer"},r,l&&b.a.createElement("div",{className:"card"},b.a.createElement("div",{className:"card-body"},b.a.createElement("h5",{className:"card-title text-center"},Object(_.c)("transaction")," HEX"),b.a.createElement("p",{className:"text-center"},Object(_.c)("info_tx_viewer")),b.a.createElement("textarea",{className:"w-100 form-control",rows:"6",value:t,onChange:function(a){return e.setState({hex:a.target.value})}}),b.a.createElement("div",{className:"text-center _load_tx"},b.a.createElement("button",{className:"btn btn-primary",disabled:""===c()(t),onClick:function(){return e.loadTransaction(t)}},Object(_.c)("load_tx"))),b.a.createElement("hr",null),b.a.createElement("div",{className:"text-center p-3 _qrcode"},b.a.createElement("h5",{className:"card-title text-center"},Object(_.c)("tx_qrcode")),b.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.scanTransaction()}},Object(_.c)("load_tx_qrcode"),b.a.createElement("i",{className:"fa fa-qrcode ml-2"}))))),n&&b.a.createElement(u.Fragment,null,b.a.createElement("div",{className:"card mt-3"},b.a.createElement("div",{className:"card-body"},b.a.createElement("h5",{className:"card-title text-center"},"Transaction")),b.a.createElement("div",{className:"table-responsive"},b.a.createElement("table",{className:"table"},b.a.createElement("tbody",null,b.a.createElement(p.a,{label:"timestamp"},b.a.createElement(f.a,{value:n.timestamp}),"\xa0",b.a.createElement(f.e,{value:n.timestamp,hour:"numeric",minute:"numeric",second:"numeric",hour12:!1})),b.a.createElement(p.a,{label:"contracts"},n.contracts.length),b.a.createElement(p.a,{label:"signatures"},n.signatures.length))))),b.a.createElement("div",{className:"card mt-3"},b.a.createElement("div",{className:"card-header text-center"},Object(_.c)("Contracts")),n.contracts.map(function(e,a){return b.a.createElement(T.a,{key:a,contract:e})})),b.a.createElement("div",{className:"card mt-3"},b.a.createElement("div",{className:"card-header text-center"},Object(_.c)("Signatures")),n.signatures.map(function(e){return b.a.createElement(j,{signature:e})})),b.a.createElement("div",{className:"card mt-3 mb-5"},b.a.createElement("button",{className:"btn btn-success btn-lg",onClick:this.broadcastTransactionModal},Object(_.c)("broadcast_transaction_to_network")))))}}]),a}(u.Component);a.default=Object(C.connect)(function(e){return{flags:e.app.flags}},{})(k)}}]);