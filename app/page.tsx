"use client"
import { parseAsBoolean, parseAsString, useQueryState } from "nuqs";


export default function Home() {
const [name, setName] = useQueryState(
  "name",
  parseAsString.withDefault("anbu")
);

const [isModalOpen, setIsModalOpen] = useQueryState(
  "isModalOpen",
parseAsBoolean);
  return (
    <>
    <h1>Waddup {name ?? "random visitor"}</h1>
    <input className="border-2 border-black" value={name ?? ""} 
    onChange={({target}) => setName(target.value)}/> <br />
    <button 
    onClick={() => setIsModalOpen((prev) => !prev)}
    >Toggle          
    </button>
    <p>{isModalOpen ? "modal open" : "modal closed"}</p>  
    </>
  );
}
