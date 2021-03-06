/*
 * Copyright 2019 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = {
  getZones: {
    "zones": [{
      "status": "Active",
      "account": "a0b5ea74-cc05-4932-a294-9bf935d52744",
      "name": "list-zones-test-searched-1.",
      "created": "2016-12-16T15:21:47Z",
      "adminGroupId": "a0b5ea74-cc05-4932-a294-9bf935d52744",
      "email": "test@test.com",
      "shared": false,
      "acl": {
        "rules": []
      },
      "id": "31a3d8a9-bea0-458f-9c24-3d39d4b929d6"
    }]
  },

  getZone: {
    "zone": {
      "status": "Active",
      "account": "6baa85ad-267f-44ff-b535-818b7d7a2467",
      "name": "system-test.",
      "created": "2016-12-28T18:12:09Z",
      "adminGroupId": "6baa85ad-267f-44ff-b535-818b7d7a2467",
      "email": "test@example.com",
      "connection": {
        "primaryServer": "127.0.0.1:5301",
        "keyName": "vinyl.",
        "name": "system-test.",
        "key": "OBF:1:B2cetOaRf1YAABAAek/w22XyKAleCRjA/hZO9fkNtNufPIRWTYHXviAk9GjrfcFOG9nNuB=="
      },
      "transferConnection": {
        "primaryServer": "127.0.0.1:5301",
        "keyName": "vinyl.",
        "name": "system-test.",
        "key": "OBF:1:PNt2k1nYkC0AABAAePpNMrDp+4C4GDbicWWlAqB5c4mKoKhvfpiWY1PfuRCVzSAeXydztB=="
      },
      "shared": true,
      "acl": {
        "rules": []
      },
      "id": "0f2fcece-b4ee-4982-b671-e5946f7db81d"
    }
  },

  createZone: {
    "status": "Pending",
    "zone": {
      "status": "Pending",
      "account": "test_group",
      "name": "dummy.",
      "created": "2016-12-28T18:00:32Z",
      "adminGroupId": "test-group-id",
      "email": "test@test.com",
      "shared": false,
      "acl": {
        "rules": []
      },
      "id": "8ba20b72-cfdb-49d3-9216-9100aeaee7fc"
    },
    "created": "2016-12-28T18:00:32Z",
    "changeType": "Create",
    "userId": "vinyl",
    "id": "dd449c27-bed5-4cd5-95e6-4c54fb20d930"
  },

  updateZone: {
    "zone": {
      "name": "dummy.",
      "email": "update@update.com",
      "status": "Active",
      "created": "2017-02-23T14:52:44Z",
      "updated": "2017-02-23T19:23:26Z",
      "id": "2467dc05-68eb-4498-a9d5-78d24bb0893c",
      "account": "9b22b686-54bc-47fb-a8f8-cdc48e6d04ae",
      "shared": false,
      "acl": {
        "rules": []
      },
      "adminGroupId": "9b22b686-54bc-47fb-a8f8-cdc48e6d04ae",
      "latestSync": "2017-02-23T19:05:33Z"
    },
    "userId": "0215d410-9b7e-4636-89fd-b6b948a06347",
    "changeType": "Update",
    "status": "Pending",
    "created": "2017-02-23T19:23:26Z",
    "id": "d1fcd28d-61fe-4c24-ac0b-4377d66d50db"
  },

  deleteZone: {
    "status": "Pending",
    "zone": {
      "status": "Deleted",
      "updated": "2016-12-28T18:45:53Z",
      "name": "443ad9ff-8f38-4540-b53f-e23a35fdfc28.",
      "adminGroupId": "test-group-id",
      "created": "2016-12-28T18:45:53Z",
      "account": "test_group",
      "email": "test@test.com",
      "shared": false,
      "acl": {
        "rules": []
      },
      "id": "4995e883-f314-4c5f-8ee8-75003ca08ab0"
    },
    "created": "2016-12-28T18:45:53Z",
    "changeType": "Delete",
    "userId": "vinyl",
    "id": "89c463e3-1615-42f7-8299-a0ca7ccea439"
  },

  getGroups: {
    "maxItems": 100,
    "groups": [
      {
        "id": "93887728-2b26-4749-ba69-98871dda9cc0",
        "name": "some-other-group",
        "email": "test@example.com",
        "created": "2017-03-02T16:23:07Z",
        "status": "Active",
        "members": [
          {
            "id": "2764183c-5e75-4ae6-8833-503cd5f4dcb0"
          }
        ],
        "admins": [
          {
            "id": "2764183c-5e75-4ae6-8833-503cd5f4dcb0"
          }
        ]
      }
    ]
  },

  getGroup: {
    "id": "6f8afcda-7529-4cad-9f2d-76903f4b1aca",
    "name": "some-group",
    "email": "test@example.com",
    "created": "2017-03-02T15:29:21Z",
    "status": "Active",
    "members": [
      {
        "id": "2764183c-5e75-4ae6-8833-503cd5f4dcb0"
      },
      {
        "id": "c8630ebc-0af2-4c9a-a0a0-d18c590ed03e"
      }
    ],
    "admins": [
      {
        "id": "2764183c-5e75-4ae6-8833-503cd5f4dcb0"
      }
    ]
  }
};
