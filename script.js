let interviewList = [];
let rejectedList = [];
let currentStatus = "all";

let total = document.getElementById("total");
let interviewCount = document.getElementById("interview");
let rejectedCount = document.getElementById("rejected");
const totalJob1 = document.getElementById("total-job1");
const totalJob2 = document.getElementById("total-job2");

let allTotal = document.getElementById("allCount");
let interviewTotal = document.getElementById("interviewCount");
let rejectedTotal = document.getElementById("rejectedCount");

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const mainContainer = document.querySelector("main");
const allCardsSection = document.getElementById("allCards");
const filterSection = document.getElementById("filtered-section");
const noJobSection = document.getElementById("no-job");

// calculation function

function calculation() {
  total.innerText = allCardsSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
  allTotal.innerText = total.innerText;
  interviewTotal.innerText = interviewCount.innerText;
  rejectedTotal.innerText = rejectedCount.innerText;
  totalJob1.innerText = total.innerText;
  totalJob2.innerText=total.innerText;
}
calculation();


// hide count function

function hideCount()
{
    document.querySelector(".all-count-class").classList.add("hidden");
    document.querySelector(".interview-count-class").classList.add("hidden");
    document.querySelector(".rejected-count-class").classList.add("hidden");
}

// toggle function

function toggleStyle(id) {
  // add all the button
  allFilterBtn.classList.add("bg-base-100", "text-gray-500");
  interviewFilterBtn.classList.add("bg-base-100", "text-gray-500");
  rejectedFilterBtn.classList.add("bg-base-100", "text-gray-500");

  // remove all the button
  allFilterBtn.classList.remove("btn-info", "text-white");
  interviewFilterBtn.classList.remove("btn-info", "text-white");
  rejectedFilterBtn.classList.remove("btn-info", "text-white");
  // specific btn
  selected = document.getElementById(id);

  currentStatus = id;
  // console.log(currentStatus);

  selected.classList.remove("bg-base-100", "text-gray-500");
  selected.classList.add("btn-info");
// all hidden

    allCardsSection.classList.add("hidden");
    filterSection.classList.add("hidden");
    noJobSection.classList.add("hidden");
    hideCount();
    // show only
    if(id==="interview-filter-btn")
    {
        document.querySelector(".interview-count-class").classList.remove("hidden");

        if(interviewList.length === 0)
        {
            noJobSection.classList.remove("hidden");
            
        }
        else
        {
            filterSection.classList.remove("hidden");
            renderInterview();
           
        }
    }

    else if(id==="rejected-filter-btn")
    {
        document.querySelector(".rejected-count-class").classList.remove("hidden");
        if(rejectedList.length === 0)
        {
            noJobSection.classList.remove("hidden");

        }
        else
        {
            filterSection.classList.remove("hidden");
         
            renderRejected();
        }
    }
    // else if(id==="all-filter-btn")
    // {
    //     document.querySelector(".all-count-class").classList.remove("hidden");
    //     allCardsSection.classList.remove("hidden"); 
    // }
    else if(id==="all-filter-btn")
    {
        document.querySelector(".all-count-class").classList.remove("hidden");
        if(allCardsSection.children.length===0)
        {
          noJobSection.classList.remove("hidden");
        }
        else
        {
          allCardsSection.classList.remove("hidden"); 
        }
    }
}

// main function

