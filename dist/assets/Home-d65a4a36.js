import{p as W,_,u as N,L as q,$ as j,r as H,a as B,b as w,o as p,c as b,d as s,w as F,v as k,e as R,f as g,F as O,g as Q,h as U,t as y}from"./index-a85eca6d.js";var f=new Map,v=new Map,V=!0,h=!1;function E(e){return e.replace(/[\s,]+/g," ").trim()}function z(e){return E(e.source.body.substring(e.start,e.end))}function A(e){var r=new Set,n=[];return e.definitions.forEach(function(a){if(a.kind==="FragmentDefinition"){var t=a.name.value,o=z(a.loc),c=v.get(t);c&&!c.has(o)?V&&console.warn("Warning: fragment with name "+t+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):c||v.set(t,c=new Set),c.add(o),r.has(o)||(r.add(o),n.push(a))}else n.push(a)}),_(_({},e),{definitions:n})}function G(e){var r=new Set(e.definitions);r.forEach(function(a){a.loc&&delete a.loc,Object.keys(a).forEach(function(t){var o=a[t];o&&typeof o=="object"&&r.add(o)})});var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}function P(e){var r=E(e);if(!f.has(r)){var n=W(e,{experimentalFragmentVariables:h,allowLegacyFragmentVariables:h});if(!n||n.kind!=="Document")throw new Error("Not a valid GraphQL document.");f.set(r,G(A(n)))}return f.get(r)}function i(e){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];typeof e=="string"&&(e=[e]);var a=e[0];return r.forEach(function(t,o){t&&t.kind==="Document"?a+=t.loc.source.body:a+=t,a+=e[o+1]}),P(a)}function J(){f.clear(),v.clear()}function X(){V=!1}function Y(){h=!0}function Z(){h=!1}var u={gql:i,resetCaches:J,disableFragmentWarnings:X,enableExperimentalFragmentVariables:Y,disableExperimentalFragmentVariables:Z};(function(e){e.gql=u.gql,e.resetCaches=u.resetCaches,e.disableFragmentWarnings=u.disableFragmentWarnings,e.enableExperimentalFragmentVariables=u.enableExperimentalFragmentVariables,e.disableExperimentalFragmentVariables=u.disableExperimentalFragmentVariables})(i||(i={}));i.default=i;const K={class:"max-w-[1000px] mx-auto"},ee=s("h1",{class:"text-3xl font-bold"},"My Notes App",-1),te=["onSubmit"],ne={class:"block mb-4"},ae=s("span",{class:"block text-sm uppercase mb-2"},"Title",-1),se={class:"block mb-4"},re=s("span",{class:"block text-sm uppercase mb-2"},"Content",-1),oe=s("input",{type:"submit",value:"Create note",class:"text-green-500 hover:underline mb-4 cursor-pointer"},null,-1),le={key:0},ie={class:"relative bg-white text-slate-700 rounded-lg p-6 mb-6"},ce=["onClick"],ue={class:"font-bold text-2xl mb-4"},de=["innerHTML"],me={class:"text-sm text-gray-500 italic"},be={__name:"Home",setup(e){const r=N(),{signOut:n}=q(),a=j(),t=H({title:"",content:""}),o=()=>{n(),r.push("/login")},{loading:c,result:L,refetch:x}=B(i`
    query ($userId: String!) {
      notes(order_by: { created: desc }, where: { user_id: { _eq: $userId } }) {
        id
        title
        content
        created
      }
    }
  `,{userId:a.value}),{mutate:C,onDone:$}=w(i`
  mutation ($userId: String!, $title: String!, $content: String!) {
    insert_notes_one(
      object: { content: $content, title: $title, user_id: $userId }
    ) {
      id
    }
  }
`),M=()=>{if(!t.value.title||!t.value.content)return alert("Please fill in all fields");C({userId:a.value,title:t.value.title,content:t.value.content})};$(()=>{x(),t.value={title:"",content:""}});const{mutate:D,onDone:S}=w(i`
  mutation ($id: Int!) {
    delete_notes(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`);S(()=>{x()});const T=d=>d.replace(/\n/g,"<br>"),I=d=>new Date(d).toLocaleString();return(d,m)=>(p(),b("main",K,[s("div",{class:"flex items-center justify-between mb-8"},[ee,s("button",{onClick:o,class:"text-red-500 hover:underline cursor-pointer"}," Logout ")]),s("form",{class:"mb-8",onSubmit:R(M,["prevent"])},[s("label",ne,[ae,F(s("input",{type:"text","onUpdate:modelValue":m[0]||(m[0]=l=>t.value.title=l),placeholder:"What is the title?",class:"block w-full text-slate-800 px-4 py-2"},null,512),[[k,t.value.title]])]),s("label",se,[re,F(s("textarea",{"onUpdate:modelValue":m[1]||(m[1]=l=>t.value.content=l),placeholder:"Write your note here",class:"block w-full text-slate-800 px-4 py-2"},null,512),[[k,t.value.content]])]),oe],40,te),g(c)?U("",!0):(p(),b("div",le,[(p(!0),b(O,null,Q(g(L).notes,l=>(p(),b("div",ie,[s("button",{onClick:()=>g(D)({id:l.id}),class:"absolute top-6 right-6 text-red-500 font-bold"}," Delete ",8,ce),s("h3",ue,y(l.title),1),s("p",{innerHTML:T(l.content),class:"text-lg text-gray-500 mb-4"},null,8,de),s("div",me,y(I(l.created)),1)]))),256))]))]))}};export{be as default};
