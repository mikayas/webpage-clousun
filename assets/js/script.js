const btnTabTop = document.getElementById('btn-tab-form-top');
const btnTabBottom = document.getElementById('btn-tab-form-bottom');
const formCreate = document.getElementById('form-create-account');
const formLogin = document.getElementById('form-login-account');
const headCreate = document.getElementById('head-form-create');
const headLogin = document.getElementById('head-form-login');

headLogin.style.display = 'none'
formCreate.style.display = 'none'

function openForm(btn, formOpened, formClosed, headClosed, headOpened) {
   btn.addEventListener('click', () => {
      formOpened.style.display = 'block';
      formClosed.style.display = 'none';
      headClosed.style.display = 'none';
      headOpened.style.display = 'block'
   })
}

openForm(btnTabTop, formCreate, formLogin, headCreate, headLogin);
openForm(btnTabBottom, formLogin, formCreate, headLogin, headCreate);