/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("550fnq2sm0mn4ux")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qd3qxt9g",
    "name": "title",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 5,
      "max": 60,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jk14mqwj",
    "name": "tagline",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 3,
      "max": 200,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d654uith",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 5,
      "max": 512,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("550fnq2sm0mn4ux")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qd3qxt9g",
    "name": "title",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 5,
      "max": 60,
      "pattern": ""
    }
  }))

  // update
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d654uith",
    "name": "description",
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
})
