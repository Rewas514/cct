import { ReactComponent as Tick1 }  from './tick1.svg';
import { ReactComponent as Tick2 }  from './tick2.svg';
import './App.css';

function myFunction1() {
  var x1 = document.getElementById("click1");
  var x2 = document.getElementById("click2");
  var x3 = document.getElementById("click3");
  var x4 = document.getElementById("click4");
  var s1 = document.getElementById("statusline1");
  var s2 = document.getElementById("statusline2");
  var s3 = document.getElementById("statusline3");
  var s4 = document.getElementById("statusline4");
  if (x1.style.display === "none") {
    x1.style.display = "block";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
    s1.classList.add("active");
    s2.classList.remove("active");
    s3.classList.remove("active");
    s4.classList.remove("active");
  } else {
    x1.style.display = "none";
    s1.classList.remove("active");
  }
}

function myFunction2() {
  var x1 = document.getElementById("click1");
  var x2 = document.getElementById("click2");
  var x3 = document.getElementById("click3");
  var x4 = document.getElementById("click4");
  var s1 = document.getElementById("statusline1");
  var s2 = document.getElementById("statusline2");
  var s3 = document.getElementById("statusline3");
  var s4 = document.getElementById("statusline4");
  if (x2.style.display === "none") {
    x2.style.display = "block";
    x1.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
    s2.classList.add("active");
    s1.classList.remove("active");
    s3.classList.remove("active");
    s4.classList.remove("active");
  } else {
    x2.style.display = "none";
    s2.classList.remove("active");
  }
  
}

function myFunction3() {
  var x1 = document.getElementById("click1");
  var x2 = document.getElementById("click2");
  var x3 = document.getElementById("click3");
  var x4 = document.getElementById("click4");
  var s1 = document.getElementById("statusline1");
  var s2 = document.getElementById("statusline2");
  var s3 = document.getElementById("statusline3");
  var s4 = document.getElementById("statusline4");
  if (x3.style.display === "none") {
    x3.style.display = "block";
    x1.style.display = "none";
    x2.style.display = "none";
    x4.style.display = "none";
    s3.classList.add("active");
    s1.classList.remove("active");
    s2.classList.remove("active");
    s4.classList.remove("active");
  } else {
    x3.style.display = "none";
    s3.classList.remove("active");
  }
}

function myFunction4() {
  var x1 = document.getElementById("click1");
  var x2 = document.getElementById("click2");
  var x3 = document.getElementById("click3");
  var x4 = document.getElementById("click4");
  var s1 = document.getElementById("statusline1");
  var s2 = document.getElementById("statusline2");
  var s3 = document.getElementById("statusline3");
  var s4 = document.getElementById("statusline4");
  if (x4.style.display === "none") {
    x4.style.display = "block";
    x1.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "none";
    s4.classList.add("active");
    s1.classList.remove("active");
    s2.classList.remove("active");
    s3.classList.remove("active");
  } else {
    x4.style.display = "none";
    s4.classList.remove("active");
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <div className="ccttitle">
      CCT Lab Process
      </div>

      <div className="sections">
    
      <div className="group" onClick={myFunction1}>
        <div className="numbersquare">
          1
        </div>
        <div className="group-text">
        Build test task
        </div>
        <div id="statusline1"></div>

      </div>
      <div id="click1" style={{display: "none"}}>
        <div className="sublist">
            <div className="tickvector tickgroup"><Tick1/></div>
            <div className="tickicon tickgroup"><Tick2/></div>
            <div className="subtext">Create repository</div>
        </div>
        <div className="sublist">
            <div className="tickvector tickgroup"><Tick1/></div>
            <div className="tickicon tickgroup"><Tick2/></div>
            <div className="subtext">Implement designs</div>
            </div>
            <div className="sublist">
              <div className="tickvector tickgroup"><Tick1/></div>
              <div className="tickicon tickgroup"><Tick2/></div>
              <div className="subtext">Implement functionality</div>
            </div>
      </div>
    

      <div className="group" onClick={myFunction2}>
      <div className="numbersquare">
          2
        </div>
        <div className="group-text">
        Submit your test task
        </div>
        <div id="statusline2"></div>
        
      </div>
      <div id="click2" style={{display: "none"}}>
        <div className="sublist">
            <div className="tickvector tickgroup"><Tick1/></div>
            <div className="tickicon tickgroup"><Tick2/></div>
            <div className="subtext">Open email client</div>
        </div>
        <div className="sublist">
            <div className="tickvector tickgroup"><Tick1/></div>
            <div className="tickicon tickgroup"><Tick2/></div>
            <div className="subtext">Sent link with information to careers@cornercasetech.com</div>
            </div>
      </div>

      <div className="group" onClick={myFunction3}>
      <div className="numbersquare">
          3
        </div>
        <div className="group-text">
        Participate in tech interview
        </div>
        <div id="statusline3"></div>
        
      </div>
      <div id="click3" style={{display: "none"}}>
        <div className="sublist">
            <div className="tickvector tickgroup"><Tick1/></div>
            <div className="tickicon tickgroup"><Tick2/></div>
            <div className="subtext">Talk with HR</div>
        </div>
        <div className="sublist">
            <div className="tickvector tickgroup"><Tick1/></div>
            <div className="tickicon tickgroup"><Tick2/></div>
            <div className="subtext">Talk with Tech team</div>
            </div>
      </div>

      <div className="group" onClick={myFunction4}>
      <div className="numbersquare">
          4
        </div>
        <div className="group-text">
        Receive answer
        </div>
        <div id="statusline4"></div>
      </div>
      <div id="click4" style={{display: "none"}}>
        <div className="sublist">
            <div className="tickvector tickgroup"><Tick1/></div>
            <div className="tickicon tickgroup"><Tick2/></div>
            <div className="subtext">Receive answers</div>
        </div>
        <div className="sublist">
            <div className="tickgroup tickvector"><Tick1/></div>
            <div className="tickgroup tickicon "><Tick2/></div>
            <div className="subtext">Start your IT career</div>
            </div>
      </div>
      </div>
      </header>
    </div>

    
  );
}

export default App;
