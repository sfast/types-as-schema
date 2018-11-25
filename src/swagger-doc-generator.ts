import { TypeDeclaration } from './utils'

export function generateSwaggerDoc(_typeDeclarations: TypeDeclaration[]) {
  return `{
    "swagger": "2.0",
    "paths": {
        "/pet/{petId}": {
            "get": {
                "operationId": "getPetById",
                "parameters": [
                    {
                        "name": "petId",
                        "required": true,
                        "type": "integer"
                    }
                ],
                "responses": {
                    "200": {
                        "schema": {
                            "$ref": "#/definitions/Pet"
                        }
                    }
                }
            }
        }
    },
    "definitions": {
        "Pet": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "number"
                },
                "name": {
                    "type": "string"
                },
                "photoUrls": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "status": {
                    "type": "string",
                    "enum": [
                        "available",
                        "pending",
                        "sold"
                    ]
                }
            },
            "required": [
                "name",
                "photoUrls",
                "status"
            ],
            "additionalProperties": false
        }
    }
}`
}
