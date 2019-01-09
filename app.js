// init instance github class
let github = new Github();

// init instance ui class
let ui = new UI();

const form = document.querySelector('form');

// console.log(form);

form.addEventListener('submit', event => {
  event.preventDefault();
  let user = event.target.search.value;
  console.log(user);
  if(user !== ''){
    github.getUser(user)
      .then(data => {
          if(data.profile.message === 'Not Found'){
            // console.log(data)
            ui.showAlert('User Not Found', 'alert alert-danger')
          }else{
            // console.log(data)
            ui.showUser(data.profile);
            ui.showRepos(data.repos);
          }
      });
  } else {
    ui.clearProfile();
  }
});

