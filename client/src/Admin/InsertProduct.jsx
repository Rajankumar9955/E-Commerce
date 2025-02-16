import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from "axios"


import BASE_URL from "../config"  //this is common api, this api in config folder
const InsertProduct=()=>{
    const [input,setInput]=useState({});
    const [images,setimages]=useState([]);
    const [selectCategory, setSelectCategory]=useState("");
    const [subCategories, setSubCategories]=useState([]);
    const [selectSubCategory, setSelectSubCategory]=useState("");

     
    const categories={
        Furniture: ["Living Room Furniture", "Bedroom Furniture", "Dining Room Furniture", "Office Furniture", "Kids Furniture"],
        Handbag: ["Tote Bags", "Shoulder Bags", "Crossbody Bags","Backpacks", "Belt Bags"],
        Books: ["Fiction", "Non-Fiction", "Children's Books", "Academic & Educational", "Comics & Graphic Novels", "Religion & Spirituality","Arts & Entertainment", "Cookbooks & Food", "Poetry & Drama"],
        Tech:["Computers & Accessories", "Mobile Phones", "Audio & Sound Devices", "Gaming & Accessories", "Smart Home & IoT Devices", "Wearable Technology", "Cameras & Photography Equipment", "Office & Productivity", "Electric Vehicles & Accessories"],
        Sneakers: ["Athletic Sneakers", "Casual & Lifestyle Sneakers", "Fashion & Designer Sneakers", "Streetwear & Hype Sneakers", "Outdoor & Hiking Sneakers"],
        Travels: ["Luggage & Bags", "Travel Accessories", "Electronics & Gadgets", "Toiletries & Personal Care", "Safety & Security", "Travel Clothing & Footwear"],
    }

    const handleCategoryChange=(e)=>{
        const category=e.target.value;
        setSelectCategory(category);
        setSubCategories(categories[category] || []);
        setSelectSubCategory("");
    }

    const handleSubCategoryChange=(e)=>{
        setSelectSubCategory(e.target.value)
    }

     const handleInput=(e)=>{
        const {name,value}=e.target;
        setInput(values=>({...values, [name]:value}))
        console.log(input)
     }

     //images upload here
     const handleFileChange=(e)=>{
        setimages([...e.target.files])
     }


     const handleSubmit=async(e)=>{
        e.preventDefault();
        const formData=new FormData();
        for(let key in input){
          formData.append(key,input[key]);
        }
        formData.append("category", selectCategory);
        formData.append("subcategory", selectSubCategory);
        for(let i=0; i<images.length; i++)
        {
          formData.append("files", images[i]);
        }
        try {
          let api=`${BASE_URL}/admin/productInsert`;
          await axios.post(api, formData,{
            headers:{'Content-Type':"multipart/form-data"}
          })
          alert("DATA UPLOADED")
        } catch (error) {
           console.log(error);
        }

     }
    

    return(
        <>
        <h3  style={{ marginLeft:"16%",marginTop:"25px",fontFamily:"cursive", fontWeight:"bold"}}>INSERT PRODUCTS</h3>
        <div style={{width:"90%"}}>
            <div style={{marginLeft:"30px", marginTop:"15px"}}>
   
      <Row >
        <div style={{width:"325px"}}>
        <Col>

        <Form.Select size="lg" className="mb-2" value={selectCategory}  onChange={handleCategoryChange}>
        <option value="">Select Product Category</option>
         {Object.keys(categories).map((cat)=>(
          <option key={cat} value={cat}>{cat}</option>
         ))}
        </Form.Select>
        
        <Form.Select size="lg" className="mb-2" value={selectSubCategory} onChange={handleSubCategoryChange}   disabled={!selectCategory}>
        <option value="">Select Category</option>
        {subCategories.map((sub)=>(
          <option key={sub} value={sub}>{sub}</option>
        ))}
       </Form.Select>

        <FloatingLabel controlId="floatingInput" label="Enter Product Name"  className="mb-1">
        <Form.Control type="text" placeholder="name@example.com" name='productname' value={input.productname}onChange={handleInput}/>
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Enter Product Brand"  className="mb-1">
        <Form.Control type="text" placeholder="Enter Product Brand" name='productbrand' value={input.productbrand } onChange={handleInput} />
      </FloatingLabel>

        </Col>
        </div>

       <div style={{width:"325px"}} align="center">
        <Col>

        <FloatingLabel controlId="floatingInput" label="Enter Product Price:₹" className="mb-1">
        <Form.Control type="number" placeholder="name@example.com" name='productprice' value={input.productprice} onChange={handleInput} />
      </FloatingLabel>


      <FloatingLabel controlId="floatingTextarea2" label="Product Description" className="mb-1">
        <Form.Control as="textarea" placeholder="Product Description" style={{ height: '108px' }} name='description' value={input.description} onChange={handleInput}/>
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Upload Images" className="mb-1">
        <Form.Control type="file" multiple placeholder="Upload Images" onChange={handleFileChange} />
      </FloatingLabel>

        <Button variant='success' onClick={handleSubmit} style={{marginBottom:"5px",marginTop:"5px"}}>Now Insert!</Button>
        </Col>
        </div>
      </Row>
    
    </div>
    </div>
        </>
    )
}
export default InsertProduct