import React, { useEffect, useState } from "react";
import "./searchbar.css"
import { Search } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
function SearchBar() {
  

  const [text, setText] = useState();
  const [open, setOpen] = useState(false);


  const defaultSearchData = [
    {
      id: 1,
      title: 'tshirts',
    },
    {
      id: 2,
      title: 'shirts',
    },
    {
      id: 3,
      title: 'activewear',
    },
    {
      id: 4,
      title: 'men',
    },
    {
      id: 5,
      title: 'women',
    },
    {
      id: 6,
      title: 'bottomwear',
    },
    {
      id: 7,
      title: 'trousers',
    },
    {
      id: 8,
      title: 'jeans',
    },
    {
      id: 9,
      title: 'shorts',
    },
    {
      id: 10,
      title: 'toys',
    },
  ];

  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState(defaultSearchData);
  
  //const [dataItem, setDataItem] = useState([data]);

  const handleChange = async (event) => {
     let searchString = event.target.value.toLocaleLowerCase();
     console.log("searchstring",searchString)

    if (searchString && searchString.length > 0) {

      setSearchResult(
        defaultSearchData?.filter(d =>
          d?.title?.toLocaleLowerCase().includes(searchString),
        ),
      );
    } else if (searchString== null) {
      console.log('checkkkkkk----------------');
      setSearchResult(defaultSearchData);
    }

  //  setOpen(false)
    // let searchString = event.target.value.toLocaleLowerCase();
    // console.log(searchString, data);
    // try {
    //   // const res = await axios.get(
    //   //   "https://flipkart-clone3.herokuapp.com/db/products"
    //   // );
    //   console.log(res.data);
    //   setSearchResult(
    //     res.data.filter((d) =>
    //       d.title.shortTitle.toLocaleLowerCase().includes(searchString)
    //     )
    //   );
    // } catch (error) {
    //   console.log(error);
    // }
    // console.log("searchRes", searchResult);
  };
console.log("checking searchResult",searchResult)
  

  return (
    <>
      <div className="">
        <div className="" style={{width:"75%",height:"50px",borderRadius:"5px",padding:"10px"}}>
          <Input
          type='text'
          size='lg'
          style={{position:"relative",left:300,top:100}}
             placeholder="Search..."
            
             onChange={handleChange}
          />
          <div className="">
            {/* <Search /> */}
          </div>
         
        </div>
        <hr />
        <div className="" style={{width:"70%",backgroundColor:"white",height:"300px",borderRadius:"5px",position:"absolute",left:300,top:300}}>
          {searchResult && (
             <List className="" >
            
             {
               // data
               //   .filter((product) =>
               //     product.id.toLowerCase().includes(text.toLowerCase())
               //   )

               searchResult.map((el) => (
                 <> <List > 
                     {/* <Link
                       to={`/products/${product.id}`}
                       style={{ textDecoration: "none", color: "inherit" }}
                       onClick={() => setOpen(true)}
                     > */}

                    <p>{el.title}</p>  
                     {/* </Link> */}
                   </List>
                 </>
               ))
             }
           </List>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchBar;