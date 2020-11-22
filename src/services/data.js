import firebase from "firebase/app";
import "firebase/firestore";

function getCollection(collection) {
  return firebase.firestore().collection(collection);
}

function parseDocument(doc) {
  return {
    id: doc.id,
    ...doc.data(),
  };
}

export async function addObjectWithId(collection, id, obj) {
  try {
    const db = getCollection(collection);
    await db.doc(id).set(obj);
    return true;
  } catch (error) {
    console.log("addObjectWithId -> error", error);
    return false;
  }
}

export async function addObject(collection, obj) {
  try {
    const db = getCollection(collection);
    const result = await db.add(obj);
    return result.id;
  } catch (error) {
    console.log("addObject -> error", error);
    return null;
  }
}

export async function getObjectById(collection, id) {
  try {
    const db = getCollection(collection);
    const obj = await db.doc(id).get();
    if (obj.exists) {
      return parseDocument(obj);
    }
    return null;
  } catch (error) {
    console.log("getObjectById -> error", error);
  }
}

// export async function listObjects(collection, filter) {
//   try {
//     let db = getCollection(collection);
//     if (filter) {
//       db = db.where(filter.field, filter.condition, filter.value);
//     }
//     const querySnapshot = await db.get();
//     const data = [];
//     querySnapshot.forEach((doc) => {
//       data.push(parseDocument(doc));
//     });
//     return data;
//   } catch (error) {
//     console.log("listObjects -> error", error);
//     return [];
//   }
// }

// export async function updateObjectById(collection, id, updateFields) {
//   try {
//     const db = getCollection(collection);
//     const obj = db.doc(id);
//     await obj.update(updateFields);
//     return true;
//   } catch (error) {
//     console.log("updateObjectById -> error", error);
//     return false;
//   }
// }

// export async function removeObjectById(collection, id) {
//   try {
//     const db = getCollection(collection);
//     const obj = db.doc(id);
//     await obj.delete();
//     return true;
//   } catch (error) {
//     console.log("removeObjectById -> error", error);
//     return false;
//   }
// }

export function setupCollectionObserver(collection, onChange) {
  let db = getCollection(collection);
  db.onSnapshot((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push(parseDocument(doc));
    });
    onChange(data);
  });
}

export function getAllDocuments(collection) {
  try {
    const db = getCollection(collection);
    return db.get().then(function (querySnapshot) {
      const DocumentsArray = [];
      querySnapshot.forEach(function (doc) {
        DocumentsArray.push(doc.data());
      });
      return DocumentsArray;
    });
  } catch (error) {
    return false;
  }
}
