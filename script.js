const myDiv=document.getElementById('main');
const inp=document.getElementById('search');
const fetchdata=()=>{
    fetch(`https://www.omdbapi.com/?i=tt3896198&s=${inp.value}&apikey=ed15972e`)
    .then((res)=>res.json())
    .then((data)=>display(data.Search))
    .catch((err)=>console.log(err))
}
document.getElementById('ser').addEventListener('click',fetchdata);
const display=(arr)=>{
    myDiv.textContent=''
    arr.forEach((ele)=>{
    const newDiv=document.createElement('div')
    newDiv.classList.add('movie')
    const image=document.createElement('img')
    image.src=ele.Poster;
    image.title=ele.Title;
    const title=document.createElement('h2')
    title.textContent=ele.Title;
    const year=document.createElement('p')
    year.textContent='Year: '+ele.Year
    newDiv.append(image,title,year);
    myDiv.appendChild(newDiv)
    })
    
}