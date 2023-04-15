import React, { useEffect, useState } from "react";
import "./searchbar.css"
import { Search } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Spinner
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
function SearchBar() {
  

  const [text, setText] = useState();
  const [open, setOpen] = useState(false);
const [searchData,setSearchData]=useState()

  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState();
  const [loading,setLoading]=useState(false)
  
  //const [dataItem, setDataItem] = useState([data]);

  const handleChange = async (event) => {
   
    let searchString = event.target.value.toLocaleLowerCase();
    console.log(searchString, data);
    try {
      setLoading(true)
      const res = await axios.get(
        ""
      );
      console.log(res.data);
      // setSearchResult(
      //   res.data.filter((d) =>
      //     d.title.shortTitle.toLocaleLowerCase().includes(searchString)
      //   )
      // );
      setSearchData(res.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)

      console.log(error);
    }
    console.log("searchRes", searchResult);
  };
console.log("checking searchResult",searchResult)
  

  return (
    <>
      <div className="">
        <div className="" style={{width:"75%",height:"60px",borderRadius:"5px",padding:"10px"}}>
          <Input
          type='text'
          size='lg'
          style={{position:"relative",left:300,top:90}}
             placeholder="Search your car here..."
            
             onChange={handleChange}
          />
          <div className="">
            {/* <Search /> */}
          </div>
         
        </div>
        {loading?
        <Spinner
        zIndex={999}
        ml={850}
        mt={150}
      
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
      :
     
        <div className="" style={{width:"74%",backgroundColor:"white",height:"300px",borderRadius:"10px",position:"absolute",left:315,top:300,border:"1px solid grey",backgroundColor:"lightgray",textAlign:"center"}}>

          {searchResult && (
             <List className="" >
            
           

              <p>{searchData.floor}</p>
              <p>{searchData.slot}</p>

           
           </List>
          )}
        </div>
}
      </div>
           
    </>
  );
}

export default SearchBar;