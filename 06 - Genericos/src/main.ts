import './style.css'


function getData<T>(data: T): T{
  return data;
}

const number = getData<number>(42);
const string = getData<string>("Hello, world");

console.log({
  number,
  string
})