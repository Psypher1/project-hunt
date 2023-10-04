/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("550fnq2sm0mn4ux")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dqigwpwc",
    "name": "link",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("550fnq2sm0mn4ux")

  // remove
  collection.schema.removeField("dqigwpwc")

  return dao.saveCollection(collection)
})
