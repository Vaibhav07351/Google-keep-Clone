const btn = document.getElementById("btn");

const updatelsdata = () =>
{
    const textareadata= document.querySelectorAll('textarea');
    const arrdata=[];

    textareadata.forEach( (eachTAdata)=>
    {
        return arrdata.push(eachTAdata.value);
    })
                          //same(key) - values in 1 array
    localStorage.setItem('arrdata',JSON.stringify(arrdata));

}

const addnotefn = (text = "") => {
  const note = document.createElement('div');
  note.classList.add('note');

  const htmlData = `
    <div class="operation">
        <button class="edit"> <i class="fa-solid fa-pen-to-square"></i></button>
        <button class="delete"> <i class="fa-solid fa-trash"></i> </button>
    </div>
     
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="textarea ${text ? "hidden" : ""}"></textarea>
  `;

  note.insertAdjacentHTML('afterbegin', htmlData);
  const section = document.getElementById('section');
  section.appendChild(note);

  const editbtn = note.querySelector('.edit');
  const deletebtn = note.querySelector('.delete');
  const maindiv = note.querySelector('.main');
  const textarea = note.querySelector('textarea');

  //delete icon work
  deletebtn.addEventListener('click', () => {
    note.remove();
    updatelsdata();
  });

  //edit and save work  toggle

  textarea.value=text;
  maindiv.innerHTML=text;


  editbtn.addEventListener('click',()=>
  {
    maindiv.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
  })

  textarea.addEventListener('change',(event)=>
  {
    const value = event.target.value;
    maindiv.innerHTML=value;

    updatelsdata();
  })

  

}



//getting data back from local storage

const arrdata=JSON.parse(localStorage.getItem('arrdata'));

if(arrdata)
{
    arrdata.forEach((eachTAdata)=>
    {
        addnotefn(eachTAdata);
    })
}

btn.addEventListener('click', () => {
  addnotefn();
});
