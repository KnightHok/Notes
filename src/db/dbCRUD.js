import { openDB} from "idb";

// ADD/CREATE
export async function addNote(e, note) {
  e.preventDefault();
  const db = await openDB("Notes", 2.0, {
    upgrade(db) {
      if (db.objectStoreNames.contains("Note")) {
        db.deleteObjectStore("Note");
      }
      const store = db.createObjectStore("Note", {
        keyPath: "id",
        autoIncrement: true,
      });

      store.createIndex("title", "title", { unique: false });
      store.createIndex("contents", "contents", { unique: false });
    },
    // blocking() {
    //   if()
    // }
  });

  // show what is in note then add to database
  console.log(note);
  await db.add(["Note"], note);
  db.close();

  //     db.createIndex("completed", "completed", { unique: false });
  //     db.createIndex("date", "date", { unique: false });
  //   }
  // });
}

// GET/READ
export async function getAllNotes(e) {
  //e.preventDefault();
  let note;
  const db = await openDB("Notes", 2.0, {
    upgrade(db) {
      if (db.objectStoreNames.contains("Note")) {
        db.deleteObjectStore("Note");
      }
      const store = db.createObjectStore("Note", {
        keyPath: "id",
        autoIncrement: true,
      });

      store.createIndex("title", "title", { unique: false });
      store.createIndex("contents", "contents", { unique: false });
    },
  });
  note = await db.getAll("Note");

  db.close();
  return note;
}
