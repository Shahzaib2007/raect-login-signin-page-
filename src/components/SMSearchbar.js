import { useState } from "react";

export default function SMSearchbar(props) {
  const { searchList, label, onSearch } = props;

  const [selected, setSelected] = useState("");

  const searchfunction = () =>{
      let filter = document.getElementById('myinput').value.toUpperCase();
      
      let mytable = document.getElementById('mytable');

      let tr = mytable.getElementsByTagName('tr');

      for(var i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[0];

        if(td){
          let textvalue = td.textContent || td.innerHTML;

          if(textvalue.toUpperCase ().indexof(filter) > -1){
            tr[i].style.display = "" ;
          }else{
            tr[i].style.display = "none";


          }
        }
      }
  }
  

  let searchVal = (e) => {
    onSearch(selected, e);
  };

  return (
    <>
      <div className="d-flex border rounded searchBox">
        <div>
          <input
            className="searchInp"
            onChange={(e) => searchVal(e.target.value)}
            placeholder={label ?? "Search ..."}
            id="myinput"
            onKeyUp={searchfunction()}
          />
        </div>
        <div>
          <select
            className="searchSelect"
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="">Select</option>
            {searchList.map((x, i) => (
              <option key={i} value={x.key}>
                {x.displayName}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
