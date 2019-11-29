` /api/records`

| Parameters | Description |
| ------ | ----------- |
| startDate   | Date (YYYY-MM-DD) |
| endDate | Date (YYYY-MM-DD |
| minCount    | number |
| maxCount    | number |

### Request
```json
{
   "startDate":"2016-12-12",
   "endDate":"2018-02-02",
   "minCount":4500,
   "maxCount":5000
}
```

### Response

```json
{
   "code":0,
   "msg":"success",
   "records":[
      {
         "key":"HwibmEJ8d864whuc",
         "createdAt":"2016-12-12T00:47:19.297Z",
         "totalCount":4500
      },
      {
         "key":"NJEk7yJlcfeSELDx",
         "createdAt":"2016-12-12T01:30:06.767Z",
         "totalCount":4500
      }
   ]
}
```