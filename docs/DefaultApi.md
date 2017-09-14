# DicClient.DefaultApi

All URIs are relative to *http://diabetesincontrol.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**geoGeoJsonGet**](DefaultApi.md#geoGeoJsonGet) | **GET** /geo/geo.json | Get Geo
[**getCategoryPostsGet**](DefaultApi.md#getCategoryPostsGet) | **GET** /get_category_posts/ | Categories
[**getRecentPostsGet**](DefaultApi.md#getRecentPostsGet) | **GET** /get_recent_posts/ | Pagination Categories
[**getSearchResultsGet**](DefaultApi.md#getSearchResultsGet) | **GET** /get_search_results/ | Free search


<a name="geoGeoJsonGet"></a>
# **geoGeoJsonGet**
> Geo geoGeoJsonGet()

Get Geo

get geo json

### Example
```javascript
var DicClient = require('dic-client');

var apiInstance = new DicClient.DefaultApi();
apiInstance.geoGeoJsonGet().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Geo**](Geo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCategoryPostsGet"></a>
# **getCategoryPostsGet**
> Feed getCategoryPostsGet(slug, page, count)

Categories

Categories

### Example
```javascript
var DicClient = require('dic-client');

var apiInstance = new DicClient.DefaultApi();

var slug = "slug_example"; // String | 

var page = 1.2; // Number | what page number we ask.

var count = 1.2; // Number | number per page

apiInstance.getCategoryPostsGet(slug, page, count).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **String**|  | 
 **page** | **Number**| what page number we ask. | 
 **count** | **Number**| number per page | 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRecentPostsGet"></a>
# **getRecentPostsGet**
> Feed getRecentPostsGet(page, count)

Pagination Categories

Pagination Categories

### Example
```javascript
var DicClient = require('dic-client');

var apiInstance = new DicClient.DefaultApi();

var page = 1.2; // Number | what page number we ask.

var count = 1.2; // Number | number per page

apiInstance.getRecentPostsGet(page, count).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **Number**| what page number we ask. | 
 **count** | **Number**| number per page | 

### Return type

[**Feed**](Feed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getSearchResultsGet"></a>
# **getSearchResultsGet**
> SearchFeed getSearchResultsGet(search, page, count)

Free search

free search posts list

### Example
```javascript
var DicClient = require('dic-client');

var apiInstance = new DicClient.DefaultApi();

var search = "search_example"; // String | Free search query.

var page = 1.2; // Number | what page number we ask.

var count = 1.2; // Number | number per page

apiInstance.getSearchResultsGet(search, page, count).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**| Free search query. | 
 **page** | **Number**| what page number we ask. | 
 **count** | **Number**| number per page | 

### Return type

[**SearchFeed**](SearchFeed.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

