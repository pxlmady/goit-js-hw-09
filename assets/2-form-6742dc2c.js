document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".feedback-form"),m="feedback-form-state",e=JSON.parse(localStorage.getItem(m))||{};document.getElementById("emailInput").value=e.email||"",document.getElementById("messageInput").value=e.message||"",n.addEventListener("input",function(t){e[t.target.name]=t.target.value.trim(),localStorage.setItem(m,JSON.stringify(e))}),n.addEventListener("submit",function(t){t.preventDefault(),document.getElementById("emailInput").value.trim()&&document.getElementById("messageInput").value.trim()&&(console.log({email:document.getElementById("emailInput").value.trim(),message:document.getElementById("messageInput").value.trim()}),localStorage.removeItem(m),n.reset())})});
//# sourceMappingURL=2-form-6742dc2c.js.map