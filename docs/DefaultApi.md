# DicClient.DefaultApi

All URIs are relative to *http://diabetesincontrol.com/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**categorySubcategoriesGet**](DefaultApi.md#categorySubcategoriesGet) | **GET** /{category}/{subcategories}/ | Categories
[**categorySubcategoriesPagePageGet**](DefaultApi.md#categorySubcategoriesPagePageGet) | **GET** /{category}/{subcategories}/page/{page}/ | Pagination Categories
[**pagePageNumGet**](DefaultApi.md#pagePageNumGet) | **GET** /page/{pageNum}/ | Free search
[**rootGet**](DefaultApi.md#rootGet) | **GET** / | Free search


<a name="categorySubcategoriesGet"></a>
# **categorySubcategoriesGet**
> Feed categorySubcategoriesGet(category, subcategories, json)

Categories

Categories

### Example
```javascript
var DicClient = require('dic-client');

var apiInstance = new DicClient.DefaultApi();

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

<a name="categorySubcategoriesPagePageGet"></a>
# **categorySubcategoriesPagePageGet**
> Feed categorySubcategoriesPagePageGet(category, subcategories, page, json)

Pagination Categories

Pagination Categories

### Example
```javascript
var DicClient = require('dic-client');

var apiInstance = new DicClient.DefaultApi();

var category = "category_example"; // String | 

var subcategories = "subcategories_example"; // String | 

var page = "page_example"; // String | 

var json = 1.2; // Number | 1 menu

apiInstance.categorySubcategoriesPagePageGet(category, subcategories, page, json).then(function(data) {
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
 **page** | **String**|  | 
 **json** | **Number**| 1 menu | 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="pagePageNumGet"></a>
# **pagePageNumGet**
> SearchFeed pagePageNumGet(pageNum, s, json)

Free search

free search posts list

### Example
```javascript
var DicClient = require('dic-client');

var apiInstance = new DicClient.DefaultApi();

var pageNum = "pageNum_example"; // String | Pagination Free search query.

var s = "s_example"; // String | Free search query.

var json = 1.2; // Number | Scope under which the request is made; determines fields present in response.

apiInstance.pagePageNumGet(pageNum, s, json).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNum** | **String**| Pagination Free search query. | 
 **s** | **String**| Free search query. | 
 **json** | **Number**| Scope under which the request is made; determines fields present in response. | 

### Return type

[**SearchFeed**](SearchFeed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="rootGet"></a>
# **rootGet**
> SearchFeed rootGet(s, json)

Free search

free search posts list

### Example
```javascript
var DicClient = require('dic-client');

var apiInstance = new DicClient.DefaultApi();

var s = "s_example"; // String | Free search query.

var json = 1.2; // Number | Scope under which the request is made; determines fields present in response.

apiInstance.rootGet(s, json).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **s** | **String**| Free search query. | 
 **json** | **Number**| Scope under which the request is made; determines fields present in response. | 

### Return type

[**SearchFeed**](SearchFeed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

