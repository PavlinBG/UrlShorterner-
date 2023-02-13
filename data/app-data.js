let urls =[];
 function seedSampleData(){
   urls.lenght = 0; //cleanup
   
   urls.push({
     url:  'https://www.google.com', 
     shortCode: 'go' ,
     dateCreated: new Date('2023-02-11T11:06:56'),
     visits: 9
   })

 urls.push({
     url:  'https://www.wikipedia.org/', 
     shortCode: 'wiki' ,
     dateCreated: new Date('2023-02-11T11:06:36'),
     visits: 19
   })

    urls.push({
     url:  'https://github.com/', 
     shortCode: 'git' ,
     dateCreated: new Date('2023-02-11T11:06:16'),
     visits: 5
   })

 }

module.exports = {
  urls,
  seedSampleData
};