mainContainer.addEventListener("click", function (event) {
  
  if (event.target.classList.contains("interview-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".companyName").innerText;
    const jobDesignation =
      parentNode.querySelector(".jobDesignation").innerText;
    const jobType = parentNode.querySelector(".jobType").innerText;
    const statusName = parentNode.querySelector(".statusName").innerText;
    const notes = parentNode.querySelector(".notes").innerText;

    parentNode.querySelector(".statusName").innerText = "INTERVIEW";
    const cardInfo = {
      companyName,
      jobDesignation,
      jobType,
      statusName: "INTERVIEW",
      notes,
    };
    const companyExist = interviewList.find(
      (item) => item.companyName === cardInfo.companyName,
    );
    if (!companyExist) {
      interviewList.push(cardInfo);
    }

    // remove item from rejected List

    rejectedList = rejectedList.filter(
      (item) => item.companyName != cardInfo.companyName,
    );

    if (currentStatus === "rejected-filter-btn") {
      renderRejected();
    }
    calculation();
  } 
  else if (event.target.classList.contains("rejected-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".companyName").innerText;
    const jobDesignation =
      parentNode.querySelector(".jobDesignation").innerText;
    const jobType = parentNode.querySelector(".jobType").innerText;
    const statusName = parentNode.querySelector(".statusName").innerText;
    const notes = parentNode.querySelector(".notes").innerText;

    parentNode.querySelector(".statusName").innerText = "REJECTED";
    const cardInfo = {
      companyName,
      jobDesignation,
      jobType,
      statusName: "REJECTED",
      notes,
    };
    const companyExist = rejectedList.find(
      (item) => item.companyName === cardInfo.companyName,
    );
    if (!companyExist) {
      rejectedList.push(cardInfo);
    }

    interviewList = interviewList.filter(
      (item) => item.companyName != cardInfo.companyName,
    );

    if (currentStatus === "interview-filter-btn") {
      renderInterview();
    }
    calculation();
  }


else if(event.target.closest(".delete-btn"))
{
  let card;

  if(currentStatus==="interview-filter-btn" || currentStatus==="rejected-filter-btn")
  {
    card=event.target.closest("div[data-company]");
  }
  else
  {
    card=event.target.closest(".card-section");
  }

  if(!card) return;

  if(currentStatus==="interview-filter-btn")
  {
    const company=card.getAttribute("data-company");
    interviewList=interviewList.filter(item=>item.companyName!==company);
    renderInterview();
  }
  else if(currentStatus==="rejected-filter-btn")
  {
    const company=card.getAttribute("data-company");
    rejectedList=rejectedList.filter(item=> item.companyName!==company);
    renderRejected();
  }
  else
  {
    card.remove();
  }
  calculation();

}


  
});

// function render interview

function renderInterview() {
  filterSection.innerHTML = " ";
  for (let interview of interviewList) {
   
    let divSection = document.createElement("div");
    divSection.setAttribute("data-company",interview.companyName);
    divSection.className =
      "flex justify-between  bg-base-200 border-gray-300 p-6 rounded-xl";
    
    divSection.innerHTML = `
        
           <!-- Main part 1 -->
                <div class="space-y-6">
                <div>
                    <h2 class="text[#002C5C] text-xl companyName">${interview.companyName}</h2>
                    <p class="text-[#64748B] text-lg jobDesignation">${interview.jobDesignation}</p>
                </div>
                <div class="">
                    <span class="text-[#64748B] text-sm jobType">${interview.jobType}</span>
                   
                </div>
                <div>
               
                     <p class="btn border border-green-500 p-2 rounded-md text-green-500 font-semi-bold statusName">${interview.statusName}</p>
                     <br>
                    <p class="text-[#323B49] text-sm notes" >${interview.notes}</p>
                </div>
                <div>
                    <!-- class="border  border-green-500 text-green-600 text-bold" -->
                    <button class="btn border-green-500 text-green-600 text-bold interview-btn " >INTERVIEW</button>
                    <button class="btn border-red-500 text-red-600 text-bold rejected-btn ">REJECTED</button>
                </div>
            </div>
            <!-- Main part 2 -->
            <div class="card-delete">
                <button id="" class="btn rounded-full"><i class="fa-regular fa-trash-can delete-btn"></i></button>
            </div>
            </div>
        
      `;
    // pushed as a child to filter section
    filterSection.appendChild(divSection);
  }
}

// function render rejected

function renderRejected() {
  filterSection.innerHTML = " ";
  for (let rejected of rejectedList) {
    
    let divSection = document.createElement("div");
    divSection.setAttribute("data-company",rejected.companyName);
    divSection.className =
      "flex justify-between  bg-base-200 border-gray-300 p-6 rounded-xl";
    divSection.innerHTML = `
        
           <!-- Main part 1 -->
                <div class="space-y-6">
                <div>
                    <h2 class="text[#002C5C] text-xl companyName">${rejected.companyName}</h2>
                    <p class="text-[#64748B] text-lg jobDesignation">${rejected.jobDesignation}</p>
                </div>
                <div class="">
                    <span class="text-[#64748B] text-sm jobType">${rejected.jobType}</span>
                   
                </div>
                <div>
                     <p class="btn border-red-500 text-red-600 text-bold statusName">${rejected.statusName}</p>
                     <br>
                    <p class="text-[#323B49] text-sm notes" >${rejected.notes}</p>
                </div>
                <div>
                    <!-- class="border border-green-500 p-2 rounded-md text-green-500 font-semi-bold" -->
                    <button class="btn border-green-500 text-green-600 text-bold interview-btn " >INTERVIEW</button>
                    <button class="btn border-red-500 text-red-600 text-bold rejected-btn ">REJECTED</button>
                </div>
            </div>
            <!-- Main part 2 -->
            <div class="card-delete">
                <button id="" class="btn rounded-full"><i class="fa-regular fa-trash-can delete-btn"></i></button>
            </div>
            </div>
        
      `;
    // pushed as a child to filter section
    filterSection.appendChild(divSection);
  }
}

