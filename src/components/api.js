import * as firebase from 'firebase'

export const addToCollection = (collection, type, brand) => {
	let doc = firebase.firestore()
		.collection(collection)
		.doc()

    return doc.set({
    	id: doc.id,
      	type: type,
      	brand: brand,
      	verified: false,
      	addedAt: firebase.firestore.FieldValue.serverTimestamp()
    })

}

export const listenToCollection = (collection, _onSnapshot, onError) => {
    return firebase.firestore()
	    .collection(collection)
	    .orderBy("addedAt", "desc")
	    .onSnapshot(snapshot => {
	      let items = []
	        
	      snapshot.forEach(doc => {
	        items.push(doc.data())
	      })

	      _onSnapshot(items)

	    }, err => onError(err) /* THROW ?? */ )
}

export const updateItem = (collection, id, assignment) => {
    return firebase.firestore()
	    .collection(collection)
	    .doc(id)
	    .update(assignment)
}

export const searchByField = (collection, field, value) => {
	return firebase.firestore()
		.collection(collection)
		.where(field, "==", value)
		.orderBy("addedAt", "desc")
		.get()
}

export const search = (collection, id) => {
	return firebase.firestore()
		.collection(collection)
		.doc(id)
		.get()
}