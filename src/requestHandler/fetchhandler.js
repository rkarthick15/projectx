import axios from "axios";
import  cheerio  from "cheerio";


const fetchData=async (url)=>{
    var data;
    
    if(url.includes('flipkart')){
        
        await axios.get(url).then((response)=>{
           data = cheerio.load(response.data);
          let image = data('._3kidJX img').attr('src');
          let title = cheerio.text(data('.B_NuCI'));
          data = {price :cheerio.text(data('._16Jk6d')),imageSrc:image,title:title}
          return data;
        }).catch((err)=>{
          console.log(err);
        })
    //    await axios.get(`http://localhost:8000/flipkart?url=${url}`,{crossDoman:true}).then((response)=>{
        //console.error('error:');
        //console.log('statusCode:',response&&response.statusCode);
      //  data= response.data;
        //});
    }else if(url.includes('amazon')){
        url = url.split('.in')[1];
       // fetch(`/amazon.in/${url}`)
        // await axios.get(`http://localhost:8000/amazon?url=${url}`,{crossDoman:true}).then((response)=>{
        // //console.error('error:');
        // //console.log('statusCode:',response&&response.statusCode);
        // data= response.data;
        // });
    }
    console.log("out"+data);
    return data;
  //  const xhr = new XMLHttpRequest();
    //xhr.open("POST", 'http://localhost:8000/product');
    //xhr._setData(url)
    //xhr.setRequestHeader('Access-Control-Allow-Origin','*');
    //await xhr.send(url);
    
    /* xhr.onload = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const data = xhr.response;
        return data;
      } else {
        console.log(`Error: ${xhr.status}`);
      }
    }; */

//     fetch(`http://localhost:8000/product/${url}`, {

//     method: 'GET',
    



//     headers: {
//         'Access-Control-Allow-Origin':'*'
//     }

// }).then((response)=>{
//     //response.text().then((data) => {
//         console.log("data:" + response.body);
//         return response.body
// //})
//})
}

export default fetchData;