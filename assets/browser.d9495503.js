import{m as f,a as k,b as p,c as b,l as w}from"./index.477eaa4e.js";import"./index.5ff10203.js";var s=[{id:"1",task:"Get the milk",done:!0},{id:"2",task:"Waking to the buzz of the alarm clock, their blackberry was, in this moment, a sincere rabbit",done:!0},{id:"3",task:'Quoting with intend: "The camels could be said to resemble sympathetic limes;',done:!0},{id:"4",task:"Few can name an energetic turtle that isn't a credible bear",done:!0},{id:"5",task:"An octopus is the chicken of a bird",done:!1},{id:"6",task:`In his own words: "It's very tricky, if not impossible, the camel of an apple becomes a helpful prune.`,done:!0},{id:"7",task:"Extending this logic, charming kangaroos show us how bears can be pears",done:!0},{id:"8",task:"Washing and polishing the car,snails are resolute persimmons",done:!1},{id:"9",task:"A hippopotamus is the turtle of a spider",done:!1},{id:"10",task:"Alluring bananas show us how crocodiles can be melons",done:!1},{id:"11",task:"A seal of the blueberry is assumed to be a self-disciplined persimmon",done:!1},{id:"12",task:"One cannot separate cows from punctual limes",done:!1},{id:"13",task:"If this was somewhat unclear, they were lost without the modest lobster that composed their goat",done:!1},{id:"14",task:"A shark of the camel is assumed to be a resolute cranberry",done:!1},{id:"15",task:"Congratulations to the wolf that won the discreet lobster with a peach",done:!1},{id:"16",task:"The cooperative cranberry comes from a fearless duck",done:!1},{id:"17",task:"As far as we can estimate, a comfortable scorpion without lemons is truly a orange of talented rats",done:!0},{id:"18",task:'Quoting with intend: "The dogs could be said to resemble humorous spiders.',done:!0},{id:"19",task:'In her own words: "Some posit the communicative deer to be less than kind-hearted.',done:!1},{id:"20",task:"The zeitgeist contends that we can assume that any instance of an eagle can be construed as a helpful turtle",done:!1},{id:"21",task:"Some posit the exclusive octopus to be less than intellectual",done:!0},{id:"22",task:"Good ducks show us how plums can be raspberries",done:!1},{id:"23",task:"We can assume that any instance of a rat can be construed as a talented grapefruit",done:!1},{id:"24",task:"One cannot separate peaches from loyal pigs",done:!0},{id:"25",task:"Kittens are persistent seals",done:!0},{id:"26",task:"A seal is a currant's dog",done:!1},{id:"27",task:"An obedient puppy without lobsters is truly a deer of communicative flies",done:!1},{id:"28",task:"Kittens are careful pears",done:!0},{id:"29",task:"A spider is a calm lion",done:!1},{id:"30",task:"However, apricots are determined cats",done:!1},{id:"31",task:"Hamsters are pioneering snails",done:!0},{id:"32",task:"The zeitgeist contends that the chimpanzee is a melon",done:!1},{id:"33",task:'In his own words: "We know that the dolphins could be said to resemble plausible giraffes?',done:!1},{id:"34",task:"Congratulations to the dog that won the philosophical elephant with a seal",done:!1},{id:"35",task:"A camel of the kangaroo is assumed to be a talented turtle",done:!0},{id:"36",task:'In his own words: "Some posit the cooperative squirrel to be less than vivacious;',done:!1},{id:"37",task:"We can assume that any instance of a squirrel can be construed as a sensitive cheetah",done:!0},{id:"38",task:'Yelling: "A watermelon is a chicken from the right perspective.',done:!0},{id:"39",task:'In his own words: "Though we assume the latter, the literature would have us believe that a passionate kumquat is not but a grape.',done:!0},{id:"40",task:"Few can name a versatile grape that isn't an exclusive fox",done:!1},{id:"41",task:"A squirrel sees a horse as a talented spider",done:!0},{id:"42",task:"A panda is the dog of a kangaroo",done:!1},{id:"43",task:"The literature would have us believe that an amiable kitten is not but an apple",done:!1},{id:"44",task:"This could be, or perhaps an ambitious lion's raspberry comes with it the thought that the sociable alligator is a camel",done:!1},{id:"45",task:"The determined shark reveals itself as a fantastic strawberry to those who look",done:!1},{id:"46",task:"The modest cranberry comes from a steadfast hamster",done:!1},{id:"47",task:"This could be, or perhaps we can assume that any instance of an orange can be construed as a honorable wolf",done:!1},{id:"48",task:"Some fair-minded bears are thought of simply as oranges",done:!1},{id:"49",task:"Backup the MacBook",done:!1},{id:"69",task:"Write the damn resolver!",done:!1}],v=1,u=10,g=[f((o,i,n)=>{var e,{page:t,limit:a,input:r}=o.variables,d=((t??v)-1)*(a??u),c=d+(a??u),l=[...s],h=(e=r?.task_contains)!==null&&e!==void 0?e:"";return h!==""&&(l=l.filter(m=>m.task.includes(h))),i(n.data({todos:l.reverse().slice(d,c)}))}),k((o,i,n)=>{var{task:e,done:t}=o.variables.input,a="1";return s.length>0&&(a=(parseInt(s[s.length-1].id,10)+1).toString()),s.push({id:a,task:e,done:t}),i(n.data({createTodo:s[s.length-1]}))}),p((o,i,n)=>{var e,{id:t,input:a}=o.variables,r=s.find(d=>d.id===t);if(r==null)throw new Error("Mock update failed for item id ".concat(t));return r.done=(e=a.done)!==null&&e!==void 0?e:!1,i(n.data({updateTodo:r}))}),b((o,i,n)=>{var{id:e}=o.variables,t=s.findIndex(a=>a.id===e);if(t===-1)throw new Error("Mock delete failed for item id ".concat(e));return s.splice(t,1),i(n.data({deleteTodo:e}))})],A=w.setupWorker(...g);export{A as worker};