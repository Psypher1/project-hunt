/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("550fnq2sm0mn4ux")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = "@request.auth.id != \"\" && @request.auth.id = @request.data.user"
  collection.updateRule = "@request.auth.id = user"
  collection.deleteRule = "@request.auth.id = user"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2jal4cfa",
    "name": "user",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wwqlv5sd",
    "name": "thumbnail",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/png",
        "image/svg+xml",
        "image/gif",
        "image/jpeg"
      ],
      "thumbs": [
        "80x80"
      ],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("550fnq2sm0mn4ux")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  // remove
  collection.schema.removeField("2jal4cfa")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wwqlv5sd",
    "name": "thumbnail",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/png",
        "image/svg+xml",
        "image/gif",
        "image/jpeg"
      ],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
