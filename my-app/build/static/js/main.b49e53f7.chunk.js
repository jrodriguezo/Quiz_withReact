(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(35)},26:function(e,t,a){},32:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},33:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(16),r=a.n(i),o=(a(26),a(20)),u=a(2),c=a(3),l=a(5),p=a(4),m=a(6),h=a(9),d=a(10),g=a(8),f="QUESTION_ANSWER",v="CHANGE_QUESTION",j="SUBMIT",w="INIT_QUESTION";function b(e){return{type:v,payload:e}}var y=Object(g.b)({score:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case j:return t.payload.questions.map(function(t,a){t.answer===t.userAnswer&&(e+=1)}),e;case w:return e=0;default:return e}},finished:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).type){case j:return e=!0;case w:return e=!1;default:return e}},currentQuestion:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case v:return t.payload;default:return e}},questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case w:return t.payload.questions;case f:return e.map(function(e,a){return Object(d.a)({},e,{userAnswer:t.payload.index===a?t.payload.answer:e.userAnswer})});default:return e}}}),q=[{id:0,question:"Loading wait ...",answer:"Loading",author:{isAdmin:!1,username:"loading"},attachment:{filename:"loading",mime:"image/jpeg",url:""},favourite:!1,tips:[]},{id:29,question:"Capital of Norway",answer:"Oslo",author:{isAdmin:!1,username:"slp"},attachment:{filename:"oslo.jpg",mime:"image/jpeg",url:"https://res.cloudinary.com/core-upm/image/upload/v1533288622/core/quiz2018/attachments/sgfjokgmrrtjibavxruz.jpg"},favourite:!1,tips:[]},{id:4,question:"Capital of France",answer:"Paris",author:null,attachment:{filename:"images.jpeg",mime:"image/jpeg",url:"https://res.cloudinary.com/core-upm/image/upload/v1540377108/core/quiz2018/attachments/dtdyxvpfufxhxzmf6twb.jpg"},favourite:!1,tips:[]},{id:13,question:"Capital of Honduras",answer:"Tegucigalpa",author:{isAdmin:!1,username:"slp"},attachment:{filename:"honduu.jpg",mime:"image/jpeg",url:"https://res.cloudinary.com/core-upm/image/upload/v1533286816/core/quiz2018/attachments/aungso5yig9kprnlndmq.jpg"},favourite:!1,tips:[]},{id:27,question:"Capital of Sweden",answer:"Stockholm",author:{isAdmin:!1,username:"slp"},attachment:{filename:"Gamla-Stan.jpg",mime:"image/jpeg",url:"https://res.cloudinary.com/core-upm/image/upload/v1533288547/core/quiz2018/attachments/whh1m5thefcgdrw9wgiw.jpg"},favourite:!1,tips:[]},{id:2,question:"Capital of Portugal",answer:"Lisbon",author:null,attachment:{filename:"Unknown-1.jpeg",mime:"image/jpeg",url:"https://res.cloudinary.com/core-upm/image/upload/v1540377054/core/quiz2018/attachments/d6rwsnksvprtnrz0xopp.jpg"},favourite:!1,tips:[]},{id:66,question:"Serie de TV donde aparece este logo",answer:"Perdidos",author:{isAdmin:!1,username:"spg"},attachment:{filename:"dharma.jpg",mime:"image/jpeg",url:"https://res.cloudinary.com/core-upm/image/upload/v1540377934/core/quiz2018/attachments/aorzbrixvkoiffhzzzyc.jpg"},favourite:!1,tips:["En ingl\xe9s se titulaba LOST"]},{id:31,question:"Capital of Ireland",answer:"Dublin",author:{isAdmin:!1,username:"slp"},attachment:{filename:"Precios-de-habitaciones-en-Dubl\xedn.jpg",mime:"image/jpeg",url:"https://res.cloudinary.com/core-upm/image/upload/v1533288748/core/quiz2018/attachments/jhxwmrz23usuoibrggya.jpg"},favourite:!1,tips:[]},{id:6,question:"Capital of Russia",answer:"Moscow",author:{isAdmin:!1,username:"slp"},attachment:{filename:"shutterstock-599314052.jpg",mime:"image/jpeg",url:"https://res.cloudinary.com/core-upm/image/upload/v1533286445/core/quiz2018/attachments/z0wlakq0shyn771mwywx.jpg"},favourite:!1,tips:[]},{id:33,question:"Capital of Poland",answer:"Warsaw",author:{isAdmin:!1,username:"slp"},attachment:{filename:"C201701-Locals-Travel-Guide-Warsaw-Old-Town-e0625b5d.jpeg",mime:"image/jpeg",url:"https://res.cloudinary.com/core-upm/image/upload/v1533289046/core/quiz2018/attachments/zhpk9wqw78coyt1a8dni.jpg"},favourite:!1,tips:[]},{id:1,question:"Capital of Italy",answer:"Rome",author:null,attachment:{filename:"Unknown.jpeg",mime:"image/jpeg",url:"https://res.cloudinary.com/core-upm/image/upload/v1540377181/core/quiz2018/attachments/ggsskbd8ieqrp4ozkiu4.jpg"},favourite:!1,tips:[]}],E=a(7),k=(a(32),a(33),function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("h2",{className:"texto"}," Question ",this.props.texto),s.a.createElement("h3",null,this.props.question.question),s.a.createElement("div",null,s.a.createElement("input",{className:"cajetin",type:"text",value:this.props.question.userAnswer||"",placeholder:" Type here your answer",onChange:function(t){e.props.onQuestionAnswer(t.target.value)}})))}}]),t}(s.a.Component)),O=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("button",{className:this.props.css,onClick:this.props.onclick},this.props.boton)}}]),t}(s.a.Component),z=a(19),S=a.n(z),N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).nextQuestion=function(){a.state.tips=[],!0!==a.props.finished?9!==a.props.currentQuestion?a.props.dispatch(b(a.props.currentQuestion+1)):a.props.dispatch(b(0)):alert("you have finished, press reset to start again with another random quizzes")},a.returnQuestion=function(){a.state.tips=[],!0!==a.props.finished?0!==a.props.currentQuestion?a.props.dispatch(b(a.props.currentQuestion-1)):a.props.dispatch(b(9)):alert("you have finished, press reset to start again with another random quizzes")},a.submitButton=function(){var e;(a._handleStopClick(),!0!==a.props.finished)?a.props.dispatch((e=a.props.questions,{type:j,payload:{questions:e}})):alert("you have finished, press reset to start again with another random quizzes")},a.resetButton=function(){a.setState({minutes:2,seconds:0,millis:0}),a.setState({resultado:""}),a.componentDidMount(),a.props.dispatch(b(0)),alert("you have reseted the quizzes")},a.state={minutes:2,seconds:0,millis:0,running:!1,resultado:"",tips:[]},a._handleStartClick=a._handleStartClick.bind(Object(E.a)(Object(E.a)(a))),a._handleStopClick=a._handleStopClick.bind(Object(E.a)(Object(E.a)(a))),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"_handleStartClick",value:function(){var e=this;this.state.running||(this.interval=setInterval(function(){e.tick()},100),this.setState({running:!0}))}},{key:"_handleStopClick",value:function(){this.state.running&&(clearInterval(this.interval),this.setState({running:!1}))}},{key:"tick",value:function(){var e=this.state.millis-1,t=this.state.seconds,a=this.state.minutes;-1===e&&(e=9,t-=1),-1===t&&(e=9,t=59,a-=1),0===a&&0===t&&0===e&&this.submitButton(),this.setState({millis:e,seconds:t,minutes:a})}},{key:"componentDidMount",value:function(){var e=this;S.a.ajax({url:"https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=75bce630e75b90e53711",success:function(t){e.props.dispatch({type:w,payload:{questions:t}})}}),this._handleStartClick()}},{key:"render",value:function(){var e=this;return 0===this.props.questions.length?(alert("Questions is empty, there are no questions"),null):(""!==this.props.questions[this.props.currentQuestion].attachment.mime&&"image/gif"!==this.props.questions[this.props.currentQuestion].attachment.mime||(this.props.questions[this.props.currentQuestion].attachment.url=""),!0===this.props.finished&&(this.state.resultado=s.a.createElement("div",{className:"resScore"},s.a.createElement("h2",null,"Your final SCORE: ",this.props.score/10*100,"%"),s.a.createElement("div",{className:"resFinished"},"You have finished [ ",String(this.props.finished)," ] so reset if you want to start the game again"))),s.a.createElement("div",{className:"App"},s.a.createElement("h1",{className:"Titulo"},"Quiz 2018/2019"),s.a.createElement(k,{texto:this.props.currentQuestion,question:this.props.questions[this.props.currentQuestion],onQuestionAnswer:function(t){e.props.dispatch(function(e,t){return{type:f,payload:{index:e,answer:t}}}(e.props.currentQuestion,t))}}),s.a.createElement("div",{className:"centro"},s.a.createElement("img",{className:"imagen",src:this.props.questions[this.props.currentQuestion].attachment.url,width:"400",height:"300"}),s.a.createElement("div",{className:"tips"},this.props.questions[this.props.currentQuestion].tips.map(function(t,a){e.state.tips[a]=t}),s.a.createElement("p",{className:"tipText"},s.a.createElement("u",null,"Tips:")),s.a.createElement("ul",{className:"cadaTip"},this.state.tips.map(function(e){return s.a.createElement("li",null,e)}))),s.a.createElement("div",{className:"display"},s.a.createElement("div",{className:"numbers"},s.a.createElement("span",{className:"mins"},this.state.minutes,":"),s.a.createElement("span",{className:"secs"},this.state.seconds),s.a.createElement("span",{className:"millis"},".",this.state.millis)))),s.a.createElement("div",{className:"clear"}),s.a.createElement("div",null,this.state.resultado,s.a.createElement("div",{className:"clear"}),s.a.createElement("div",{className:"botones"},s.a.createElement(O,{css:"anterior",onclick:this.returnQuestion,boton:"Anterior"}),s.a.createElement(O,{css:"confirmar",onclick:this.submitButton,boton:"Obtener resultados"}),s.a.createElement(O,{css:"siguiente",onclick:this.nextQuestion,boton:"Siguiente"}),s.a.createElement(O,{css:"reset",onclick:this.resetButton,boton:"Reset"}))),s.a.createElement("div",{className:"clear"})))}}]),t}(n.Component);var C=Object(h.b)(function(e){return Object(d.a)({},e)})(N),Q=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).initialState={score:0,finished:!1,currentQuestion:0,questions:Object(o.a)(q)},a.store=a.configureStore(),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(h.a,{store:this.store},s.a.createElement("div",{style:{height:"100%"}},s.a.createElement(C,{store:this.store})))}},{key:"configureStore",value:function(){return Object(g.c)(y,this.initialState)}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(Q,null),document.getElementById("root"))}},[[21,2,1]]]);
//# sourceMappingURL=main.b49e53f7.chunk.js.map