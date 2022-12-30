"use strict";(self.webpackChunkbemuse_docs=self.webpackChunkbemuse_docs||[]).push([[470],{2669:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(8851);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(1465),a=n(6852),l=(n(8851),n(2669)),o=["components"],i={id:"workflows",title:"Workflows for development, release, and deployment",sidebar_label:"Workflows"},p=void 0,s={unversionedId:"workflows",id:"workflows",title:"Workflows for development, release, and deployment",description:"Reviewing PRs",source:"@site/docs/workflows.md",sourceDirName:".",slug:"/workflows",permalink:"/project/docs/workflows",draft:!1,tags:[],version:"current",lastUpdatedBy:"dtinth on MBP M1",lastUpdatedAt:1672382319,formattedLastUpdatedAt:"Dec 30, 2022",frontMatter:{id:"workflows",title:"Workflows for development, release, and deployment",sidebar_label:"Workflows"},sidebar:"docs",previous:{title:"Colors",permalink:"/project/docs/colors"}},u={},c=[{value:"Reviewing PRs",id:"reviewing-prs",level:2},{value:"Authoring change logs",id:"authoring-change-logs",level:2},{value:"Merging PRs",id:"merging-prs",level:2},{value:"Release a new version of the game",id:"release-a-new-version-of-the-game",level:2},{value:"Deploying to production",id:"deploying-to-production",level:2},{value:"Publishing npm packages",id:"publishing-npm-packages",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"reviewing-prs"},"Reviewing PRs"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Using ",(0,l.kt)("a",{parentName:"li",href:"https://cli.github.com/"},"GitHub CLI"),": Run ",(0,l.kt)("inlineCode",{parentName:"li"},"gh pr checkout <PR number>")," to checkout the PR locally."),(0,l.kt)("li",{parentName:"ul"},"Using ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/features/codespaces"},"GitHub Codespaces"),": In the PR, click on the ",(0,l.kt)("strong",{parentName:"li"},"Code")," button and select ",(0,l.kt)("strong",{parentName:"li"},"Create codespace"),".")),(0,l.kt)("h2",{id:"authoring-change-logs"},"Authoring change logs"),(0,l.kt)("p",null,"For changes in the Bemuse game, create a changelog entry in the ",(0,l.kt)("inlineCode",{parentName:"p"},"changelog")," folder."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nauthor:\ncategory:\npr:\n---\n\n(Describe the change here)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"author"),": GitHub username of the author."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"category"),": One of ",(0,l.kt)("inlineCode",{parentName:"li"},"feature"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"internals"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"bugfix"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"improvement"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pr"),": Pull request number."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type"),": One of ",(0,l.kt)("inlineCode",{parentName:"li"},"major"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"minor"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"patch"),". If not specified, it will be a ",(0,l.kt)("inlineCode",{parentName:"li"},"patch")," release.")),(0,l.kt)("h2",{id:"merging-prs"},"Merging PRs"),(0,l.kt)("p",null,'When all checks have passed, click the green "Merge pull request" button.'),(0,l.kt)("h2",{id:"release-a-new-version-of-the-game"},"Release a new version of the game"),(0,l.kt)("p",null,"When a PR is merged, GitHub Actions will automatically create a release candidate. This involves:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Consuming the changelog entries and updating the ",(0,l.kt)("inlineCode",{parentName:"li"},"CHANGELOG.md")," file."),(0,l.kt)("li",{parentName:"ul"},"Bumping the version number.")),(0,l.kt)("p",null,"The release candidate will be published to the ",(0,l.kt)("inlineCode",{parentName:"p"},"release-candidate/proposed")," branch and a pull request will be created. You can keep merging more PRs into ",(0,l.kt)("inlineCode",{parentName:"p"},"master")," and the release candidate will be updated (although it\u2019s generally better release as often as possible). When you are ready to release, merge that pull request."),(0,l.kt)("h2",{id:"deploying-to-production"},"Deploying to production"),(0,l.kt)("p",null,"Upon releasing a new version, it will automatically be deployed to production."),(0,l.kt)("h2",{id:"publishing-npm-packages"},"Publishing npm packages"),(0,l.kt)("p",null,"Right now this is currently being done manually using this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rush publish --apply --target-branch master --publish --npm-auth-token $NPM_TOKEN\n")))}m.isMDXComponent=!0}}]);