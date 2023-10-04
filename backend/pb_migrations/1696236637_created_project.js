/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "550fnq2sm0mn4ux",
    "created": "2023-10-02 08:50:37.249Z",
    "updated": "2023-10-02 08:50:37.249Z",
    "name": "project",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qd3qxt9g",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("550fnq2sm0mn4ux");

  return dao.deleteCollection(collection);
})
