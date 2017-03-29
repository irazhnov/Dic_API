# SomeClient.PostsApi

All URIs are relative to *http://dev.diabetesincontrol.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**diabetesTherapiesGet**](PostsApi.md#diabetesTherapiesGet) | **GET** /diabetes-therapies | List Posts


<a name="diabetesTherapiesGet"></a>
# **diabetesTherapiesGet**
> Feed diabetesTherapiesGet(json)

List Posts

posts list 

### Example
```javascript
var SomeClient = require('some-client');

var apiInstance = new SomeClient.PostsApi();

var json = 1.2; // Number | Scope under which the request is made; determines fields present in response.

apiInstance.diabetesTherapiesGet(json).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **json** | **Number**| Scope under which the request is made; determines fields present in response. | 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

