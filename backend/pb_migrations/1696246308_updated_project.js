/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("550fnq2sm0mn4ux")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jk14mqwj",
    "name": "tagline",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("550fnq2sm0mn4ux")

  // remove
  collection.schema.removeField("jk14mqwj")

  return dao.saveCollection(collection)
})
