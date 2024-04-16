import { ItemList } from "./ItemList";

export const ResturantCategory = ({ data,display,setShowIndex}) => {


  const clickHandle =() =>{
    setShowIndex();
  }
  return (
    <div className="w-full mt-3 pb-3 md:border-2xl border-b-8 md:pb-2 border-slate-200">
      <div className="w-full flex justify-between md:my-5 font-bold md:text-xl cursor-pointer" onClick={clickHandle}>
        <span>{data.title}{'  '}({data.itemCards.length})</span>
        <span>{display ? "🔽" : ' 🔼'}</span>
      </div>
      <div>
         {display && <ItemList item={data.itemCards} />} 
      </div>
    </div>
  );
};
