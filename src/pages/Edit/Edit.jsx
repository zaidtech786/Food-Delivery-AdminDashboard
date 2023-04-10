import "./Edit.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Edit = () => {
    const [file, setFile] = useState();
  const [info, setInfo] = useState({});
  const [files, setFiles] = useState([]);
  const [name,setName] = useState("")
  const [data,setData] = useState([]);
  const [productInfo, setProductInfo] = useState({
    name,
    discount:"",
    price: "",
    stock:"",
    desc:"",
    category:"",
    isFeatured:""
  });
  const {id} = useParams();

  // Getting single hotel data
  const singleProductData = () => { 
    axios.get(`http://localhost:4000/food/getfood/${id}`)
    .then(res => {
      console.log("Single Product Data :",res.data)
      setProductInfo(res.data.food)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    singleProductData()
  },[])


  const handleChange = (e) => {
    console.log(e.target.name + " : " + "" + e.target.value);
    setProductInfo({ ...productInfo, [e.target.name]: e.target.value });
  };

  // const handleClick = async (e) => {
  //   // console.log(file)
  //   console.log("HotelInfo :", productInfo);
  //   e.preventDefault();

  //   try {
  //     const imgList = await Promise.all(
  //       Object.values(file).map(async (f) => {
  //         const data = new FormData();
  //         data.append("file", f);
  //         data.append("upload_preset", "Zaid-Bolte-Chote");
  //         data.append("cloud_name", "zaidsiddiqui");
  //         const res = await fetch(
  //           "https://api.cloudinary.com/v1_1/zaidsiddiqui/image/upload",
  //           {
  //             method: "post",
  //             body: data,
  //           }
  //         );
  //         const datas = await res.json();
  //         const { url } = datas;
  //         return url;
  //         //  setFiles(datas.url)
  //       })
  //     );
  //     // console.log("files",imgList)
  //     //  Posting Data to database
  //     axios
  //       .post("http://localhost:5000/hotel/addhotel", {
  //         ...productInfo,
  //         photos: imgList,
  //       })
  //       .then((res) => {
  //         console.log("REs:", res.data);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };


  // Updating Food Item
  const updateFood = (e) => {
    e.preventDefault()
    console.log(id)
    axios.put(`http://localhost:4000/food/updatefood/${id}`,{
      ...productInfo
    })
    .then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log(err)
    })

  }
  return (
    <div className="new">
    <Sidebar />
    <div className="newContainer">
      <Navbar />
      <div className="top">
        <h1>title</h1>
      </div>
      <div className="bottom">
        <div className="left">
          {files.map((file) => {
            return (
              <>
                <img
                  src={file}
                  alt=""
                />
              </>
            );
          })}
        </div>
        <div className="right">
          <form>
            <div className="formInput">
              <label htmlFor="file">
                Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="file"
                multiple
                onChange={(e) => setFile(e.target.files)}
                style={{ display: "none" }}
              />
            </div>

            <div className="formInput">
                <label>Name</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  value={productInfo.name}
                  placeholder="Enter Food Name"
                />
              </div>
              <div className="formInput">
                <label>Category</label>
                <input
                  onChange={handleChange}
                  type="text"
                  value={productInfo.category}
                  name="category"
                  
                  placeholder="Enter Category"
                />
              </div>
              <div className="formInput">
                <label>Price</label>
                <input
                  onChange={handleChange}
                  type="number"
                  value={productInfo.price}
                  name="price"
                  placeholder="Enter Price"
                />
              </div>
          
              <div className="formInput">
                <label>Description</label>
                <input
                  onChange={handleChange}
                  type="text"
                 value={productInfo.desc}
                  name="desc"
                  placeholder="Enter Description"
                />
              </div>
              <div className="formInput">
                <label>Discount</label>
                <input
                  onChange={handleChange}
                  type="number"
                   value={productInfo.discount}
                  name="discount"
                  placeholder="Enter discount"
                />
              </div>
              <div className="formInput">
                <label>Stock</label>
                <input
                  onChange={handleChange}
                  type="number"
                  value={productInfo.stock}
                  name="stock"
                  placeholder="Enter stock"
                />
              </div>

              <div className="formInput">
                <lable> isFeatured</lable>
                <select  onChange={handleChange} name="isFeatured" value={productInfo.isFeatured}>
                        <option value="true" >True </option>
                        <option value="false">False </option>
                  
                </select>
              </div>

            <button onClick={updateFood}>Edit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Edit