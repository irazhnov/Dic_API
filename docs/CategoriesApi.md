# DicClient.CategoriesApi

All URIs are relative to *http://diabetesincontrol.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**categorySubcategoriesGet**](CategoriesApi.md#categorySubcategoriesGet) | **GET** /{category}/{subcategories}/ | Categories


<a name="categorySubcategoriesGet"></a>
# **categorySubcategoriesGet**
> Feed categorySubcategoriesGet(category, subcategories, json)

Categories

Categories

### Example
```javascript
var DicClient = require('dic-client');

var apiInstance = new DicClient.CategoriesApi();

var category = "category_example"; // String | 

var subcategories = "subcategories_example"; // String | 

var json = 1.2; // Number | 1 menu

apiInstance.categorySubcategoriesGet(category, subcategories, json).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **String**|  | 
 **subcategories** | **String**|  | 
 **json** | **Number**| 1 menu | 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

