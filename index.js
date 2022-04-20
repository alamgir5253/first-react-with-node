const express = require('express')
var cors = require('cors')
const app = express();
const port = process.env.PROT || 4000;
app.use(cors())
app.use(express.json())
app.get('/', (req, res) =>{
  res.send('hello this alomgir hossain and this is my first node thanks for this node ')
})
const family =[
  {id:1, name:'alamgir', email:'alamgir5253@gma.com', phone: "01827485467"},
  {id:2, name:'shondha', email:'alam5253@gma.com', phone: "01827485467"},
  {id:3, name:'amaena', email:'amena5253@gma.com', phone: "01827485467"},
  {id:4, name:'sabbir', email:'amir5253@gma.com', phone: "01234385467"},
  {id:5, name:'aysha', email:'shondhe5253@gma.com', phone: "018274223467"},
  {id:6, name:'janoin', email:'jannat5253@gma.com', phone: "01827425467"},
]
app.get('/users', (req, res) =>{
  if(req.query.name){
    const search = req.query.name.toLocaleLowerCase()
    const matched = family.filter(user => user.name.toLocaleLowerCase().includes(search))
    res.send(matched)
  }
  res.send(family)
})
app.get('/user/:id', (req,res) =>{
  console.log(req.params);
  const id = parseFloat(req.params.id)
  const user = family.find(u=> u.id === id)
  res.send(user)
})
app.post('/user', (req,res) =>{
  console.log('request', req.body);
  const user = req.body
  user.id = family.length + 1
  family.push(user)
  res.send(user)
})
app.listen(port, ()=>{
  console.log(`listen to port ${port}`);
})