import React from "react";

import { openDB, deleteDB, wrap, unwrap } from "idb";


// get
const getDBObjectStore = ( mode ) => {
    const unwrappedDB =  openDB("Notes", '0.1.0', {
        upgrade(db) {
            db.createObjectStore("Note", {keyPath: "id", autoIncrement: true});
            db.createIndex("title", "title", { unique: false });
            db.createIndex("contents", "contents", { unique: false });
            db.createIndex("date", "date", { unique: false });
        }
    });
    const wrappedDB = wrap(unwrappedDB);
    
    return wrappedDB.transaction("Note", mode).objectStore("Note");

}

module.exports = {
    getDBObjectStore: getDBObjectStore
};