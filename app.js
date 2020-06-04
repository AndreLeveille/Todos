const json = [
  {
      id: 1,
      Book: "Jar City (Mýrin)",
      Author: "Niki Doumenc",
      Page_Count: 294
  },
  {
      id: 2,
      Book: "Skeleton Man",
      Author: "Lelah Kolodziejski",
      Page_Count: 343
  },
  {
      id: 3,
      Book: "Electra, My Love (Szerelmem, Elektra)",
      Author: "Rakel Kemshell",
      Page_Count: 359
  },
  {
      id: 4,
      Book: "Playmobil: The Secret of Pirate Island",
      Author: "Haydon Marran",
      Page_Count: 389
  },
  {
      id: 5,
      Book: "Delirious",
      Author: "Samantha Roper",
      Page_Count: 480
  },
  {
      id: 6,
      Book: "Move Over, Darling",
      Author: "Lou Fowls",
      Page_Count: 348
  },
  {
      id: 7,
      Book: "Vertical Limit",
      Author: "Eleanora Gimlet",
      Page_Count: 118
  },
  {
      id: 8,
      Book: "Short Game, The",
      Author: "Nickie Brekonridge",
      Page_Count: 130
  },
  {
      id: 9,
      Book: "Waiting...",
      Author: "Sofie Hynam",
      Page_Count: 362
  },
  {
      id: 10,
      Book: "Broken",
      Author: "Fayette Hake",
      Page_Count: 414
  }
]

let state = {
  originalBooks: [],
  books: [],
  bookSortAsc: false,
  isLoading: false,
  hasBeenCalled: false,
}

function renderHTML(id, text){
  document.getElementById(id).innerHTML = text ;
}

function renderBook(bk) {
    
  return `<div class='emp-card'>
              <h3>${bk.book_name} <span data-id='${bk.id}' onclick='remove(this)'>remove<span></h3>
              <div class='emp-info'>
                <p>Page Count: ${bk.book_pgCount}</p>
                <p>Author: ${bk.book_author}</p>
              </div>
            </div>`;
}

function remove(element) {
  const idOfBookToRemove = element.dataset.id;
    const { books } = state;
    state.books = books.filter((emp) => bk.id !== idOfBookToRemove);
    render();
  }

function renderBooks() {
  const { books, isLoading } = state;
  // if (isLoading) {
  //   return `<div class="lds-grid"><div></div><div></div><div></div><div>
  //   </div><div></div><div></div><div></div><div></div><div></div></div>`;
  // }
  if (books.length === 0) {
    return `<div id="noBooks">No Books</div>`;
  } else {
    //   bkStr = "";
    //   books.forEach((bk) => {
    //     bkStr += `<div>${bk.book_name}</div>`;
    //   });
    //  return bkStr;
    return books.reduce((bkStr, bk) => {
      return bkStr + renderBook(bk);
    }, "");
  }
}

function reset() {
  const { orignalBooks } = state;
  state.books = [...orignalBooks];
  render();
}

function buildBooks(arr) {
  const parent = document.getElementById('books')

  arr.forEach(item => {
    const child = document.createElement("DIV")
    child.innerHTML = "Book Title: " + item.Book
    child.classList.add("bk-card") // class style name here <--

    const grandchild = document.createElement("DIV")
    grandchild.innerHTML = "Author: " +  item.Author

    const grandchild2 = document.createElement("DIV")
    grandchild2.innerHTML = "Pages: " + item.Page_Count


    parent.appendChild(child)
    child.appendChild(grandchild)
    child.appendChild(grandchild2)
  })
}

function resetBooks() {
  // delete the books div
  const element = document.getElementById('books')
  element.parentElement.removeChild(element)
  
  const newBookDiv = document.createElement("DIV")
  newBookDiv.id = "books"
  
  document.body.appendChild(newBookDiv)
}

function getBooks() {

  if (!state.hasBeenCalled) {
    const noBooksEl = document.getElementById("noBooks")
    noBooksEl.parent.removeChild(noBooksEl)

    buildBooks(json)
    state.hasBeenCalled = true
  }

//   .getJSON("list.json", function(json) {
//     console.log(json); 
// });

  // axios
  //   .get("http://jsonplaceholder.typicode.com/todos")
  //   .then((response) => {
  //     state.books = response.data;
  //     state.originalBooks = response.data;
  //     console.log(response.data);
  //     render ();
  //   })
  //   .catch((error)=> {
  //     console.log(error);
  //   });
}

function sortByAuthor() {
  if (state.hasBeenCalled) {  
    resetBooks()

    const sortedJson = json.sort((a, b) => a.Author < b.Author ? -1 : 1)
    
    buildBooks(sortedJson)
  }
}






  



// state.bookSortAsc = !bookSortAsc;
        

function render() {
  renderHTML("books", renderBooks());
}

render ();











// console.log("loaded");
// let state = {
//   orignalEmployees: [], // IS NOT MEANT TO CHANGE
//   employees: [], //THIS CAN
//   nameSortAsc: false,
//   isLoading: false,
// };
// // Helper
// function renderHTML(id, text) {
//   document.getElementById(id).innerHTML = text;
// }

// function remove(element) {
//   const idOfUserToRemove = element.dataset.id;
//   const { employees } = state;
//   state.employees = employees.filter((emp) => emp.id !== idOfUserToRemove);
//   render();
// }
// // Helper/clean up code/ idea keeping my functions doing one thing

// // function isOverForty(emp) {
// //   return emp.employee_age > 40;
// // }
// function filterOverForty() {
//   console.log("clicked");
//   const { employees } = state;
//   const employeesOverForty = employees.filter((emp) => emp.employee_age > 40);
//   state.employees = employeesOverForty;
//   render();
// }

// function getEmployees() {
//   state.isLoading = true;
//   render();
//   axios
//     .get("http://dummy.restapiexample.com/api/v1/employees")
//     .then((response) => {
//       state.employees = response.data.data;
//       state.orignalEmployees = response.data.data;
//       state.isLoading = false;
//       console.log(response.data.data);
//       render();
//     })
//     .catch((e) => {
//       // reject
//       state.isLoading = false;
//       console.log(e);
//     });
// }
// function sortByIncome() {
//   const { employees } = state;
//   employees.sort((emp1, emp2) => {
//     return emp2.employee_salary - emp1.employee_salary;
//   });
//   console.log(employees);
//   render();
// }
// function sortByLastName() {
//   const { employees, nameSortAsc } = state;
//   if (nameSortAsc) {
//     employees.sort((a, b) => {
//       if (a.employee_name.split(" ")[1] > b.employee_name.split(" ")[1]) {
//         return 1;
//       } else if (
//         a.employee_name.split(" ")[1] < b.employee_name.split(" ")[1]
//       ) {
//         return -1;
//       } else {
//         return 0;
//       }
//     });
//   } else {
//     employees.sort((a, b) => {
//       if (a.employee_name.split(" ")[1] < b.employee_name.split(" ")[1]) {
//         return 1;
//       } else if (
//         a.employee_name.split(" ")[1] > b.employee_name.split(" ")[1]
//       ) {
//         return -1;
//       } else {
//         return 0;
//       }
//     });
//   }
//   state.nameSortAsc = !nameSortAsc;
//   console.log(state.nameSortAsc);
//   render();
// }
// function render() {
//   renderHTML("employees", renderEmployees());
// }
// render();

// });

