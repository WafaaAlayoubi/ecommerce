import { getStorage, ref as ref1,getDownloadURL  } from "firebase/storage";
import { getDatabase, ref as ref2, child, get,onValue } from "firebase/database";

export function getProducts() {

  const storage = getStorage();
  const db = getDatabase();
  const starCountRef = ref2(db, 'products/');
     
  return new Promise((resolve) =>
       // Get metadata properties
       onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        resolve({ data: data})
      })

      //  getDownloadURL(ref(storage, 'pfp.jpg'))
      // .then((url) => {
      //  // Metadata now contains the metadata for 'images/forest.jpg'
      
      //  resolve({ data: [url] })
      //  })
      //  .catch((error) => {
      //  // Uh-oh, an error occurred!
      //  resolve({ data: "error"})
      //  })  
  );
}

